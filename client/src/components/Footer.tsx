import { Link } from "wouter";

interface FooterProps {
  onOpenQuote: () => void;
}

export default function Footer({ onOpenQuote }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold text-steelers-gold mb-4">
              Pittsburgh Handyman Pros
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted partner for home improvement and renovation projects throughout the Pittsburgh area.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-steelers-gold transition-colors duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-steelers-gold transition-colors duration-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-steelers-gold transition-colors duration-300">
                <i className="fab fa-google"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/services" className="hover:text-steelers-gold transition-colors duration-300">Kitchen Remodeling</Link></li>
              <li><Link href="/services" className="hover:text-steelers-gold transition-colors duration-300">Bathroom Renovation</Link></li>
              <li><Link href="/services" className="hover:text-steelers-gold transition-colors duration-300">General Handyman</Link></li>
              <li><Link href="/services" className="hover:text-steelers-gold transition-colors duration-300">Painting Services</Link></li>
              <li><Link href="/services" className="hover:text-steelers-gold transition-colors duration-300">Flooring Installation</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/" className="hover:text-steelers-gold transition-colors duration-300">Home</Link></li>
              <li><Link href="/about" className="hover:text-steelers-gold transition-colors duration-300">About Us</Link></li>
              <li><Link href="/gallery" className="hover:text-steelers-gold transition-colors duration-300">Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-steelers-gold transition-colors duration-300">Contact</Link></li>
              <li><button onClick={onOpenQuote} className="hover:text-steelers-gold transition-colors duration-300">Get Quote</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-300">
              <li>(412) 555-0123</li>
              <li>info@pittsburghhandymanpros.com</li>
              <li>Greater Pittsburgh Area</li>
              <li className="text-sm">Licensed, Bonded & Insured</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Pittsburgh Handyman Pros. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
