import { Link } from "wouter";
import { ServiceData } from "@/data/services";
import { serviceAreas } from "@/data/serviceAreas";
import SEO from "@/components/SEO";
import SchemaMarkup from "@/components/SchemaMarkup";

interface ServicePageTemplateProps {
  service: ServiceData;
}

export default function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  return (
    <div className="pt-16">
      <SEO 
        title={service.metaTitle}
        description={service.metaDescription}
        keywords={service.keywords}
      />
      <SchemaMarkup 
        type="service"
        serviceName={service.title}
        serviceDescription={service.fullDescription}
      />

      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {service.title} in Pittsburgh
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              {service.shortDescription}
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
                <i className="fas fa-shield-alt text-steelers-gold mr-2"></i>
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-dollar-sign text-steelers-gold mr-2"></i>
                <span>Transparent Pricing</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-clock text-steelers-gold mr-2"></i>
                <span>On-Time Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Description Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-steelers-black mb-6">
                Professional {service.title} for Pittsburgh Homeowners
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                {service.fullDescription}
              </p>
              <h3 className="text-2xl font-bold text-steelers-black mb-4">
                What We Handle:
              </h3>
              <ul className="space-y-3">
                {service.tasks.map((task, index) => (
                  <li key={index} className="flex items-start">
                    <i className="fas fa-check text-steelers-gold mt-1 mr-3"></i>
                    <span className="text-gray-700">{task}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img 
                src={`https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600`}
                alt={`${service.title} services in Pittsburgh`}
                className="rounded-xl shadow-lg w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-steelers-black text-center mb-12">
            Why Choose Us for {service.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-steelers-gold rounded-full mb-4">
                  <i className={`${benefit.icon} text-2xl text-steelers-black`}></i>
                </div>
                <h3 className="text-xl font-bold text-steelers-black mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-steelers-black text-center mb-4">
            {service.title} Available In:
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We provide {service.title.toLowerCase()} services throughout Pittsburgh and surrounding communities.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {serviceAreas.map((area) => (
              <Link 
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="bg-gray-50 p-6 rounded-lg text-center hover:bg-steelers-gold hover:text-steelers-black transition-all duration-300 border-2 border-transparent hover:border-steelers-gold"
              >
                <i className="fas fa-map-marker-alt text-2xl mb-2"></i>
                <div className="font-semibold">{area.name}</div>
                <div className="text-sm opacity-75">{area.zipCode}</div>
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
            Get a free, no-obligation quote for your {service.title.toLowerCase()} project today.
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
