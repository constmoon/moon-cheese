import { getMe } from '@/api/me';
import { queryOptions } from '@tanstack/react-query';

export const meQueries = {
  me: () =>
    queryOptions({
      queryKey: ['me'],
      queryFn: getMe,
    }),
};
