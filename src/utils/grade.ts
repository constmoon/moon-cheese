import { type GradePointItem } from '@/api/grade';
import { type GradeType } from '@/constants/grade';

function getMinPoint(grade: GradeType, gradePointList: GradePointItem[]): number {
  return gradePointList.find(item => item.type === grade)?.minPoint ?? 0;
}

function getNextGrade(currentGrade: GradeType, gradePointList: GradePointItem[]): GradeType | null {
  const sorted = [...gradePointList].sort((a, b) => a.minPoint - b.minPoint);
  const currentIndex = sorted.findIndex(item => item.type === currentGrade);
  const hasNextGrade = currentIndex < sorted.length - 1;

  return hasNextGrade ? sorted[currentIndex + 1].type : null;
}

export function getGradeProgress(point: number, currentGrade: GradeType, gradePointList: GradePointItem[]): number {
  if (gradePointList.length === 0) {
    return 0;
  }

  const nextGrade = getNextGrade(currentGrade, gradePointList);
  if (!nextGrade) {
    return 1;
  }

  const currentMin = getMinPoint(currentGrade, gradePointList);
  const nextMin = getMinPoint(nextGrade, gradePointList);
  const progress = (point - currentMin) / (nextMin - currentMin);

  return Math.min(Math.max(progress, 0), 1);
}

export function getPointsToNextGrade(
  point: number,
  currentGrade: GradeType,
  gradePointList: GradePointItem[]
): number | null {
  const nextGrade = getNextGrade(currentGrade, gradePointList);
  if (!nextGrade) {
    return null;
  }

  const nextMin = getMinPoint(nextGrade, gradePointList);
  return Math.max(nextMin - point, 0);
}
