import { getProductList } from '@/api/product';
import { queryOptions } from '@tanstack/react-query';

export const productQueries = {
  productList: () =>
    queryOptions({
      queryKey: ['product-list'],
      queryFn: getProductList,
    }),
};
