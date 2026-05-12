export type Country = {
  code: string;
  name: string;
  flag: string;
};

export type PortType = 'air' | 'land' | 'sea' | 'rail';

export type Port = {
  id: string;
  name: string;
  city: string;
  province: string;
  type: PortType;
  group: string;
};

export type RegionalGroup = {
  name: string;
  provinces: string[];
};

export type Groups = Record<string, RegionalGroup>;

export type ErrorCode =
  | 'NATIONALITY_INELIGIBLE'
  | 'PORT_PAIR_INVALID'
  | 'SAME_COUNTRY_EXIT';

export type EligibilityResult = {
  eligible: boolean;
  hours: number;
  provinces: string[];
  regionalGroup: string;
  restrictions: string[];
  arrivalCardUrl: string;
  clockStart: string;
  mustExitBy: string;
  thirdCountryValid: boolean;
  errorCode?: ErrorCode;
  errorMessage?: string;
};

export type FlowNodeType = 'question' | 'result' | 'action';

export type FlowOption = {
  label: string;
  nextId: string;
};

export type FlowNode = {
  id: string;
  type: FlowNodeType;
  text: string;
  options?: FlowOption[];
  actions?: string[];
  troubleshooting?: string[];
};
