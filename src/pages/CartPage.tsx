
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Trash2, ShoppingCart, ArrowRight } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { formatPrice } from '@/data/products';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, clearCart, totalPrice } = useCart();
  const [couponCode, setCouponCode] = useState('');
  const { toast } = useToast();

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    updateQuantity(productId, newQuantity);
  };

  const handleApplyCoupon = () => {
    if (couponCode.toLowerCase() === 'discount10') {
      toast({
        title: "Coupon Applied!",
        description: "10% discount has been applied to your order.",
      });
    } else {
      toast({
        title: "Invalid Coupon",
        description: "The coupon code you entered is not valid.",
        variant: "destructive"
      });
    }
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <ShoppingCart className="h-16 w-16 mx-auto mb-6 text-muted-foreground" />
          <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-muted-foreground mb-8">
            Looks like you haven't added any products to your cart yet.
          </p>
          <Button asChild size="lg">
            <Link to="/">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    );
  }

  const subtotal = totalPrice;
  const shipping = 99; // Fixed shipping cost
  const discount = 0; // No discount by default
  const total = subtotal + shipping - discount;

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8">
        {/* Cart items */}
        <div>
          <div className="border-b border-border pb-4 mb-4 hidden md:grid grid-cols-[3fr_1fr_1fr_1fr] gap-4 text-sm text-muted-foreground">
            <div>Product</div>
            <div className="text-center">Price</div>
            <div className="text-center">Quantity</div>
            <div className="text-center">Subtotal</div>
          </div>

          {items.map((item) => (
            <div 
              key={item.product.id} 
              className="grid grid-cols-1 md:grid-cols-[3fr_1fr_1fr_1fr] gap-4 border-b border-border py-4 items-center"
            >
              {/* Product info */}
              <div className="flex items-center">
                <div className="h-20 w-20 bg-accent/10 rounded mr-4">
                  <img 
                    src={item.product.image} 
                    alt={item.product.name} 
                    className="h-full w-full object-contain"
                  />
                </div>
                <div>
                  <Link 
                    to={`/product/${item.product.id}`} 
                    className="font-medium hover:text-primary transition line-clamp-2"
                  >
                    {item.product.name}
                  </Link>
                  <div className="text-sm text-muted-foreground">{item.product.brand}</div>
                  <button 
                    onClick={() => removeFromCart(item.product.id)}
                    className="text-sm text-red-500 hover:text-red-700 flex items-center mt-1 md:hidden"
                  >
                    <Trash2 className="h-4 w-4 mr-1" /> Remove
                  </button>
                </div>
              </div>
              
              {/* Price */}
              <div className="md:text-center">
                <div className="md:hidden text-sm text-muted-foreground">Price</div>
                {formatPrice(item.product.price)}
              </div>
              
              {/* Quantity */}
              <div className="md:flex md:justify-center">
                <div className="md:hidden text-sm text-muted-foreground mb-1">Quantity</div>
                <div className="flex items-center">
                  <button 
                    className="w-8 h-8 rounded-l-md border border-border flex items-center justify-center hover:bg-accent"
                    onClick={() => handleQuantityChange(item.product.id, item.quantity - 1)}
                  >
                    -
                  </button>
                  <div className="w-12 h-8 border-t border-b border-border flex items-center justify-center">
                    {item.quantity}
                  </div>
                  <button 
                    className="w-8 h-8 rounded-r-md border border-border flex items-center justify-center hover:bg-accent"
                    onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              
              {/* Subtotal */}
              <div className="flex items-center justify-between md:justify-center">
                <div className="md:hidden text-sm text-muted-foreground">Subtotal</div>
                <div className="font-medium">
                  {formatPrice(item.product.price * item.quantity)}
                </div>
                <button 
                  onClick={() => removeFromCart(item.product.id)}
                  className="text-red-500 hover:text-red-700 hidden md:block"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
          
          {/* Cart actions */}
          <div className="flex justify-between items-center mt-6">
            <Button 
              variant="outline"
              onClick={clearCart}
            >
              Clear Cart
            </Button>
            <Button asChild>
              <Link to="/">Continue Shopping</Link>
            </Button>
          </div>
        </div>

        {/* Summary */}
        <div>
          <div className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            
            {/* Coupon code */}
            <div className="mb-6">
              <label className="block text-sm mb-2">Coupon Code (Try "DISCOUNT10")</label>
              <div className="flex">
                <Input 
                  type="text"
                  placeholder="Enter coupon code"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="rounded-r-none"
                />
                <Button 
                  onClick={handleApplyCoupon}
                  variant="secondary"
                  className="rounded-l-none"
                >
                  Apply
                </Button>
              </div>
            </div>
            
            {/* Summary details */}
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span>{formatPrice(shipping)}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Discount</span>
                  <span className="text-green-500">-{formatPrice(discount)}</span>
                </div>
              )}
              <div className="border-t border-border pt-3 flex justify-between font-semibold">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>
            </div>
            
            {/* Checkout button */}
            <Button 
              className="w-full mt-6"
              size="lg"
              asChild
            >
              <Link to="/checkout">
                Proceed to Checkout <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          {/* Payment info */}
          <div className="mt-6 bg-card rounded-lg border border-border p-6">
            <h3 className="text-sm font-semibold mb-2">We Accept</h3>
            <div className="flex gap-2">
              <div className="h-8 w-12 bg-accent/50 rounded flex items-center justify-center text-xs font-medium">
                VISA
              </div>
              <div className="h-8 w-12 bg-accent/50 rounded flex items-center justify-center text-xs font-medium">
                MC
              </div>
              <div className="h-8 w-12 bg-accent/50 rounded flex items-center justify-center text-xs font-medium">
                AMEX
              </div>
              <div className="h-8 w-12 bg-accent/50 rounded flex items-center justify-center text-xs font-medium">
                UPI
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
