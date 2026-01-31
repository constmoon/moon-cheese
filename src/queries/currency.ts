import { queryOptions } from '@tanstack/react-query';
import { getExchangeRate } from '@/api/currency';
import { DEFAULT_EXCHANGE_RATE } from '@/constants/currency';

export const currencyQueries = {
  exchangeRate: () =>
    queryOptions({
      queryKey: ['exchange-rate'],
      queryFn: getExchangeRate,
      placeholderData: DEFAULT_EXCHANGE_RATE,
    }),
};
