
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Sun, Moon, ShoppingCart, Search, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

export default function Navbar() {
  const { itemCount } = useCart();
  const { theme, toggleTheme } = useTheme();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo and mobile menu */}
        <div className="flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[250px] sm:w-[300px]">
              <div className="flex flex-col gap-4 py-4">
                <Link to="/" className="text-xl font-bold px-4">IndiaPhone</Link>
                <nav className="flex flex-col space-y-2">
                  <Link to="/" className="px-4 py-2 hover:bg-accent rounded-md">Home</Link>
                  <Link to="/smartphones" className="px-4 py-2 hover:bg-accent rounded-md">Smartphones</Link>
                  <Link to="/earbuds" className="px-4 py-2 hover:bg-accent rounded-md">Earbuds</Link>
                  <Link to="/cart" className="px-4 py-2 hover:bg-accent rounded-md">Cart</Link>
                </nav>
              </div>
            </SheetContent>
          </Sheet>

          <Link to="/" className="text-xl font-bold ml-2 md:ml-0">
            IndiaPhone
          </Link>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:text-primary transition">Home</Link>
          <Link to="/smartphones" className="hover:text-primary transition">Smartphones</Link>
          <Link to="/earbuds" className="hover:text-primary transition">Earbuds</Link>
        </div>

        {/* Search and actions */}
        <div className="flex items-center space-x-2">
          {isSearchOpen ? (
            <div className="relative animate-fade-in">
              <Input 
                type="search" 
                placeholder="Search products..." 
                className="w-[200px] h-9" 
                autoFocus
                onBlur={() => setIsSearchOpen(false)}
              />
            </div>
          ) : (
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsSearchOpen(true)}
              className="text-foreground hover:text-primary"
            >
              <Search className="h-5 w-5" />
            </Button>
          )}

          <Button 
            variant="ghost" 
            size="icon"
            onClick={toggleTheme} 
            className="text-foreground hover:text-primary"
          >
            {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>

          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative text-foreground hover:text-primary">
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount > 9 ? '9+' : itemCount}
                </span>
              )}
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
