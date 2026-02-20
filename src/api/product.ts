import { http } from '@/utils/http';
import { type ProductCategory } from '@/constants/productCategory';

export interface ProductItem {
  id: number;
  name: string;
  category: ProductCategory;
  stock: number;
  price: number;
  description: string;
  detailDescription: string;
  images: string[];
  rating: number;
  isGlutenFree?: boolean;
  isCaffeineFree?: boolean;
}

export interface ProductResponse {
  products: ProductItem[];
}

export const getProductList = async (): Promise<ProductItem[]> => {
  const response = await http.get<ProductResponse>('/api/product/list');
  return response.products;
};
