import { http } from '@/utils/http';
import { type GradeType } from '@/constants/grade';

export interface MeResponse {
  point: number;
  grade: GradeType;
}

export const getMe = async () => {
  return http.get<MeResponse>('/api/me');
};
