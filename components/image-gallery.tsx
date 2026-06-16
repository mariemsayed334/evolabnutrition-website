'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Flavor } from '@/data/products';

interface ImageGalleryProps {
  flavors: Flavor[];
  selectedFlavor: Flavor;
  onSelectFlavor?: (id: string) => void;
}

export function ImageGallery({ flavors, selectedFlavor, onSelectFlavor }: ImageGalleryProps) {
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setImageError(false);
  }, [selectedFlavor.id]);

  return (
    <div className="bg-muted rounded-xl overflow-hidden">
      <div className="relative w-full aspect-square bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center p-8">
        {imageError ? (
          <div className="text-center">
            <div className="text-4xl mb-2">📦</div>
            <p className="text-muted-foreground">Product Image</p>
          </div>
        ) : (
          <Image
            src={encodeURI(selectedFlavor.image)}
            alt={selectedFlavor.name}
            fill
            className="object-contain"
            onError={() => setImageError(true)}
          />
        )}
      </div>

      {/* Thumbnail Navigation */}
      {flavors.length > 1 && (
        <div className="p-4 border-t border-border bg-card">
          <p className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-widest">
            Other Flavors
          </p>
          <div className="flex gap-2 overflow-x-auto">
            {flavors.map((flavor) => (
              <div
                key={flavor.id}
                onClick={() => onSelectFlavor?.(flavor.id)}
                className={`flex-shrink-0 relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                  flavor.id === selectedFlavor.id
                    ? 'border-secondary'
                    : 'border-border'
                }`}
              >
                <Image
                  src={encodeURI(flavor.image)}
                  alt={flavor.name}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
