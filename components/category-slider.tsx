'use client';

import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface Category {
  id: string;
  name: string;
  image: string;
  subtitle?: string;
}

const categories: Category[] = [
  {
    id: 'protein',
    name: 'Protein',
    image: '/images/category-protein.jpg',
    subtitle: 'Build & Recover',
  },
  {
    id: 'amino-acids',
    name: 'Amino Acids',
    image: '/images/category-amino.jpg',
    subtitle: 'Muscle Support',
  },
  {
    id: 'carbohydrates',
    name: 'Carbohydrates',
    image: '/images/category-carbs.jpg',
    subtitle: 'Energy & Performance',
  },
  {
    id: 'energy-fat-burn',
    name: 'Energy & Fat Burn',
    image: '/images/category-energy.jpg',
    subtitle: 'Power Your Workouts',
  },
  {
    id: 'vitamins',
    name: 'Vitamins',
    image: '/images/category-vitamins.jpg',
    subtitle: 'Complete Wellness',
  },
];

export function CategorySlider() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 10
      );
    }
  };

  useEffect(() => {
    checkScroll();
    const container = scrollContainerRef.current;
    container?.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);

    return () => {
      container?.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 300;
      const targetScroll =
        container.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      container.scrollTo({ left: targetScroll, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative group">
      {/* Left Arrow */}
      {canScrollLeft && (
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-300"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6 text-foreground" />
        </button>
      )}

      {/* Scrollable Container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto scroll-smooth pb-2 px-12"
        style={{ scrollBehavior: 'smooth' }}
      >
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/category/${category.id}`}
            className="flex-shrink-0"
          >
            <div className="group/card relative w-64 h-72 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
              {/* Image */}
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover/card:opacity-70 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-1 text-balance">
                  {category.name}
                </h3>
                {category.subtitle && (
                  <p className="text-sm text-white/80">{category.subtitle}</p>
                )}
                <div className="mt-3 inline-flex items-center text-secondary font-semibold text-sm opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                  Shop Now →
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Right Arrow */}
      {canScrollRight && (
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-300"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6 text-foreground" />
        </button>
      )}
    </div>
  );
}
