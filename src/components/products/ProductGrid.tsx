
import { useState } from 'react';
import ProductCard from './ProductCard';
import { Product } from '@/contexts/CartContext';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { formatPrice } from '@/data/products';

interface ProductGridProps {
  products: Product[];
  title?: string;
  showFilters?: boolean;
}

export default function ProductGrid({ products, title, showFilters = false }: ProductGridProps) {
  const [sortOption, setSortOption] = useState('featured');
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200000]);

  // Get unique brands
  const brands = Array.from(new Set(products.map(product => product.brand)));

  // Filter products
  const filteredProducts = products.filter(product => {
    const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesBrand && matchesPrice;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0; // featured - keep original order
    }
  });

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand) 
        : [...prev, brand]
    );
  };

  return (
    <div>
      {title && <h2 className="text-2xl md:text-3xl font-bold mb-6">{title}</h2>}

      {showFilters && (
        <div className="mb-8 grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-6">
          {/* Filters sidebar */}
          <div className="bg-card rounded-lg p-4 border border-border">
            <h3 className="text-lg font-semibold mb-4">Filters</h3>

            {/* Brand filter */}
            <div className="mb-6">
              <h4 className="font-medium mb-2">Brand</h4>
              <div className="space-y-2">
                {brands.map(brand => (
                  <div key={brand} className="flex items-center">
                    <Checkbox 
                      id={`brand-${brand}`} 
                      checked={selectedBrands.includes(brand)}
                      onCheckedChange={() => toggleBrand(brand)}
                    />
                    <Label htmlFor={`brand-${brand}`} className="ml-2 text-sm cursor-pointer">
                      {brand}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Price range filter */}
            <div>
              <h4 className="font-medium mb-2">Price Range</h4>
              <Slider
                defaultValue={[0, 200000]}
                min={0}
                max={200000}
                step={1000}
                value={priceRange}
                onValueChange={(value) => setPriceRange(value as [number, number])}
                className="my-6"
              />
              <div className="flex justify-between text-sm">
                <span>{formatPrice(priceRange[0])}</span>
                <span>{formatPrice(priceRange[1])}</span>
              </div>
            </div>
          </div>

          {/* Product grid with sorting */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <p className="text-muted-foreground">{sortedProducts.length} products</p>
              <Select value={sortOption} onValueChange={setSortOption}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Simple product grid without filters */}
      {!showFilters && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
