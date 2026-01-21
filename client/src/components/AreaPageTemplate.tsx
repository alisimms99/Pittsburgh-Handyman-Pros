import { Link } from "wouter";
import { ServiceAreaData, serviceAreas } from "@/data/serviceAreas";
import { services } from "@/data/services";
import SEO from "@/components/SEO";
import SchemaMarkup from "@/components/SchemaMarkup";

interface AreaPageTemplateProps {
  area: ServiceAreaData;
}

export default function AreaPageTemplate({ area }: AreaPageTemplateProps) {
  const otherAreas = serviceAreas.filter(a => a.slug !== area.slug);

  return (
    <div className="pt-16">
      <SEO 
        title={area.metaTitle}
        description={area.metaDescription}
        keywords={area.keywords}
      />
      <SchemaMarkup type="local-business" />

      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Handyman Services in {area.name}
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Trusted home repairs for {area.name} homeowners. Licensed, insured, and reliable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-steelers-gold text-steelers-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-dark-gold transition-colors duration-300 text-center">
                Get a Free Quote
              </Link>
              <a href="tel:[PHONE_NUMBER_PLACEHOLDER]" className="border-2 border-steelers-gold text-steelers-gold px-8 py-4 rounded-lg text-lg font-semibold hover:bg-steelers-gold hover:text-steelers-black transition-all duration-300 text-center">
                Call [PHONE_NUMBER_PLACEHOLDER]
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-6">
              <div className="flex items-center">
                <i className="fas fa-map-marker-alt text-steelers-gold mr-2"></i>
                <span>Serving ZIP {area.zipCode}</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-shield-alt text-steelers-gold mr-2"></i>
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-clock text-steelers-gold mr-2"></i>
                <span>On-Time Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Area Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-steelers-black mb-6">
                Your Trusted {area.name} Handyman
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                {area.description}
              </p>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-steelers-black mb-4">
                  Serving {area.name} Landmarks:
                </h3>
                <ul className="space-y-2">
                  {area.landmarks.map((landmark, index) => (
                    <li key={index} className="flex items-start">
                      <i className="fas fa-map-marker-alt text-steelers-gold mt-1 mr-3"></i>
                      <span className="text-gray-700">{landmark}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt={`${area.name} homes`}
                className="rounded-xl shadow-lg w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services We Offer */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-steelers-black text-center mb-4">
            Services We Offer in {area.name}
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            From minor repairs to complete projects, we handle all your home maintenance needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link 
                key={service.slug}
                href={`/services/${service.slug}`}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-steelers-gold rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${service.icon} text-2xl text-steelers-black`}></i>
                </div>
                <h3 className="text-xl font-bold text-steelers-black mb-3 group-hover:text-steelers-gold transition-colors">
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
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-steelers-black text-center mb-12">
            Why {area.name} Homeowners Choose Us
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

      {/* Other Areas We Serve */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-steelers-black text-center mb-12">
            Other Areas We Serve
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {otherAreas.map((otherArea) => (
              <Link 
                key={otherArea.slug}
                href={`/areas/${otherArea.slug}`}
                className="bg-white p-6 rounded-lg text-center hover:bg-steelers-gold hover:text-steelers-black transition-all duration-300 border-2 border-transparent hover:border-steelers-gold"
              >
                <i className="fas fa-map-marker-alt text-2xl mb-2"></i>
                <div className="font-semibold">{otherArea.name}</div>
                <div className="text-sm opacity-75">{otherArea.zipCode}</div>
              </Link>
            ))}
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
            Get a free, no-obligation quote for your {area.name} home repair project today.
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
