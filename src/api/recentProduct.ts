import { http } from '@/utils/http';

export interface RecentProductItem {
  id: number;
  thumbnail: string;
  name: string;
  price: number;
}

export interface RecentProductResponse {
  recentProducts: RecentProductItem[];
}

export const getRecentProductList = async (): Promise<RecentProductItem[]> => {
  const response = await http.get<RecentProductResponse>('/api/recent/product/list');
  return response.recentProducts;
};
