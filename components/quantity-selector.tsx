'use client';

import { Minus, Plus } from 'lucide-react';

interface QuantitySelectorProps {
  quantity: number;
  maxStock: number;
  onQuantityChange: (quantity: number) => void;
}

export function QuantitySelector({
  quantity,
  maxStock,
  onQuantityChange,
}: QuantitySelectorProps) {
  const handleMinus = () => {
    if (quantity > 1) {
      onQuantityChange(quantity - 1);
    }
  };

  const handlePlus = () => {
    if (quantity < maxStock) {
      onQuantityChange(quantity + 1);
    }
  };

  return (
    <div>
      <label className="block text-sm font-semibold text-foreground mb-4">
        Quantity
      </label>
      <div className="flex items-center gap-4">
        <div className="flex items-center border-2 border-border rounded-lg">
          <button
            onClick={handleMinus}
            disabled={quantity <= 1}
            className="p-2 hover:bg-muted disabled:opacity-50 transition"
          >
            <Minus className="w-5 h-5 text-foreground" />
          </button>
          <input
            type="number"
            value={quantity}
            onChange={(e) => {
              const val = parseInt(e.target.value);
              if (!isNaN(val) && val > 0 && val <= maxStock) {
                onQuantityChange(val);
              }
            }}
            className="w-20 text-center font-semibold text-foreground bg-transparent border-0 focus:outline-none"
          />
          <button
            onClick={handlePlus}
            disabled={quantity >= maxStock}
            className="p-2 hover:bg-muted disabled:opacity-50 transition"
          >
            <Plus className="w-5 h-5 text-foreground" />
          </button>
        </div>
        <span className="text-sm text-muted-foreground">
          {maxStock} in stock
        </span>
      </div>
    </div>
  );
}
