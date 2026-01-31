export const GRADE_NAMES = {
  EXPLORER: 'Explorer',
  PILOT: 'Pilot',
  COMMANDER: 'Commander',
} as const;

export type GradeType = keyof typeof GRADE_NAMES;
