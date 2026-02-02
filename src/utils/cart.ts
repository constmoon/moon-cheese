import { type CartItem } from '@/stores/useCartStore';

export const findItemById = (items: CartItem[], productId: number): CartItem | undefined => {
  return items.find(item => item.productId === productId);
};

export const updateQuantity = (items: CartItem[], productId: number, amount: number): CartItem[] => {
  return items.map(item => (item.productId === productId ? { ...item, quantity: item.quantity + amount } : item));
};

export const appendItem = (items: CartItem[], productId: number): CartItem[] => {
  return [...items, { productId, quantity: 1 }];
};

export const removeItem = (items: CartItem[], productId: number): CartItem[] => {
  return items.filter(item => item.productId !== productId);
};
