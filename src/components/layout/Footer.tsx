
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-card text-card-foreground mt-16 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div>
            <h2 className="text-xl font-bold mb-4">IndiaPhone</h2>
            <p className="text-muted-foreground">
              Your trusted destination for premium smartphones and audio products in India.
            </p>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-primary">Home</Link></li>
              <li><Link to="/smartphones" className="text-muted-foreground hover:text-primary">Smartphones</Link></li>
              <li><Link to="/earbuds" className="text-muted-foreground hover:text-primary">Earbuds</Link></li>
              <li><Link to="/cart" className="text-muted-foreground hover:text-primary">Cart</Link></li>
            </ul>
          </div>
          
          {/* Contact info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-muted-foreground">
              <p>IndiaPhone Headquarters</p>
              <p>123 Tech Street, Cyber City</p>
              <p>Bengaluru, India 560100</p>
              <p className="mt-2">Email: support@indiaphone.com</p>
              <p>Phone: +91 9876543210</p>
            </address>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-2">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full bg-background text-foreground px-3 py-2 rounded-l-md border border-r-0 border-border"
              />
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-r-md hover:bg-primary/90 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="border-t border-border mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} IndiaPhone. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-4">
              <li><a href="#" className="text-muted-foreground hover:text-primary">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Terms of Service</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Refund Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
