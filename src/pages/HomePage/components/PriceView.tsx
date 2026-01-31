import { useCurrencyStore } from '@/stores/useCurrencyStore';
import { convertPrice, formatPrice } from '@/utils/format';

interface PriceViewProps {
  price: number;
}

const PriceView = ({ price }: PriceViewProps): string => {
  const { currency, exchangeRate } = useCurrencyStore();
  const convertedPrice = convertPrice(price, currency, exchangeRate);

  return formatPrice(convertedPrice, currency);
};

export default PriceView;
