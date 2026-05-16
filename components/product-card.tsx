'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/data/products';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const mainFlavor = product.flavors[0];

  return (
    <Link href={`/product/${product.slug}`} className="h-full">
      <div className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-border h-full flex flex-col">
        {/* Image Container */}
        <div className="relative w-full h-64 bg-muted overflow-hidden p-6">
          <Image
            src={encodeURI(mainFlavor.image)}
            alt={product.name}
            fill
            className="object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col flex-1">
          {/* Category */}
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">
            {product.category}
          </p>

          {/* Name */}
          <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
            {product.name}
          </h3>

          {/* Description */}
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {product.description}
          </p>

          {/* Flavors Badge */}
          <div className="mt-auto">
            {product.flavors.length > 1 && (
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs text-muted-foreground">
                  {product.flavors.length} flavors
                </span>
                <div className="flex gap-1">
                  {product.flavors.slice(0, 3).map((flavor) => (
                    <div
                      key={flavor.id}
                      className="w-2 h-2 rounded-full bg-primary"
                    />
                  ))}
                </div>
              </div>
            )}

            <div className="flex justify-end">
              <div className="bg-secondary text-white p-2 rounded-lg group-hover:bg-primary transition-colors">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
