import { Link } from "wouter";
import { services } from "@/data/services";
import { serviceAreas } from "@/data/serviceAreas";
import SEO from "@/components/SEO";
import SchemaMarkup from "@/components/SchemaMarkup";

export default function Home() {
  const testimonials = [
    {
      name: "Michael R.",
      location: "Upper St. Clair",
      initials: "MR",
      text: "They showed up exactly when they said they would and completed the drywall repair perfectly. Finally, a contractor who keeps their word!"
    },
    {
      name: "Jennifer K.",
      location: "Fox Chapel",
      initials: "JK",
      text: "I appreciated knowing the cost upfront with no surprises. The quality of work on our interior painting was excellent."
    },
    {
      name: "David S.",
      location: "Sewickley",
      initials: "DS",
      text: "Professional, courteous, and skilled. They handled multiple repairs in one visit and everything was done right. Highly recommend!"
    }
  ];

  return (
    <div className="pt-16">
      <SEO 
        title="Pittsburgh Handyman Pros | Reliable Home Repair Services"
        description="Trusted handyman services for Pittsburgh homeowners. Drywall, plumbing, electrical, painting & more. Licensed & insured. Call for a free quote."
        keywords="handyman Pittsburgh, home repair Pittsburgh, handyman services, drywall repair, painting, plumbing"
      />
      <SchemaMarkup type="local-business" />

      {/* Hero Section */}
      <section className="hero-gradient text-white min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Pittsburgh's <span className="text-steelers-gold">Trusted Handyman</span> for Busy Homeowners
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300">
                One call. Transparent pricing. We show up when we say we will.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="bg-steelers-gold text-steelers-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-dark-gold transition-colors duration-300 transform hover:scale-105 text-center">
                  Get a Free Quote
                </Link>
                <a href="tel:[PHONE_NUMBER_PLACEHOLDER]" className="border-2 border-steelers-gold text-steelers-gold px-8 py-4 rounded-lg text-lg font-semibold hover:bg-steelers-gold hover:text-steelers-black transition-all duration-300 text-center">
                  Call [PHONE_NUMBER_PLACEHOLDER]
                </a>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <div className="flex items-center">
                  <i className="fas fa-shield-alt text-steelers-gold mr-2"></i>
                  <span className="text-lg">Licensed & Insured</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-dollar-sign text-steelers-gold mr-2"></i>
                  <span className="text-lg">Transparent Pricing</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-clock text-steelers-gold mr-2"></i>
                  <span className="text-lg">On-Time Guarantee</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Professional handyman with tools" 
                className="rounded-xl shadow-2xl w-full h-auto" 
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-steelers-black mb-4">Our Expert Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From minor repairs to complete projects, we handle all your home maintenance needs throughout Pittsburgh.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service) => (
              <Link 
                key={service.slug}
                href={`/services/${service.slug}`}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
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
          
          <div className="text-center">
            <Link href="/services" className="bg-steelers-black text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-steel-gray transition-colors duration-300">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-steelers-black mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand you're busy and need a handyman you can trust. Here's what sets us apart.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-steelers-gold rounded-full flex items-center justify-center text-steelers-black text-2xl mx-auto mb-4">
                <i className="fas fa-clock"></i>
              </div>
              <h3 className="text-xl font-bold text-steelers-black mb-3">We Show Up On Time</h3>
              <p className="text-gray-600">No more waiting around. We arrive when scheduled and keep you informed.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-steelers-gold rounded-full flex items-center justify-center text-steelers-black text-2xl mx-auto mb-4">
                <i className="fas fa-dollar-sign"></i>
              </div>
              <h3 className="text-xl font-bold text-steelers-black mb-3">Transparent Pricing</h3>
              <p className="text-gray-600">Know the cost upfront. No surprise fees, no hidden charges.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-steelers-gold rounded-full flex items-center justify-center text-steelers-black text-2xl mx-auto mb-4">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3 className="text-xl font-bold text-steelers-black mb-3">Licensed & Insured</h3>
              <p className="text-gray-600">Full coverage for your peace of mind. We're professionals you can trust.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-steelers-gold rounded-full flex items-center justify-center text-steelers-black text-2xl mx-auto mb-4">
                <i className="fas fa-phone"></i>
              </div>
              <h3 className="text-xl font-bold text-steelers-black mb-3">One Call Does It All</h3>
              <p className="text-gray-600">Stop juggling contractors. We handle your entire to-do list.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-steelers-black mb-4">Areas We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proudly serving Pittsburgh and surrounding communities with reliable handyman services.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {serviceAreas.map((area) => (
              <Link 
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="bg-white p-6 rounded-lg text-center hover:bg-steelers-gold hover:text-steelers-black transition-all duration-300 border-2 border-transparent hover:border-steelers-gold"
              >
                <i className="fas fa-map-marker-alt text-2xl mb-2"></i>
                <div className="font-semibold">{area.name}</div>
                <div className="text-sm opacity-75">{area.zipCode}</div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link href="/areas" className="text-steelers-gold font-semibold hover:underline text-lg">
              View All Service Areas →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-steelers-black mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Don't just take our word for it – here's what Pittsburgh homeowners say about our work.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="flex text-steelers-gold">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fas fa-star"></i>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-steelers-gold rounded-full flex items-center justify-center text-steelers-black font-bold mr-4">
                    <span>{testimonial.initials}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-steelers-black">{testimonial.name}</div>
                    <div className="text-gray-500 text-sm">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-steelers-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Check Off Your To-Do List?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a free, no-obligation quote today. We'll show up on time and get the job done right.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-steelers-gold text-steelers-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-dark-gold transition-colors duration-300">
              Get Your Free Quote
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
