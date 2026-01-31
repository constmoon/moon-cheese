export const Currency = {
  USD: 'USD',
  KRW: 'KRW',
};

export type CurrencyType = (typeof Currency)[keyof typeof Currency];
