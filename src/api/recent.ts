import { http } from '@/utils/http';

export interface RecentPurchaseProductItem {
  id: number;
  thumbnail: string;
  name: string;
  price: number;
}

export interface RecentPurchaseProductResponse {
  recentProducts: RecentPurchaseProductItem[];
}

export const getRecentPurchaseProductList = async (): Promise<RecentPurchaseProductItem[]> => {
  const response = await http.get<RecentPurchaseProductResponse>('/api/recent/product/list');
  return response.recentProducts;
};
