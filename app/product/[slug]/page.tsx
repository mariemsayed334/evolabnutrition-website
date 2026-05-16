'use client';

import { useState } from 'react';
import { products } from '@/data/products';
import { useCart } from '@/hooks/use-cart';
import { FlavorSelector } from '@/components/flavor-selector';
import { ImageGallery } from '@/components/image-gallery';
import { ProductCard } from '@/components/product-card';
import { ArrowLeft, Check } from 'lucide-react';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const [selectedFlavorId, setSelectedFlavorId] = useState(product.flavors[0].id);
  
  const selectedFlavor = product.flavors.find((f) => f.id === selectedFlavorId)!;
  const relatedProducts = products.filter((p) =>
    p.id !== product.id && p.category === product.category
  );
  

    
  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 text-secondary hover:text-primary transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Shop
        </Link>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Image Gallery */}
          <div className="flex flex-col gap-6">
            <ImageGallery 
              flavors={product.flavors} 
              selectedFlavor={selectedFlavor} 
              onSelectFlavor={setSelectedFlavorId}
            />

            {/* Flavor Selector (under image) */}
            <FlavorSelector
              flavors={product.flavors}
              selectedFlavorId={selectedFlavorId}
              onFlavorChange={setSelectedFlavorId}
            />
          </div>


          {/* Right: Product Info */}
          <div className="flex flex-col gap-6">
            {/* Header */}
            <div>
              <p className="text-xs font-semibold text-secondary uppercase tracking-widest mb-2">
                {product.category}
              </p>
              <h1 className="text-4xl font-bold text-foreground mb-4">
                {product.name}
              </h1>
              <p className="text-lg text-muted-foreground">{product.description}</p>

              {product.keyBenefits && product.keyBenefits.length > 0 && (
                <div className="mt-4">
                  <h3 className="font-semibold text-foreground mb-2">Key Benefits</h3>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    {product.keyBenefits.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            
            {/* Info Sections */}
            <div className="space-y-6 border-t border-border pt-6">

              {/* How to Use */}
              <div>
                <h3 className="font-semibold text-foreground mb-2">How to Use</h3>
                <p className="text-muted-foreground text-sm">{product.howToUse}</p>
              </div>              
              {/* Ingredients */}
              <div>
                <h3 className="font-semibold text-foreground mb-2">Ingredients</h3>
                <p className="text-muted-foreground text-sm">{product.ingredients}</p>
              </div>

              {/* Storage */}
              <div>
                <h3 className="font-semibold text-foreground mb-2">Storage</h3>
                <p className="text-muted-foreground text-sm">{product.storage}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 border-t border-border pt-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Related Products
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
