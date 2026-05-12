import { useState, useEffect, useMemo } from 'react';
import {
  checkEligibility,
  getAllCountries,
  getAllPorts,
  getPortsForGroup,
  getGroupForPort,
} from '../lib/eligibility';
import type { EligibilityResult } from '../lib/types';
import { getTranslations } from '../i18n/utils';
import type { Locale } from '../i18n/translations';

type Step = 'nationality' | 'entry' | 'exit' | 'result';

export default function VisaChecker({ locale = 'en' as Locale }: { locale?: Locale }) {
  const t = getTranslations(locale);
  const [step, setStep] = useState<Step>('nationality');
  const [nationality, setNationality] = useState('');
  const [entryPort, setEntryPort] = useState('');
  const [exitDestination, setExitDestination] = useState('');
  const [result, setResult] = useState<EligibilityResult | null>(null);

  const countries = useMemo(() => getAllCountries(), []);

  // Prefill nationality from IP geolocation
  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then((r) => r.json())
      .then((data) => {
        if (data.country_code && countries.some((c) => c.code === data.country_code)) {
          setNationality(data.country_code);
        }
      })
      .catch(() => {}); // Silent fail — user picks manually
  }, [countries]);
  const allPorts = useMemo(() => getAllPorts(), []);

  // After entry port is selected, show only exit destinations (countries + HK/MO/TW)
  const exitOptions = useMemo(() => {
    const base = countries.map((c) => ({ code: c.code, label: `${c.flag} ${c.name}` }));
    // Add HK, MO, TW as separate exit destinations
    base.push(
      { code: 'HK', label: '🇭🇰 Hong Kong' },
      { code: 'MO', label: '🇲🇴 Macau' },
      { code: 'TW', label: '🇹🇼 Taiwan' }
    );
    return base.sort((a, b) => a.label.localeCompare(b.label));
  }, [countries]);

  function handleNationalitySelect(code: string) {
    setNationality(code);
    setEntryPort('');
    setExitDestination('');
    setResult(null);
    setStep('entry');
  }

  function handleEntryPortSelect(portId: string) {
    setEntryPort(portId);
    setExitDestination('');
    setResult(null);
    setStep('exit');
  }

  function handleExitSelect(destCode: string) {
    setExitDestination(destCode);
    const res = checkEligibility(nationality, entryPort, destCode);
    setResult(res);
    setStep('result');
  }

  function handleReset() {
    setStep('nationality');
    setNationality('');
    setEntryPort('');
    setExitDestination('');
    setResult(null);
  }

  function handleBack() {
    if (step === 'entry') {
      setStep('nationality');
      setEntryPort('');
    } else if (step === 'exit') {
      setStep('entry');
      setExitDestination('');
    } else if (step === 'result') {
      setStep('exit');
      setResult(null);
    }
  }

  const selectedCountry = countries.find((c) => c.code === nationality);
  const selectedPort = allPorts.find((p) => p.id === entryPort);

  return (
    <div className="max-w-reading mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <p className="font-chinese text-ink-light text-sm mb-2">{t.visaChecker.subtitleLocal}</p>
        <h1 className="font-display text-4xl font-bold text-ink">
          {t.visaChecker.title}
        </h1>
      </div>

      {/* Progress indicator */}
      <div className="flex items-center justify-center gap-2 mb-10">
        {(['nationality', 'entry', 'exit', 'result'] as Step[]).map((s, i) => (
          <div key={s} className="flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
                step === s
                  ? 'bg-mineral text-paper-50'
                  : i < ['nationality', 'entry', 'exit', 'result'].indexOf(step)
                  ? 'bg-jade text-paper-50'
                  : 'bg-paper-200 text-ink-light'
              }`}
            >
              {i + 1}
            </div>
            {i < 3 && (
              <div
                className={`w-8 h-0.5 ${
                  i < ['nationality', 'entry', 'exit', 'result'].indexOf(step)
                    ? 'bg-jade'
                    : 'bg-paper-300'
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Back button */}
      {step !== 'nationality' && (
        <button
          onClick={handleBack}
          className="mb-6 text-sm text-ink-light hover:text-mineral transition-colors flex items-center gap-1"
        >
          <span>←</span> {t.visaChecker.back}
        </button>
      )}

      {/* Step 1: Nationality */}
      {step === 'nationality' && (
        <div className="animate-fadeIn">
          <label className="block text-lg font-semibold mb-4">
            {t.visaChecker.passportQuestion}
          </label>
          <div className="relative">
            <select
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
              className="w-full p-4 bg-paper-100 border border-paper-300 rounded-lg text-ink text-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-mineral"
            >
              <option value="">{t.visaChecker.selectNationality}</option>
              {countries.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.flag} {c.name}
                </option>
              ))}
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-ink-light">
              ▾
            </div>
          </div>
          <p className="mt-3 text-sm text-ink-light">
            {t.visaChecker.eligibleCount}
          </p>
          <button
            onClick={() => nationality && handleNationalitySelect(nationality)}
            disabled={!nationality}
            className="mt-4 w-full p-4 bg-mineral text-paper-50 rounded-lg font-semibold hover:bg-mineral-light transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {t.visaChecker.continue}
          </button>
        </div>
      )}

      {/* Step 2: Entry port */}
      {step === 'entry' && (
        <div className="animate-fadeIn">
          <div className="mb-4 p-3 bg-paper-100 rounded-lg border border-paper-300 text-sm">
            <span className="text-ink-light">{t.visaChecker.passport}:</span>{' '}
            <span className="font-semibold">
              {selectedCountry?.flag} {selectedCountry?.name}
            </span>
          </div>
          <label className="block text-lg font-semibold mb-4">
            {t.visaChecker.entryQuestion}
          </label>
          <select
            value={entryPort}
            onChange={(e) => handleEntryPortSelect(e.target.value)}
            className="w-full p-4 bg-paper-100 border border-paper-300 rounded-lg text-ink text-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-mineral"
          >
            <option value="">{t.visaChecker.selectEntry}</option>
            {allPorts.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name} ({p.city}) — {p.type}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Step 3: Exit destination */}
      {step === 'exit' && (
        <div className="animate-fadeIn">
          <div className="mb-4 space-y-2">
            <div className="p-3 bg-paper-100 rounded-lg border border-paper-300 text-sm">
              <span className="text-ink-light">{t.visaChecker.passport}:</span>{' '}
              <span className="font-semibold">
                {selectedCountry?.flag} {selectedCountry?.name}
              </span>
            </div>
            <div className="p-3 bg-paper-100 rounded-lg border border-paper-300 text-sm">
              <span className="text-ink-light">{t.visaChecker.entryQuestion.replace('?', '')}:</span>{' '}
              <span className="font-semibold">
                {selectedPort?.name} ({selectedPort?.city})
              </span>
            </div>
          </div>
          <label className="block text-lg font-semibold mb-2">
            {t.visaChecker.exitQuestion}
          </label>
          <p className="text-sm text-ink-light mb-4">
            {t.visaChecker.exitDescription}
          </p>
          <select
            value={exitDestination}
            onChange={(e) => handleExitSelect(e.target.value)}
            className="w-full p-4 bg-paper-100 border border-paper-300 rounded-lg text-ink text-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-mineral"
          >
            <option value="">{t.visaChecker.selectExit}</option>
            {exitOptions.map((o) => (
              <option key={o.code} value={o.code}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Step 4: Result */}
      {step === 'result' && result && (
        <div className="animate-fadeIn">
          {result.eligible ? (
            <EligibleResult result={result} port={selectedPort!} t={t} />
          ) : (
            <IneligibleResult result={result} onReset={handleReset} t={t} />
          )}

          <button
            onClick={handleReset}
            className="mt-8 w-full p-3 border border-paper-300 rounded-lg text-ink-light hover:bg-paper-100 transition-colors text-sm"
          >
            {t.visaChecker.checkAnother}
          </button>
        </div>
      )}
    </div>
  );
}

function EligibleResult({
  result,
  port,
  t,
}: {
  result: EligibilityResult;
  port: { name: string; city: string };
  t: ReturnType<typeof getTranslations>;
}) {
  return (
    <div className="space-y-6">
      {/* Badge */}
      <div className="text-center p-8 bg-jade/10 border-2 border-jade rounded-xl">
        <div className="inline-block mb-3">
          <div className="w-16 h-16 rounded-full bg-jade text-paper-50 flex items-center justify-center text-2xl font-bold mx-auto">
            ✓
          </div>
        </div>
        <h2 className="font-display text-3xl font-bold text-jade mb-1">
          {t.visaChecker.eligible}
        </h2>
        <p className="font-chinese text-jade text-sm">{t.visaChecker.eligibleLocal}</p>
      </div>

      {/* Details */}
      <div className="space-y-4">
        <div className="p-4 bg-paper-100 rounded-lg border border-paper-300">
          <h3 className="font-semibold text-sm text-ink-light mb-2">
            {t.visaChecker.duration}
          </h3>
          <p className="text-2xl font-display font-bold">{result.hours} {t.visaChecker.hours}</p>
          <p className="text-sm text-ink-light mt-1">{result.clockStart}</p>
        </div>

        <div className="p-4 bg-paper-100 rounded-lg border border-paper-300">
          <h3 className="font-semibold text-sm text-ink-light mb-2">
            {t.visaChecker.accessibleProvinces}
          </h3>
          <p className="font-semibold">{result.regionalGroup}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {result.provinces.map((p) => (
              <span
                key={p}
                className="px-3 py-1 bg-paper-50 rounded-full text-sm border border-paper-300"
              >
                {p}
              </span>
            ))}
          </div>
        </div>

        <div className="p-4 bg-amber/10 rounded-lg border border-amber">
          <h3 className="font-semibold text-sm text-amber-dark mb-2">
            {t.visaChecker.importantRules}
          </h3>
          <ul className="space-y-2">
            {result.restrictions.map((r, i) => (
              <li key={i} className="text-sm flex gap-2">
                <span className="text-amber shrink-0">•</span>
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>

        <a
          href={result.arrivalCardUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block p-4 bg-mineral text-paper-50 rounded-lg text-center font-semibold hover:bg-mineral-light transition-colors"
        >
          {t.visaChecker.arrivalCard}
        </a>
      </div>
    </div>
  );
}

function IneligibleResult({
  result,
  onReset,
  t,
}: {
  result: EligibilityResult;
  onReset: () => void;
  t: ReturnType<typeof getTranslations>;
}) {
  const errorCode = result.errorCode as keyof typeof t.visaChecker.errors | undefined;
  const info = (errorCode && t.visaChecker.errors[errorCode])
    ? t.visaChecker.errors[errorCode]
    : t.visaChecker.errors.default;

  const hint = 'hint' in info ? info.hint : (result.errorMessage || '');

  return (
    <div className="text-center p-8 bg-cinnabar/10 border-2 border-cinnabar rounded-xl">
      <div className="inline-block mb-3">
        <div className="w-16 h-16 rounded-full bg-cinnabar text-paper-50 flex items-center justify-center text-2xl font-bold mx-auto">
          ✗
        </div>
      </div>
      <h2 className="font-display text-3xl font-bold text-cinnabar mb-1">
        {info.title}
      </h2>
      <p className="font-chinese text-cinnabar text-sm mb-4">{t.visaChecker.notEligibleLocal}</p>
      <p className="text-ink-light text-sm max-w-md mx-auto">{hint}</p>
    </div>
  );
}
