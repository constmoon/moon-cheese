import { type ExchangeRate } from '@/api/currency';
import { Currency, DEFAULT_EXCHANGE_RATE, type CurrencyType } from '@/constants/currency';
import { queryClient } from '@/lib/queryClient';
import { currencyQueries } from '@/queries/currency';
import { create } from 'zustand';

interface CurrencyState {
  currency: CurrencyType;
  exchangeRate: ExchangeRate;
  setCurrency: (currency: CurrencyType) => void;
  fetchExchangeRate: () => Promise<void>;
}

export const useCurrencyStore = create<CurrencyState>(set => ({
  currency: Currency.USD,
  exchangeRate: DEFAULT_EXCHANGE_RATE,
  setCurrency: currency => set({ currency }),
  fetchExchangeRate: async () => {
    const exchangeRate = await queryClient.fetchQuery(currencyQueries.exchangeRate());
    set({ exchangeRate });
  },
}));
