export const Currency = {
  USD: 'USD',
  KRW: 'KRW',
} as const;

export type CurrencyType = keyof typeof Currency;

export const DEFAULT_EXCHANGE_RATE: Record<CurrencyType, number> = {
  [Currency.USD]: 1,
  [Currency.KRW]: 1300,
};
