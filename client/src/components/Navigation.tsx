import { useState } from "react";
import { Link, useLocation } from "wouter";

interface NavigationProps {
  onOpenQuote: () => void;
}

export default function Navigation({ onOpenQuote }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/gallery", label: "Gallery" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && location.startsWith(href)) return true;
    return false;
  };

  return (
    <nav className="bg-steelers-black text-white fixed w-full top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <div className="text-2xl font-bold text-steelers-gold">
                Pittsburgh Handyman Pros
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`hover:text-steelers-gold transition-colors duration-300 font-medium ${
                    isActive(item.href) ? "text-steelers-gold" : ""
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <button
                onClick={onOpenQuote}
                className="bg-steelers-gold text-steelers-black px-6 py-2 rounded-lg font-semibold hover:bg-dark-gold transition-colors duration-300"
              >
                Get Quote
              </button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-steelers-gold transition-colors duration-300"
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-steelers-black border-t border-steel-gray">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 text-white hover:text-steelers-gold transition-colors duration-300 ${
                  isActive(item.href) ? "text-steelers-gold" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={() => {
                onOpenQuote();
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-left bg-steelers-gold text-steelers-black px-3 py-2 rounded-lg font-semibold hover:bg-dark-gold transition-colors duration-300"
            >
              Get Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
