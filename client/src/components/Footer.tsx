import { Link } from "wouter";
import { services } from "@/data/services";
import { serviceAreas } from "@/data/serviceAreas";

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
              Your trusted partner for home repair and maintenance throughout the Pittsburgh area.
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
              {services.slice(0, 5).map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="hover:text-steelers-gold transition-colors duration-300">
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="hover:text-steelers-gold transition-colors duration-300 font-semibold">
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2 text-gray-300">
              {serviceAreas.map((area) => (
                <li key={area.slug}>
                  <Link href={`/areas/${area.slug}`} className="hover:text-steelers-gold transition-colors duration-300">
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="tel:[PHONE_NUMBER_PLACEHOLDER]" className="hover:text-steelers-gold transition-colors duration-300">
                  [PHONE_NUMBER_PLACEHOLDER]
                </a>
              </li>
              <li>
                <a href="mailto:info@pittsburghhandymanpros.com" className="hover:text-steelers-gold transition-colors duration-300">
                  info@pittsburghhandymanpros.com
                </a>
              </li>
              <li>Greater Pittsburgh Area</li>
              <li className="text-sm">Licensed & Insured</li>
            </ul>
            <button 
              onClick={onOpenQuote}
              className="mt-4 bg-steelers-gold text-steelers-black px-6 py-2 rounded-lg font-semibold hover:bg-dark-gold transition-colors duration-300"
            >
              Get Free Quote
            </button>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-300">
            <p>&copy; 2026 Pittsburgh Handyman Pros. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/" className="hover:text-steelers-gold transition-colors duration-300">Home</Link>
              <Link href="/about" className="hover:text-steelers-gold transition-colors duration-300">About</Link>
              <Link href="/gallery" className="hover:text-steelers-gold transition-colors duration-300">Gallery</Link>
              <Link href="/contact" className="hover:text-steelers-gold transition-colors duration-300">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
