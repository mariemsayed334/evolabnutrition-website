'use client';

import { Flavor } from '@/data/products';

interface FlavorSelectorProps {
  flavors: Flavor[];
  selectedFlavorId: string;
  onFlavorChange: (flavorId: string) => void;
}

export function FlavorSelector({
  flavors,
  selectedFlavorId,
  onFlavorChange,
}: FlavorSelectorProps) {
  return (
    <div>
      <label className="block text-sm font-semibold text-foreground mb-4">
        Select Flavor
      </label>
      <div className="flex flex-wrap gap-3">
        {flavors.map((flavor) => (
          <button
            key={flavor.id}
            onClick={() => onFlavorChange(flavor.id)}
            className={`px-4 py-2 rounded-full font-medium transition-all ${
              selectedFlavorId === flavor.id
                ? 'bg-secondary text-white shadow-md'
                : 'border-2 border-border text-foreground hover:border-secondary'
            }`}
          >
            {flavor.name}
          </button>
        ))}
      </div>
    </div>
  );
}
