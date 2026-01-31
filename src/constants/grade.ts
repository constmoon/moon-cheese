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

export const GRADE_POINTS = {
  [GRADE_NAMES.EXPLORER]: 0,
  [GRADE_NAMES.PILOT]: 3.5,
  [GRADE_NAMES.COMMANDER]: 7,
} as const;

export type GradeType = keyof typeof GRADE_NAMES;
export type GradePoint = keyof typeof GRADE_POINTS;
