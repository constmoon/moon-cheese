export const GRADE_NAMES = {
  EXPLORER: 'EXPLORER',
  PILOT: 'PILOT',
  COMMANDER: 'COMMANDER',
} as const;

export const GRADE_NAMES_LABEL = {
  [GRADE_NAMES.EXPLORER]: 'Explorer',
  [GRADE_NAMES.PILOT]: 'Pilot',
  [GRADE_NAMES.COMMANDER]: 'Commander',
} as const;

export type GradeType = keyof typeof GRADE_NAMES;
