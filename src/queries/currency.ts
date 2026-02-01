import { queryOptions } from '@tanstack/react-query';
import { getExchangeRate } from '@/api/currency';

export const currencyQueries = {
  exchangeRate: () =>
    queryOptions({
      queryKey: ['exchange-rate'],
      queryFn: getExchangeRate,
    }),
};
