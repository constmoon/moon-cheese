export const PRODUCT_CATEGORIES = {
  CHEESE: 'CHEESE',
  CRACKER: 'CRACKER',
  TEA: 'TEA',
} as const;

export type ProductCategory = keyof typeof PRODUCT_CATEGORIES;
