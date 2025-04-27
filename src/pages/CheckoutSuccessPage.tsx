
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

export default function CheckoutSuccessPage() {
  // Generate random order number
  const orderNumber = `IND${Math.floor(100000 + Math.random() * 900000)}`;
  
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <div className="rounded-full bg-green-100 dark:bg-green-900/30 h-20 w-20 flex items-center justify-center mx-auto mb-6">
          <Check className="h-10 w-10 text-green-600 dark:text-green-400" />
        </div>
        
        <h1 className="text-3xl font-bold mb-4">Order Successfully Placed!</h1>
        
        <p className="text-muted-foreground mb-8">
          Thank you for your purchase. Your order has been received and is being processed.
          You will receive a confirmation email shortly.
        </p>
        
        <div className="bg-card border border-border rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="text-center sm:text-left">
              <h3 className="text-sm text-muted-foreground mb-1">Order Number</h3>
              <p className="font-medium">{orderNumber}</p>
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-sm text-muted-foreground mb-1">Date</h3>
              <p className="font-medium">{new Date().toLocaleDateString()}</p>
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-sm text-muted-foreground mb-1">Estimated Delivery</h3>
              <p className="font-medium">3-5 Business Days</p>
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-sm text-muted-foreground mb-1">Payment Method</h3>
              <p className="font-medium">Credit Card</p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg">
            <Link to="/">Continue Shopping</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="#">Track Order</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
