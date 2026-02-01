import { getRecentProductList } from '@/api/recent';
import { queryOptions } from '@tanstack/react-query';

export const recentQueries = {
  productList: () =>
    queryOptions({
      queryKey: ['recent-product-list'],
      queryFn: getRecentProductList,
    }),
};
