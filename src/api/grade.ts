import { http } from '@/utils/http';
import { type GradeType } from '@/constants/grade';

export interface GradePointItem {
  type: GradeType;
  minPoint: number;
}

export interface GradePointResponse {
  gradePointList: GradePointItem[];
}

export const getGradePoint = async () => {
  return http.get<GradePointResponse>('/api/grade/point');
};
