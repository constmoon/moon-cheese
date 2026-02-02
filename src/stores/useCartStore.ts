import { appendItem, findItemById, removeItem, updateQuantity } from '@/utils/cart';
import { create } from 'zustand';

export interface CartItem {
  productId: number;
  quantity: number;
}

interface Cart {
  items: CartItem[];
  addItem: (productId: number) => void;
  removeItem: (productId: number) => void;
  getQuantity: (productId: number) => number;
  getTotalQuantity: () => number;
  clearCart: () => void;
}

export const useCartStore = create<Cart>((set, get) => ({
  items: [],

  addItem: (productId: number) => {
    set(state => {
      const existing = findItemById(state.items, productId);
      const items = existing ? updateQuantity(state.items, productId, 1) : appendItem(state.items, productId);
      return {
        items,
      };
    });
  },

  removeItem: (productId: number) => {
    set(state => {
      const existing = findItemById(state.items, productId);
      if (!existing) {
        return state;
      }

      const items =
        existing.quantity === 1 ? removeItem(state.items, productId) : updateQuantity(state.items, productId, -1);
      return {
        items,
      };
    });
  },

  getQuantity: (productId: number) => {
    const item = findItemById(get().items, productId);
    return item?.quantity ?? 0;
  },

  getTotalQuantity: () => {
    return get().items.reduce((total, item) => total + item.quantity, 0);
  },

  clearCart: () => {
    set({ items: [] });
  },
}));
