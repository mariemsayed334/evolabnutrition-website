'use client';

import { useState, useMemo } from 'react';
import { ProductCard } from '@/components/product-card';
import { products, categories } from '@/data/products';
import { Search, X, ChevronDown } from 'lucide-react';

export default function ShopPage() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const filtered = useMemo(() => {
    let result = products;

    // Filter by search
    if (search) {
      const query = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
      );
    }

    // Filter by category
    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory);
    }

    return result;
  }, [search, selectedCategory]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-muted/50 border-b border-border py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-2">Our Products</h1>
          <p className="text-muted-foreground">
            Discover our premium collection of supplements
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64">
            {/* Search */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-foreground mb-3">
                Search
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                />
                {search && (
                  <button
                    onClick={() => setSearch('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    <X className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                  </button>
                )}
              </div>
            </div>

            {/* Categories */}
            <div className="mb-8">
              <button 
                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                className="flex items-center justify-between w-full text-sm font-semibold text-foreground mb-3 group hover:text-secondary transition-colors"
              >
                Categories
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isCategoriesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isCategoriesOpen && (
                <div className="space-y-2 animate-in fade-in slide-in-from-top-1 duration-200">
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      selectedCategory === null
                        ? 'bg-secondary text-white'
                        : 'text-foreground hover:bg-muted'
                    }`}
                  >
                    All Products
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        selectedCategory === cat.id
                          ? 'bg-secondary text-white'
                          : 'text-foreground hover:bg-muted'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Results Count */}
            <div className="mb-6 flex items-center justify-between">
              <p className="text-muted-foreground">
                {filtered.length} product{filtered.length !== 1 ? 's' : ''} found
              </p>
              {(search || selectedCategory) && (
                <button
                  onClick={() => {
                    setSearch('');
                    setSelectedCategory(null);
                  }}
                  className="text-sm text-secondary hover:text-primary transition flex items-center gap-1"
                >
                  <X className="w-4 h-4" />
                  Clear filters
                </button>
              )}
            </div>

            {/* Grid */}
            {filtered.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  No products found matching your criteria.
                </p>
                <button
                  onClick={() => {
                    setSearch('');
                    setSelectedCategory(null);
                  }}
                  className="mt-4 text-secondary hover:text-primary transition font-semibold"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
