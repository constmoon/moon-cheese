import { Currency, type CurrencyType } from '@/constants/currency';
import { queryOptions } from '@tanstack/react-query';
import { getExchangeRate } from '@/api/currency';

type ExchangeRate = Record<CurrencyType, number>;

const DEFAULT_EXCHANGE_RATE: ExchangeRate = {
  [Currency.USD]: 1,
  [Currency.KRW]: 1300,
};

export const currencyQueries = {
  exchangeRate: () =>
    queryOptions({
      queryKey: ['exchange-rate'],
      queryFn: getExchangeRate,
      placeholderData: DEFAULT_EXCHANGE_RATE,
    }),
};
