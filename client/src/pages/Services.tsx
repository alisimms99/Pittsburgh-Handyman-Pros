import { Link } from "wouter";
import { services } from "@/data/services";
import SEO from "@/components/SEO";
import SchemaMarkup from "@/components/SchemaMarkup";

export default function Services() {
  return (
    <div className="pt-16">
      <SEO 
        title="Our Services | Pittsburgh Handyman Pros"
        description="Professional handyman services in Pittsburgh including drywall repair, painting, plumbing, electrical, door repair, fence repair, and general home repairs."
        keywords="handyman services Pittsburgh, home repair Pittsburgh, drywall repair, painting, plumbing, electrical"
      />
      <SchemaMarkup type="local-business" />

      {/* Header Section */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-steelers-gold">Professional</span> Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From minor repairs to complete projects, Pittsburgh Handyman Pros delivers quality craftsmanship and reliable service for all your home maintenance needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-steelers-black mb-4">
              What We Can Do For You
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Click any service below to learn more about what we offer and get a free quote.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service) => (
              <Link 
                key={service.slug}
                href={`/services/${service.slug}`}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-steelers-gold rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${service.icon} text-2xl text-steelers-black`}></i>
                </div>
                <h3 className="text-2xl font-bold text-steelers-black mb-3 group-hover:text-steelers-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.shortDescription}
                </p>
                <span className="text-steelers-gold font-semibold group-hover:underline">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/contact" className="bg-steelers-gold text-steelers-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-dark-gold transition-colors duration-300 transform hover:scale-105">
              Request Your Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-steelers-black mb-4">Why Choose Pittsburgh Handyman Pros?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to delivering exceptional service and quality workmanship on every project, big or small.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-steelers-gold rounded-full flex items-center justify-center text-steelers-black text-2xl mx-auto mb-4">
                <i className="fas fa-clock"></i>
              </div>
              <h3 className="text-xl font-bold text-steelers-black mb-2">We Show Up On Time</h3>
              <p className="text-gray-600">No more waiting around. We arrive when scheduled and keep you informed.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-steelers-gold rounded-full flex items-center justify-center text-steelers-black text-2xl mx-auto mb-4">
                <i className="fas fa-dollar-sign"></i>
              </div>
              <h3 className="text-xl font-bold text-steelers-black mb-2">Transparent Pricing</h3>
              <p className="text-gray-600">Know the cost upfront. No surprise fees, no hidden charges.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-steelers-gold rounded-full flex items-center justify-center text-steelers-black text-2xl mx-auto mb-4">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3 className="text-xl font-bold text-steelers-black mb-2">Licensed & Insured</h3>
              <p className="text-gray-600">Full coverage for your peace of mind. We're professionals you can trust.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-steelers-gold rounded-full flex items-center justify-center text-steelers-black text-2xl mx-auto mb-4">
                <i className="fas fa-phone"></i>
              </div>
              <h3 className="text-xl font-bold text-steelers-black mb-2">One Call Does It All</h3>
              <p className="text-gray-600">Stop juggling contractors. We handle your entire to-do list.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-steelers-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a free, no-obligation quote for your home repair project today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-steelers-gold text-steelers-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-dark-gold transition-colors duration-300">
              Request Free Quote
            </Link>
            <a href="tel:[PHONE_NUMBER_PLACEHOLDER]" className="border-2 border-steelers-gold text-steelers-gold px-8 py-4 rounded-lg text-lg font-semibold hover:bg-steelers-gold hover:text-steelers-black transition-all duration-300">
              Call [PHONE_NUMBER_PLACEHOLDER]
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
