import { Currency, type CurrencyType } from '@/constants/currency';

export function convertPrice(
  priceInUSD: number,
  toCurrency: CurrencyType,
  exchangeRate: Record<CurrencyType, number>
): number {
  return priceInUSD * (exchangeRate[toCurrency] ?? exchangeRate[Currency.USD]);
}

function getCurrencyFormatOptions(currency: CurrencyType) {
  switch (currency) {
    case Currency.KRW:
      return { locale: 'ko-KR', fractionDigits: 0 };
    case Currency.USD:
    default:
      return { locale: 'en-US', fractionDigits: 2 };
  }
}

export function formatPrice(price: number, currency: CurrencyType): string {
  if (isNaN(price)) {
    return '';
  }

  const { locale, fractionDigits } = getCurrencyFormatOptions(currency);

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  }).format(price);
}
