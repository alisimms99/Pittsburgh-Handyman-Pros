import { Link } from "wouter";
import { serviceAreas, alsoServingAreas } from "@/data/serviceAreas";
import SEO from "@/components/SEO";
import SchemaMarkup from "@/components/SchemaMarkup";

export default function ServiceAreasHub() {
  return (
    <div className="pt-16">
      <SEO 
        title="Service Areas | Pittsburgh Handyman Pros"
        description="Pittsburgh Handyman Pros serves Upper St. Clair, Fox Chapel, Sewickley, Ross Township, Aspinwall, and surrounding Pittsburgh communities."
        keywords="handyman Pittsburgh, service areas, Upper St. Clair, Fox Chapel, Sewickley"
      />
      <SchemaMarkup type="local-business" />

      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Areas We Serve
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional handyman services throughout Pittsburgh and surrounding communities. 
            We're proud to serve homeowners in these neighborhoods with reliable, quality service.
          </p>
        </div>
      </section>

      {/* Priority Service Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-steelers-black text-center mb-4">
            Priority Service Areas
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We specialize in serving these Pittsburgh communities with fast, reliable handyman services.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceAreas.map((area) => (
              <Link 
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-steelers-gold rounded-full mr-4 group-hover:scale-110 transition-transform">
                    <i className="fas fa-map-marker-alt text-xl text-steelers-black"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-steelers-black group-hover:text-steelers-gold transition-colors">
                      {area.name}
                    </h3>
                    <p className="text-gray-500">ZIP {area.zipCode}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {area.description}
                </p>
                <span className="text-steelers-gold font-semibold group-hover:underline">
                  View Services in {area.name} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Also Serving Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-steelers-black text-center mb-4">
            Also Serving
          </h2>
          <p className="text-center text-gray-600 mb-8">
            We also provide handyman services to these Pittsburgh neighborhoods:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {alsoServingAreas.map((area, index) => (
              <div 
                key={index}
                className="bg-white px-6 py-3 rounded-lg shadow text-steelers-black font-semibold"
              >
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-steelers-black text-center mb-12">
            Our Service Coverage
          </h2>
          <div className="bg-gray-100 rounded-xl p-12 text-center">
            <i className="fas fa-map text-6xl text-steelers-gold mb-4"></i>
            <p className="text-xl text-gray-600">
              Serving Pittsburgh and surrounding communities within a 20-mile radius.
            </p>
            <p className="text-gray-500 mt-4">
              Don't see your area listed? <Link href="/contact" className="text-steelers-gold hover:underline">Contact us</Link> to check if we serve your location.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-steelers-black text-center mb-12">
            Why Pittsburgh Homeowners Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-steelers-gold rounded-full mb-4">
                <i className="fas fa-clock text-2xl text-steelers-black"></i>
              </div>
              <h3 className="text-xl font-bold text-steelers-black mb-3">
                We Show Up On Time
              </h3>
              <p className="text-gray-600">
                No more waiting around. We arrive when scheduled and keep you informed.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-steelers-gold rounded-full mb-4">
                <i className="fas fa-dollar-sign text-2xl text-steelers-black"></i>
              </div>
              <h3 className="text-xl font-bold text-steelers-black mb-3">
                Transparent Pricing
              </h3>
              <p className="text-gray-600">
                Know the cost upfront. No surprise fees, no hidden charges.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-steelers-gold rounded-full mb-4">
                <i className="fas fa-shield-alt text-2xl text-steelers-black"></i>
              </div>
              <h3 className="text-xl font-bold text-steelers-black mb-3">
                Licensed & Insured
              </h3>
              <p className="text-gray-600">
                Full coverage for your peace of mind. We're professionals you can trust.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-steelers-gold rounded-full mb-4">
                <i className="fas fa-phone text-2xl text-steelers-black"></i>
              </div>
              <h3 className="text-xl font-bold text-steelers-black mb-3">
                One Call Does It All
              </h3>
              <p className="text-gray-600">
                Stop juggling contractors. We handle your entire to-do list.
              </p>
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
