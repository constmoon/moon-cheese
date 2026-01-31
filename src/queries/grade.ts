import { getGradePoint } from '@/api/grade';
import { queryOptions } from '@tanstack/react-query';

export const gradeQueries = {
  point: () =>
    queryOptions({
      queryKey: ['grade-point'],
      queryFn: getGradePoint,
    }),
};
