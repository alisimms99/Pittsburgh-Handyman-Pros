import { useState } from "react";
import { Link, useLocation } from "wouter";
import { services } from "@/data/services";
import { serviceAreas } from "@/data/serviceAreas";

interface NavigationProps {
  onOpenQuote: () => void;
}

export default function Navigation({ onOpenQuote }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [areasDropdownOpen, setAreasDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);
  const [location] = useLocation();

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
              <Link
                href="/"
                className={`hover:text-steelers-gold transition-colors duration-300 font-medium ${
                  isActive("/") && location === "/" ? "text-steelers-gold" : ""
                }`}
              >
                Home
              </Link>

              {/* Services Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <Link
                  href="/services"
                  className={`hover:text-steelers-gold transition-colors duration-300 font-medium flex items-center ${
                    isActive("/services") ? "text-steelers-gold" : ""
                  }`}
                >
                  Services
                  <i className="fas fa-chevron-down ml-1 text-xs"></i>
                </Link>
                {servicesDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-64 bg-white text-steelers-black rounded-lg shadow-xl py-2">
                    <Link
                      href="/services"
                      className="block px-4 py-2 hover:bg-gray-100 font-semibold border-b"
                    >
                      All Services
                    </Link>
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Service Areas Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setAreasDropdownOpen(true)}
                onMouseLeave={() => setAreasDropdownOpen(false)}
              >
                <Link
                  href="/areas"
                  className={`hover:text-steelers-gold transition-colors duration-300 font-medium flex items-center ${
                    isActive("/areas") ? "text-steelers-gold" : ""
                  }`}
                >
                  Service Areas
                  <i className="fas fa-chevron-down ml-1 text-xs"></i>
                </Link>
                {areasDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-56 bg-white text-steelers-black rounded-lg shadow-xl py-2">
                    <Link
                      href="/areas"
                      className="block px-4 py-2 hover:bg-gray-100 font-semibold border-b"
                    >
                      All Areas
                    </Link>
                    {serviceAreas.map((area) => (
                      <Link
                        key={area.slug}
                        href={`/areas/${area.slug}`}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        {area.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/about"
                className={`hover:text-steelers-gold transition-colors duration-300 font-medium ${
                  isActive("/about") ? "text-steelers-gold" : ""
                }`}
              >
                About
              </Link>

              <Link
                href="/gallery"
                className={`hover:text-steelers-gold transition-colors duration-300 font-medium ${
                  isActive("/gallery") ? "text-steelers-gold" : ""
                }`}
              >
                Gallery
              </Link>

              <Link
                href="/contact"
                className={`hover:text-steelers-gold transition-colors duration-300 font-medium ${
                  isActive("/contact") ? "text-steelers-gold" : ""
                }`}
              >
                Contact
              </Link>

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
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-steelers-black border-t border-steel-gray">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-3 py-2 text-white hover:text-steelers-gold transition-colors duration-300 ${
                isActive("/") && location === "/" ? "text-steelers-gold" : ""
              }`}
            >
              Home
            </Link>

            {/* Mobile Services Dropdown */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className={`w-full text-left px-3 py-2 text-white hover:text-steelers-gold transition-colors duration-300 flex items-center justify-between ${
                  isActive("/services") ? "text-steelers-gold" : ""
                }`}
              >
                Services
                <i className={`fas fa-chevron-${mobileServicesOpen ? 'up' : 'down'} text-xs`}></i>
              </button>
              {mobileServicesOpen && (
                <div className="pl-6 space-y-1">
                  <Link
                    href="/services"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-3 py-2 text-white hover:text-steelers-gold transition-colors duration-300 text-sm"
                  >
                    All Services
                  </Link>
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-3 py-2 text-white hover:text-steelers-gold transition-colors duration-300 text-sm"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Service Areas Dropdown */}
            <div>
              <button
                onClick={() => setMobileAreasOpen(!mobileAreasOpen)}
                className={`w-full text-left px-3 py-2 text-white hover:text-steelers-gold transition-colors duration-300 flex items-center justify-between ${
                  isActive("/areas") ? "text-steelers-gold" : ""
                }`}
              >
                Service Areas
                <i className={`fas fa-chevron-${mobileAreasOpen ? 'up' : 'down'} text-xs`}></i>
              </button>
              {mobileAreasOpen && (
                <div className="pl-6 space-y-1">
                  <Link
                    href="/areas"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-3 py-2 text-white hover:text-steelers-gold transition-colors duration-300 text-sm"
                  >
                    All Areas
                  </Link>
                  {serviceAreas.map((area) => (
                    <Link
                      key={area.slug}
                      href={`/areas/${area.slug}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-3 py-2 text-white hover:text-steelers-gold transition-colors duration-300 text-sm"
                    >
                      {area.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-3 py-2 text-white hover:text-steelers-gold transition-colors duration-300 ${
                isActive("/about") ? "text-steelers-gold" : ""
              }`}
            >
              About
            </Link>

            <Link
              href="/gallery"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-3 py-2 text-white hover:text-steelers-gold transition-colors duration-300 ${
                isActive("/gallery") ? "text-steelers-gold" : ""
              }`}
            >
              Gallery
            </Link>

            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-3 py-2 text-white hover:text-steelers-gold transition-colors duration-300 ${
                isActive("/contact") ? "text-steelers-gold" : ""
              }`}
            >
              Contact
            </Link>

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
