
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Product, useCart } from '@/contexts/CartContext';
import { ShoppingCart, Star } from 'lucide-react';
import { formatPrice } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="product-card rounded-lg overflow-hidden flex flex-col h-full border border-border">
      <Link to={`/product/${product.id}`} className="overflow-hidden">
        <div className="aspect-square overflow-hidden bg-accent/20">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      
      <div className="p-4 flex-grow flex flex-col">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded">
            {product.brand}
          </span>
          
          <div className="flex items-center text-yellow-500">
            <Star className="h-4 w-4 fill-yellow-500 stroke-yellow-500" />
            <span className="ml-1 text-sm">{product.rating}</span>
          </div>
        </div>
        
        <Link to={`/product/${product.id}`} className="flex-grow">
          <h3 className="font-medium mb-1 line-clamp-2 hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-2xl font-bold mb-3">{formatPrice(product.price)}</p>
        </Link>
        
        <div className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {product.description}
        </div>
        
        <Button 
          onClick={() => addToCart(product)} 
          className="w-full mt-auto"
          disabled={product.stock <= 0}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to cart
        </Button>
      </div>
    </div>
  );
}
