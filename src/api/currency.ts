import { type CurrencyType } from '@/constants/currency';
import { http } from '@/utils/http';

type ExchangeRate = Record<CurrencyType, number>;

interface ExchangeRateResponse {
  exchangeRate: ExchangeRate;
}

export const getExchangeRate = async () => {
  const response = await http.get<ExchangeRateResponse>('/api/exchange-rate');
  return response.exchangeRate;
};
