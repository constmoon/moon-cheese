import { type RecentProductItem } from '@/api/recent';

export function groupProductTotalPrice(products: RecentProductItem[]): RecentProductItem[] {
  const productGroup = new Map<number, RecentProductItem>();

  for (const product of products) {
    const existing = productGroup.get(product.id);
    if (existing) {
      productGroup.set(product.id, { ...existing, price: existing.price + product.price });
    } else {
      productGroup.set(product.id, { ...product });
    }
  }

  return [...productGroup.values()];
}
