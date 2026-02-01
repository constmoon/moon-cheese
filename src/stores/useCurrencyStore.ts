import { type ExchangeRate } from '@/api/currency';
import { Currency, DEFAULT_EXCHANGE_RATE, type CurrencyType } from '@/constants/currency';
import { create } from 'zustand';

interface CurrencyState {
  currency: CurrencyType;
  exchangeRate: ExchangeRate;
  setCurrency: (currency: CurrencyType) => void;
  setExchangeRate: (exchangeRate: ExchangeRate) => void;
}

export const useCurrencyStore = create<CurrencyState>(set => ({
  currency: Currency.USD,
  exchangeRate: DEFAULT_EXCHANGE_RATE,
  setCurrency: currency => set({ currency }),
  setExchangeRate: exchangeRate => set({ exchangeRate }),
}));
