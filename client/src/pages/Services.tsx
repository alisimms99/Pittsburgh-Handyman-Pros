import ServiceCard from "@/components/ServiceCard";
import { Link } from "wouter";

export default function Services() {
  const services = [
    {
      icon: "fas fa-home",
      title: "Kitchen & Bathroom Remodeling",
      description: "Complete renovations from design to finish. Transform your most important spaces with our expert craftsmanship. We handle everything from initial consultation to final walkthrough.",
      features: [
        "Custom Design & Planning",
        "Quality Materials & Fixtures",
        "Professional Installation",
        "Project Management",
        "Clean-up & Final Inspection"
      ]
    },
    {
      icon: "fas fa-tools",
      title: "General Handyman Services",
      description: "No job too small! From minor repairs to installations, we handle all your home maintenance needs with professional expertise and attention to detail.",
      features: [
        "Furniture Assembly",
        "Fixture Installation",
        "Minor Repairs",
        "Door & Window Maintenance",
        "Shelving & Storage Solutions"
      ]
    },
    {
      icon: "fas fa-paint-roller",
      title: "Interior & Exterior Painting",
      description: "Professional painting services that bring new life to your home's interior and exterior surfaces. We use premium paints and provide expert color consultation.",
      features: [
        "Premium Paint Products",
        "Color Consultation",
        "Surface Preparation",
        "Clean Finish Work",
        "Interior & Exterior Options"
      ]
    },
    {
      icon: "fas fa-hammer",
      title: "Flooring Installation",
      description: "Expert installation of hardwood, laminate, tile, and vinyl flooring with precision and care. We handle subfloor preparation and provide detailed finishing work.",
      features: [
        "Multiple Material Options",
        "Precision Installation",
        "Subfloor Repair & Prep",
        "Trim & Molding Work",
        "Floor Protection Plans"
      ]
    },
    {
      icon: "fas fa-bolt",
      title: "Electrical Services",
      description: "Licensed electrical work including outlet installation, lighting fixtures, and minor electrical repairs. All work is performed to code with safety as our top priority.",
      features: [
        "Licensed Electrician",
        "Code Compliant Work",
        "Safety First Approach",
        "Outlet Installation",
        "Lighting Fixture Work"
      ]
    },
    {
      icon: "fas fa-wrench",
      title: "Plumbing Services",
      description: "Professional plumbing repairs, fixture installation, and drain clearing services for your home. We handle everything from minor leaks to complete fixture replacements.",
      features: [
        "Leak Detection & Repair",
        "Fixture Installation",
        "Drain Clearing Services",
        "Water Pressure Solutions",
        "Emergency Repairs"
      ]
    }
  ];

  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="bg-steelers-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-steelers-gold">Professional</span> Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From complete home renovations to minor repairs, Pittsburgh Handyman Pros delivers quality craftsmanship and reliable service for all your home improvement needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/contact" className="bg-steelers-gold text-steelers-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-dark-gold transition-colors duration-300 transform hover:scale-105">
              Request Your Free Consultation
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
                <i className="fas fa-certificate"></i>
              </div>
              <h3 className="text-xl font-bold text-steelers-black mb-2">Licensed & Insured</h3>
              <p className="text-gray-600">Fully licensed, bonded, and insured for your peace of mind.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-steelers-gold rounded-full flex items-center justify-center text-steelers-black text-2xl mx-auto mb-4">
                <i className="fas fa-clock"></i>
              </div>
              <h3 className="text-xl font-bold text-steelers-black mb-2">Reliable Service</h3>
              <p className="text-gray-600">On-time arrival and professional service you can count on.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-steelers-gold rounded-full flex items-center justify-center text-steelers-black text-2xl mx-auto mb-4">
                <i className="fas fa-star"></i>
              </div>
              <h3 className="text-xl font-bold text-steelers-black mb-2">Quality Guarantee</h3>
              <p className="text-gray-600">We stand behind our work with a satisfaction guarantee.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-steelers-gold rounded-full flex items-center justify-center text-steelers-black text-2xl mx-auto mb-4">
                <i className="fas fa-dollar-sign"></i>
              </div>
              <h3 className="text-xl font-bold text-steelers-black mb-2">Fair Pricing</h3>
              <p className="text-gray-600">Transparent, competitive pricing with no hidden fees.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
