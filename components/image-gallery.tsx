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
  const [showSecondaryImage, setShowSecondaryImage] = useState(false);
  const hasSecondaryImage = Boolean(selectedFlavor.image2);
  const activeImage = hasSecondaryImage && showSecondaryImage ? selectedFlavor.image2 : selectedFlavor.image;
  const activeAlt = hasSecondaryImage && showSecondaryImage
    ? `${selectedFlavor.name} alternate view`
    : selectedFlavor.name;

  useEffect(() => {
    setImageError(false);
    setShowSecondaryImage(false);
  }, [selectedFlavor.id]);

  return (
    <div className="bg-muted rounded-xl overflow-hidden border border-border">
      <div className="relative bg-gradient-to-br from-muted to-muted/50 p-4 sm:p-6">
        <div className="relative aspect-square overflow-hidden rounded-lg bg-background/50">
          {imageError ? (
            <div className="flex h-full items-center justify-center text-center">
              <div>
                <div className="text-4xl mb-2">📦</div>
                <p className="text-muted-foreground">Product Image</p>
              </div>
            </div>
          ) : (
            <Image
              src={encodeURI(activeImage as string)}
              alt={activeAlt}
              fill
              className="object-contain p-4 sm:p-5 transition-opacity duration-300"
              onError={() => setImageError(true)}
            />
          )}

          {hasSecondaryImage && !imageError && (
            <button
              type="button"
              onClick={() => setShowSecondaryImage((current) => !current)}
              className="absolute bottom-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white shadow-lg transition-transform hover:scale-105"
              aria-label={showSecondaryImage ? 'Show primary image' : 'Show secondary image'}
            >
              {showSecondaryImage ? '‹' : '›'}
            </button>
          )}
        </div>
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
