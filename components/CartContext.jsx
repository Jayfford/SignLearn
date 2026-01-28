import React, { createContext, useContext, useMemo, useState } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]); // { id: string, qty: number }

  const value = useMemo(() => {
    const add = (id, qty = 1) => {
      setItems((prev) => {
        const next = [...prev];
        const idx = next.findIndex((x) => x.id === id);
        if (idx >= 0) {
          next[idx] = { ...next[idx], qty: next[idx].qty + qty };
          return next;
        }
        return [...next, { id, qty }];
      });
    };

    const remove = (id) => {
      setItems((prev) => prev.filter((x) => x.id !== id));
    };

    const setQty = (id, qty) => {
      const q = Math.max(1, Number(qty) || 1);
      setItems((prev) => prev.map((x) => (x.id === id ? { ...x, qty: q } : x)));
    };

    const clear = () => setItems([]);

    const count = items.reduce((acc, x) => acc + x.qty, 0);

    return { items, add, remove, setQty, clear, count };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error('useCart must be used within CartProvider');
  }
  return ctx;
}

