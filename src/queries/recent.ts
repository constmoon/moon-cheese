import { getRecentPurchaseProductList } from '@/api/recent';
import { queryOptions } from '@tanstack/react-query';

export const recentQueries = {
  purchaseProductList: () =>
    queryOptions({
      queryKey: ['recent-purchase-product-list'],
      queryFn: getRecentPurchaseProductList,
    }),
};
