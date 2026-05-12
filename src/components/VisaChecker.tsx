import { useState, useMemo } from 'react';
import {
  checkEligibility,
  getAllCountries,
  getAllPorts,
  getPortsForGroup,
  getGroupForPort,
} from '../lib/eligibility';
import type { EligibilityResult } from '../lib/types';

type Step = 'nationality' | 'entry' | 'exit' | 'result';

export default function VisaChecker() {
  const [step, setStep] = useState<Step>('nationality');
  const [nationality, setNationality] = useState('');
  const [entryPort, setEntryPort] = useState('');
  const [exitDestination, setExitDestination] = useState('');
  const [result, setResult] = useState<EligibilityResult | null>(null);

  const countries = useMemo(() => getAllCountries(), []);
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
        <p className="font-chinese text-ink-light text-sm mb-2">过境免签资格查询</p>
        <h1 className="font-display text-4xl font-bold text-ink">
          Visa-Free Transit Check
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
          <span>←</span> Back
        </button>
      )}

      {/* Step 1: Nationality */}
      {step === 'nationality' && (
        <div className="animate-fadeIn">
          <label className="block text-lg font-semibold mb-4">
            What passport do you hold?
          </label>
          <div className="relative">
            <select
              value={nationality}
              onChange={(e) => handleNationalitySelect(e.target.value)}
              className="w-full p-4 bg-paper-100 border border-paper-300 rounded-lg text-ink text-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-mineral"
            >
              <option value="">Select your nationality...</option>
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
            55 nationalities are currently eligible for the 240-hour transit visa-free policy.
          </p>
        </div>
      )}

      {/* Step 2: Entry port */}
      {step === 'entry' && (
        <div className="animate-fadeIn">
          <div className="mb-4 p-3 bg-paper-100 rounded-lg border border-paper-300 text-sm">
            <span className="text-ink-light">Passport:</span>{' '}
            <span className="font-semibold">
              {selectedCountry?.flag} {selectedCountry?.name}
            </span>
          </div>
          <label className="block text-lg font-semibold mb-4">
            Where will you enter China?
          </label>
          <select
            value={entryPort}
            onChange={(e) => handleEntryPortSelect(e.target.value)}
            className="w-full p-4 bg-paper-100 border border-paper-300 rounded-lg text-ink text-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-mineral"
          >
            <option value="">Select entry port...</option>
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
              <span className="text-ink-light">Passport:</span>{' '}
              <span className="font-semibold">
                {selectedCountry?.flag} {selectedCountry?.name}
              </span>
            </div>
            <div className="p-3 bg-paper-100 rounded-lg border border-paper-300 text-sm">
              <span className="text-ink-light">Entry:</span>{' '}
              <span className="font-semibold">
                {selectedPort?.name} ({selectedPort?.city})
              </span>
            </div>
          </div>
          <label className="block text-lg font-semibold mb-2">
            Where are you heading after China?
          </label>
          <p className="text-sm text-ink-light mb-4">
            Must be a different country/region from your origin. Hong Kong, Macau, and Taiwan count as separate regions.
          </p>
          <select
            value={exitDestination}
            onChange={(e) => handleExitSelect(e.target.value)}
            className="w-full p-4 bg-paper-100 border border-paper-300 rounded-lg text-ink text-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-mineral"
          >
            <option value="">Select exit destination...</option>
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
            <EligibleResult result={result} port={selectedPort!} />
          ) : (
            <IneligibleResult result={result} onReset={handleReset} />
          )}

          <button
            onClick={handleReset}
            className="mt-8 w-full p-3 border border-paper-300 rounded-lg text-ink-light hover:bg-paper-100 transition-colors text-sm"
          >
            Check another route
          </button>
        </div>
      )}
    </div>
  );
}

function EligibleResult({
  result,
  port,
}: {
  result: EligibilityResult;
  port: { name: string; city: string };
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
          Eligible
        </h2>
        <p className="font-chinese text-jade text-sm">符合过境免签条件</p>
      </div>

      {/* Details */}
      <div className="space-y-4">
        <div className="p-4 bg-paper-100 rounded-lg border border-paper-300">
          <h3 className="font-semibold text-sm text-ink-light mb-2">
            Duration
          </h3>
          <p className="text-2xl font-display font-bold">{result.hours} hours</p>
          <p className="text-sm text-ink-light mt-1">{result.clockStart}</p>
        </div>

        <div className="p-4 bg-paper-100 rounded-lg border border-paper-300">
          <h3 className="font-semibold text-sm text-ink-light mb-2">
            Accessible Provinces
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
            Important Rules
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
          Fill Out Digital Arrival Card →
        </a>
      </div>
    </div>
  );
}

function IneligibleResult({
  result,
  onReset,
}: {
  result: EligibilityResult;
  onReset: () => void;
}) {
  const messages: Record<string, { title: string; hint: string }> = {
    NATIONALITY_INELIGIBLE: {
      title: 'Not Eligible',
      hint: 'Your nationality is not currently covered by the 240-hour transit visa-free policy. You may need a standard visa — check with your nearest Chinese embassy or consulate.',
    },
    PORT_PAIR_INVALID: {
      title: 'Invalid Route',
      hint: 'The entry and exit ports must be within the same regional group. Try selecting a different entry port or check which ports belong to each region.',
    },
    SAME_COUNTRY_EXIT: {
      title: 'Same-Country Exit',
      hint: 'Your exit destination must be a different country from your origin. Try selecting a different destination. Hong Kong, Macau, and Taiwan count as separate regions.',
    },
  };

  const info = messages[result.errorCode || ''] || {
    title: 'Not Eligible',
    hint: result.errorMessage || '',
  };

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
      <p className="font-chinese text-cinnabar text-sm mb-4">不符合条件</p>
      <p className="text-ink-light text-sm max-w-md mx-auto">{info.hint}</p>
    </div>
  );
}
