import { GRADE_NAMES, GRADE_POINTS, type GradeType } from '@/constants/grade';

const GRADE_ORDER: GradeType[] = [GRADE_NAMES.EXPLORER, GRADE_NAMES.PILOT, GRADE_NAMES.COMMANDER];

function getNextGrade(currentGrade: GradeType): GradeType | null {
  const currentIndex = GRADE_ORDER.indexOf(currentGrade);
  return currentIndex < GRADE_ORDER.length - 1 ? GRADE_ORDER[currentIndex + 1] : null;
}

export function getGradeProgress(point: number, currentGrade: GradeType): number {
  const nextGrade = getNextGrade(currentGrade);
  if (!nextGrade) {
    return 1;
  }

  const currentMin = GRADE_POINTS[currentGrade];
  const nextMin = GRADE_POINTS[nextGrade];
  const progress = (point - currentMin) / (nextMin - currentMin);

  return Math.min(Math.max(progress, 0), 1);
}

export function getPointsToNextGrade(point: number, currentGrade: GradeType): number | null {
  const nextGrade = getNextGrade(currentGrade);
  if (!nextGrade) {
    return null;
  }

  return Math.max(GRADE_POINTS[nextGrade] - point, 0);
}
