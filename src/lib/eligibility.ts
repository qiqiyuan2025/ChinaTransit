import type { EligibilityResult, Country, Port, Groups } from './types';
import countriesData from '../data/countries.json';
import portsData from '../data/ports.json';
import groupsData from '../data/groups.json';

const countries = countriesData as Country[];
const ports = portsData as Port[];
const groups = groupsData as Groups;

// Regions that count as "different country" for third-country rule
const SEPARATE_REGIONS = ['HK', 'MO', 'TW'];

export function checkEligibility(
  nationalityCode: string,
  entryPortId: string,
  exitDestination: string
): EligibilityResult {
  // Check nationality
  const isEligible = countries.some((c) => c.code === nationalityCode);
  if (!isEligible) {
    return {
      eligible: false,
      hours: 0,
      provinces: [],
      regionalGroup: '',
      restrictions: [],
      arrivalCardUrl: 'https://s.nia.gov.cn',
      clockStart: '',
      mustExitBy: '',
      thirdCountryValid: false,
      errorCode: 'NATIONALITY_INELIGIBLE',
      errorMessage: `Passport holders from this country are not currently eligible for the 240-hour transit visa-free policy.`,
    };
  }

  // Find entry port
  const entryPort = ports.find((p) => p.id === entryPortId);
  if (!entryPort) {
    return {
      eligible: false,
      hours: 0,
      provinces: [],
      regionalGroup: '',
      restrictions: [],
      arrivalCardUrl: 'https://s.nia.gov.cn',
      clockStart: '',
      mustExitBy: '',
      thirdCountryValid: false,
      errorCode: 'PORT_PAIR_INVALID',
      errorMessage: 'Entry port not found.',
    };
  }

  // Get the regional group
  const group = groups[entryPort.group];
  if (!group) {
    return {
      eligible: false,
      hours: 0,
      provinces: [],
      regionalGroup: '',
      restrictions: [],
      arrivalCardUrl: 'https://s.nia.gov.cn',
      clockStart: '',
      mustExitBy: '',
      thirdCountryValid: false,
      errorCode: 'PORT_PAIR_INVALID',
      errorMessage: 'Regional group not found for this port.',
    };
  }

  // Check third-country rule
  const isSameCountry =
    exitDestination === nationalityCode &&
    !SEPARATE_REGIONS.includes(exitDestination);

  if (isSameCountry) {
    return {
      eligible: false,
      hours: 0,
      provinces: group.provinces,
      regionalGroup: group.name,
      restrictions: [],
      arrivalCardUrl: 'https://s.nia.gov.cn',
      clockStart: '',
      mustExitBy: '',
      thirdCountryValid: false,
      errorCode: 'SAME_COUNTRY_EXIT',
      errorMessage: `Your exit destination must be a different country from your origin. Hong Kong, Macau, and Taiwan count as separate regions for this purpose.`,
    };
  }

  // Get exit ports in the same group
  const exitPorts = ports
    .filter((p) => p.group === entryPort.group)
    .map((p) => `${p.name} (${p.city})`);

  return {
    eligible: true,
    hours: 240,
    provinces: group.provinces,
    regionalGroup: group.name,
    restrictions: [
      `You must stay within: ${group.provinces.join(', ')}`,
      `Exit from any port in the ${group.name} region`,
      `The 240-hour clock starts at 00:00 on the day after arrival`,
      `Entry day and exit day both count toward the 240 hours`,
    ],
    arrivalCardUrl: 'https://s.nia.gov.cn',
    clockStart: '00:00 on the day after arrival',
    mustExitBy: '240 hours from clock start (10 calendar days)',
    thirdCountryValid: true,
  };
}

export function getPortsForGroup(groupId: string): Port[] {
  return ports.filter((p) => p.group === groupId);
}

export function getAllPorts(): Port[] {
  return ports;
}

export function getAllCountries(): Country[] {
  return countries;
}

export function getGroupForPort(portId: string): string | undefined {
  const port = ports.find((p) => p.id === portId);
  return port?.group;
}
