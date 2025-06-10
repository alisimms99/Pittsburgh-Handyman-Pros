import { Link } from "wouter";
import ServiceCard from "@/components/ServiceCard";

export default function Home() {
  const services = [
    {
      icon: "fas fa-home",
      title: "Kitchen & Bathroom Remodeling",
      description: "Complete renovations from design to finish. Transform your most important spaces with our expert craftsmanship.",
      features: ["Custom Design", "Quality Materials", "Professional Installation"]
    },
    {
      icon: "fas fa-tools",
      title: "General Handyman Services",
      description: "No job too small! From minor repairs to installations, we handle all your home maintenance needs.",
      features: ["Furniture Assembly", "Fixture Installation", "Minor Repairs"]
    },
    {
      icon: "fas fa-paint-roller",
      title: "Interior & Exterior Painting",
      description: "Professional painting services that bring new life to your home's interior and exterior surfaces.",
      features: ["Premium Paints", "Color Consultation", "Clean Finish"]
    },
    {
      icon: "fas fa-hammer",
      title: "Flooring Installation",
      description: "Expert installation of hardwood, laminate, tile, and vinyl flooring with precision and care.",
      features: ["Multiple Materials", "Precision Installation", "Subfloor Repair"]
    },
    {
      icon: "fas fa-bolt",
      title: "Electrical Services",
      description: "Licensed electrical work including outlet installation, lighting fixtures, and minor electrical repairs.",
      features: ["Licensed Electrician", "Code Compliant", "Safety First"]
    },
    {
      icon: "fas fa-wrench",
      title: "Plumbing Services",
      description: "Professional plumbing repairs, fixture installation, and drain clearing services for your home.",
      features: ["Leak Repairs", "Fixture Installation", "Drain Clearing"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Shadyside",
      initials: "SJ",
      text: "Outstanding work on our kitchen remodel! The team was professional, punctual, and the quality exceeded our expectations. Highly recommend Pittsburgh Handyman Pros!"
    },
    {
      name: "Mike Brown",
      location: "Squirrel Hill",
      initials: "MB",
      text: "From start to finish, they handled our bathroom renovation perfectly. Clean, efficient, and beautiful results. Worth every penny!"
    },
    {
      name: "Lisa Davis",
      location: "Mt. Washington",
      initials: "LD",
      text: "Reliable, honest, and skilled. They've become our go-to for all home improvement needs. True professionals who stand behind their work."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="hero-gradient text-white min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Pittsburgh's <span className="text-steelers-gold">Premier</span> Home Renovation Experts
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300">
                Transform your home with our professional kitchen & bathroom remodeling, handyman services, and quality craftsmanship.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="bg-steelers-gold text-steelers-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-dark-gold transition-colors duration-300 transform hover:scale-105 text-center">
                  Get Free Quote
                </Link>
                <a href="tel:412-555-0123" className="border-2 border-steelers-gold text-steelers-gold px-8 py-4 rounded-lg text-lg font-semibold hover:bg-steelers-gold hover:text-steelers-black transition-all duration-300 text-center">
                  Call (412) 555-0123
                </a>
              </div>
              <div className="mt-8 flex items-center space-x-6">
                <div className="flex items-center">
                  <i className="fas fa-star text-steelers-gold mr-2"></i>
                  <span className="text-lg">4.9/5 Rating</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-tools text-steelers-gold mr-2"></i>
                  <span className="text-lg">500+ Projects</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-award text-steelers-gold mr-2"></i>
                  <span className="text-lg">Licensed & Insured</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Professional handyman with tools" 
                className="rounded-xl shadow-2xl w-full h-auto" 
              />
              <div className="absolute -bottom-6 -left-6 bg-steelers-gold text-steelers-black p-6 rounded-xl shadow-xl">
                <div className="text-2xl font-bold">25+</div>
                <div className="text-sm font-medium">Years Experience</div>
              </div>
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
              From kitchen remodeling to general repairs, we provide comprehensive home improvement services throughout Pittsburgh.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/contact" className="bg-steelers-black text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-steel-gray transition-colors duration-300">
              Get Your Free Estimate Today
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
    </div>
  );
}
