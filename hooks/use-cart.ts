'use client';

import { useState, useEffect } from 'react';

export interface CartItem {
  productId: string;
  productName: string;
  flavorId: string;
  flavorName: string;
  price: number;
  quantity: number;
  image: string;
}

const CART_STORAGE_KEY = 'nutrapro-cart';

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    if (stored) {
      try {
        setItems(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to parse cart:', e);
      }
    }
    setIsLoaded(true);
  }, []);

  // Save to localStorage whenever items change
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    }
  }, [items, isLoaded]);

  const addItem = (item: CartItem) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find(
        (i) => i.productId === item.productId && i.flavorId === item.flavorId
      );

      if (existingItem) {
        return prevItems.map((i) =>
          i.productId === item.productId && i.flavorId === item.flavorId
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        );
      }

      return [...prevItems, item];
    });
  };

  const removeItem = (productId: string, flavorId: string) => {
    setItems((prevItems) =>
      prevItems.filter(
        (i) => !(i.productId === productId && i.flavorId === flavorId)
      )
    );
  };

  const updateQuantity = (
    productId: string,
    flavorId: string,
    quantity: number
  ) => {
    if (quantity <= 0) {
      removeItem(productId, flavorId);
    } else {
      setItems((prevItems) =>
        prevItems.map((i) =>
          i.productId === productId && i.flavorId === flavorId
            ? { ...i, quantity }
            : i
        )
      );
    }
  };

  const clearCart = () => {
    setItems([]);
  };

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = items.reduce((count, item) => count + item.quantity, 0);

  return {
    items,
    total,
    itemCount,
    isLoaded,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
  };
}
