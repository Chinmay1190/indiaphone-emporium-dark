
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingCart, ChevronLeft, Star, Check } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { getProductById, getRelatedProducts, formatPrice } from '@/data/products';
import ProductGrid from '@/components/products/ProductGrid';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || '');
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const { toast } = useToast();

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-8">Product Not Found</h1>
        <p>The product you're looking for does not exist.</p>
        <Button asChild className="mt-4">
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast({
      title: "Added to cart",
      description: `${product.name} × ${quantity} has been added to your cart.`,
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <div className="flex items-center mb-6 text-sm">
        <Link to="/" className="text-muted-foreground hover:text-foreground">Home</Link>
        <span className="mx-2">/</span>
        <Link 
          to={`/${product.category === 'smartphone' ? 'smartphones' : 'earbuds'}`} 
          className="text-muted-foreground hover:text-foreground"
        >
          {product.category === 'smartphone' ? 'Smartphones' : 'Earbuds'}
        </Link>
        <span className="mx-2">/</span>
        <span className="font-medium">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product image */}
        <div className="bg-accent/10 rounded-lg p-8 flex items-center justify-center">
          <img 
            src={product.image} 
            alt={product.name} 
            className="max-h-96 object-contain"
          />
        </div>

        {/* Product details */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          
          <div className="flex items-center mb-4">
            <div className="flex items-center text-yellow-500 mr-4">
              <Star className="h-5 w-5 fill-yellow-500 stroke-yellow-500" />
              <span className="ml-1 font-medium">{product.rating}</span>
            </div>
            <span className="text-muted-foreground">Brand: {product.brand}</span>
          </div>
          
          <p className="text-3xl font-bold mb-6">{formatPrice(product.price)}</p>
          
          <div className="mb-6">
            <p className="text-muted-foreground">{product.description}</p>
          </div>

          {/* Color options */}
          {product.colors && product.colors.length > 0 && (
            <div className="mb-6">
              <h3 className="font-medium mb-2">Color</h3>
              <div className="flex space-x-2">
                {product.colors.map((color, index) => (
                  <div 
                    key={index}
                    className="border border-border rounded-md px-3 py-1 cursor-pointer hover:border-primary"
                  >
                    {color}
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Quantity selector */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Quantity</h3>
            <div className="flex items-center">
              <button 
                className="w-10 h-10 rounded-l-md border border-border flex items-center justify-center hover:bg-accent"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <div className="w-16 h-10 border-t border-b border-border flex items-center justify-center">
                {quantity}
              </div>
              <button 
                className="w-10 h-10 rounded-r-md border border-border flex items-center justify-center hover:bg-accent"
                onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
              >
                +
              </button>
              
              <span className="ml-4 text-sm text-muted-foreground">
                {product.stock} items available
              </span>
            </div>
          </div>
          
          {/* Add to cart button */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button 
              size="lg" 
              className="flex-1"
              onClick={handleAddToCart}
              disabled={product.stock <= 0}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="flex-1"
              asChild
            >
              <Link to="/cart">Buy Now</Link>
            </Button>
          </div>
          
          {/* Key features */}
          {product.features && product.features.length > 0 && (
            <div className="mb-6">
              <h3 className="font-medium mb-2">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Product tabs */}
      <div className="mt-12">
        <Tabs defaultValue="description">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="p-6 border rounded-md">
            <h3 className="text-lg font-semibold mb-4">Product Description</h3>
            <p className="text-muted-foreground">
              {product.description}
              {product.category === 'smartphone' && (
                <>
                  <br /><br />
                  Experience exceptional performance and cutting-edge features with the {product.name}. This premium device brings you stunning visuals, powerful processing capabilities, and an advanced camera system. Whether you're a mobile gamer, photography enthusiast, or just need a reliable smartphone for daily use, this device is designed to exceed your expectations.
                </>
              )}
              {product.category === 'earbuds' && (
                <>
                  <br /><br />
                  Immerse yourself in superior sound quality with the {product.name}. These earbuds deliver crystal-clear audio, deep bass, and noise isolation to enhance your listening experience. With comfortable fit, long battery life, and convenient controls, they're perfect for music lovers, gamers, and anyone who values great audio on the go.
                </>
              )}
            </p>
          </TabsContent>
          <TabsContent value="specifications" className="p-6 border rounded-md">
            <h3 className="text-lg font-semibold mb-4">Product Specifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
              <div className="flex justify-between border-b pb-2">
                <span>Brand</span>
                <span className="font-medium">{product.brand}</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span>Model</span>
                <span className="font-medium">{product.name}</span>
              </div>
              {product.colors && (
                <div className="flex justify-between border-b pb-2">
                  <span>Available Colors</span>
                  <span className="font-medium">{product.colors.join(', ')}</span>
                </div>
              )}
              <div className="flex justify-between border-b pb-2">
                <span>In Stock</span>
                <span className="font-medium">{product.stock > 0 ? 'Yes' : 'No'}</span>
              </div>
              {product.features?.map((feature, index) => (
                <div key={index} className="flex justify-between border-b pb-2">
                  <span>Feature {index + 1}</span>
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="reviews" className="p-6 border rounded-md">
            <div className="flex items-center mb-6">
              <h3 className="text-lg font-semibold">Customer Reviews</h3>
              <div className="flex items-center text-yellow-500 mx-4">
                <Star className="h-5 w-5 fill-yellow-500 stroke-yellow-500" />
                <span className="ml-1 font-medium">{product.rating}</span>
              </div>
              <span className="text-muted-foreground">Based on customer reviews</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Reviews are being loaded...
            </p>
            <Button variant="outline">Write a Review</Button>
          </TabsContent>
        </Tabs>
      </div>

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <ProductGrid products={relatedProducts} />
        </div>
      )}
    </div>
  );
}
