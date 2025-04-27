
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ProductGrid from '@/components/products/ProductGrid';
import { getFeaturedProducts, getProductsByCategory } from '@/data/products';
import { ArrowRight } from 'lucide-react';

export default function Homepage() {
  const featuredProducts = getFeaturedProducts();
  const featuredSmartphones = getProductsByCategory('smartphone').slice(0, 4);
  const featuredEarbuds = getProductsByCategory('earbuds').slice(0, 4);

  return (
    <div>
      {/* Hero section */}
      <section className="relative bg-gradient-to-br from-primary/30 to-accent/20 dark:from-primary/10 dark:to-accent/5">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="animate-slide-in">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Discover Premium Tech at Unbeatable Prices
              </h1>
              <p className="text-lg mb-6 text-muted-foreground">
                Shop the latest smartphones and earbuds from top brands with exclusive Indian pricing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link to="/smartphones">Shop Smartphones</Link>
                </Button>
                <Button variant="outline" asChild size="lg">
                  <Link to="/earbuds">Shop Earbuds</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="/placeholder.svg"
                alt="Featured devices" 
                className="max-h-80 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Featured Products</h2>
          <Button variant="ghost" asChild>
            <Link to="/products" className="flex items-center">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <ProductGrid products={featuredProducts} />
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-16 border-t border-border">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Smartphones category */}
          <div className="group border border-border rounded-lg overflow-hidden">
            <div className="aspect-[16/9] overflow-hidden relative">
              <img 
                src="/placeholder.svg"
                alt="Smartphones" 
                className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end">
                <div className="p-6 w-full">
                  <h3 className="text-2xl font-bold mb-2">Smartphones</h3>
                  <p className="text-muted-foreground mb-4">
                    Discover the latest models from top brands
                  </p>
                  <Button asChild>
                    <Link to="/smartphones">Shop Now</Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-2 gap-4">
                {featuredSmartphones.map(phone => (
                  <Link 
                    key={phone.id} 
                    to={`/product/${phone.id}`}
                    className="hover:text-primary transition"
                  >
                    {phone.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          {/* Earbuds category */}
          <div className="group border border-border rounded-lg overflow-hidden">
            <div className="aspect-[16/9] overflow-hidden relative">
              <img 
                src="/placeholder.svg"
                alt="Earbuds" 
                className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end">
                <div className="p-6 w-full">
                  <h3 className="text-2xl font-bold mb-2">Earbuds</h3>
                  <p className="text-muted-foreground mb-4">
                    Premium audio for your everyday life
                  </p>
                  <Button asChild>
                    <Link to="/earbuds">Shop Now</Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-2 gap-4">
                {featuredEarbuds.map(earbud => (
                  <Link 
                    key={earbud.id} 
                    to={`/product/${earbud.id}`}
                    className="hover:text-primary transition"
                  >
                    {earbud.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features */}
      <section className="container mx-auto px-4 py-16 border-t border-border">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Why Shop With Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Authentic Products</h3>
            <p className="text-muted-foreground">
              All our products are 100% genuine with manufacturer warranty
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p className="text-muted-foreground">
              Quick delivery to all major cities across India
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
            <p className="text-muted-foreground">
              Multiple payment options with encrypted security
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter for the latest tech news and exclusive offers
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow px-4 py-3 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <Button size="lg">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
