import GalleryGrid from "@/components/GalleryGrid";

export default function Gallery() {
  const galleryImages = [
    // Kitchen Remodeling Images
    {
      id: "kitchen-1",
      src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Modern kitchen remodel with white cabinets",
      title: "Modern Kitchen Remodel",
      description: "Complete renovation with custom cabinets",
      category: "kitchen" as const
    },
    {
      id: "kitchen-2",
      src: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Contemporary kitchen with dark cabinets",
      title: "Contemporary Kitchen",
      description: "Dark cabinets with granite countertops",
      category: "kitchen" as const
    },
    {
      id: "kitchen-3",
      src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Luxury kitchen with stainless steel appliances",
      title: "Luxury Kitchen Upgrade",
      description: "Premium appliances and finishes",
      category: "kitchen" as const
    },
    {
      id: "kitchen-4",
      src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Kitchen island with seating",
      title: "Kitchen Island Addition",
      description: "Custom island with breakfast bar",
      category: "kitchen" as const
    },
    {
      id: "kitchen-5",
      src: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Open concept kitchen design",
      title: "Open Concept Kitchen",
      description: "Seamless flow to living area",
      category: "kitchen" as const
    },
    {
      id: "kitchen-6",
      src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Traditional kitchen renovation",
      title: "Traditional Kitchen Renovation",
      description: "Classic design with modern functionality",
      category: "kitchen" as const
    },

    // Bathroom Renovation Images
    {
      id: "bathroom-1",
      src: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Modern bathroom with subway tiles",
      title: "Modern Bathroom Renovation",
      description: "Complete redesign with premium fixtures",
      category: "bathroom" as const
    },
    {
      id: "bathroom-2",
      src: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Spa-like bathroom with natural stone",
      title: "Spa-Style Bathroom",
      description: "Natural stone and luxury features",
      category: "bathroom" as const
    },
    {
      id: "bathroom-3",
      src: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Contemporary bathroom with floating vanity",
      title: "Contemporary Bath",
      description: "Floating vanity and modern fixtures",
      category: "bathroom" as const
    },
    {
      id: "bathroom-4",
      src: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Master bathroom suite",
      title: "Master Bathroom Suite",
      description: "Luxury master bath with walk-in shower",
      category: "bathroom" as const
    },
    {
      id: "bathroom-5",
      src: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Small bathroom optimization",
      title: "Small Bathroom Makeover",
      description: "Maximizing space with smart design",
      category: "bathroom" as const
    },
    {
      id: "bathroom-6",
      src: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Accessible bathroom design",
      title: "Accessible Bathroom Design",
      description: "Safe and stylish accessibility features",
      category: "bathroom" as const
    },

    // General Work Images
    {
      id: "general-1",
      src: "https://images.unsplash.com/photo-1504148455328-c376907d081c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Professional handyman tools",
      title: "Professional Tools",
      description: "Quality equipment for every job",
      category: "general" as const
    },
    {
      id: "general-2",
      src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Home improvement project",
      title: "Home Improvement",
      description: "Precision work and attention to detail",
      category: "general" as const
    },
    {
      id: "general-3",
      src: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Pittsburgh residential home",
      title: "Pittsburgh Home",
      description: "Serving the greater Pittsburgh area",
      category: "general" as const
    },
    {
      id: "general-4",
      src: "https://images.unsplash.com/photo-1504148455328-c376907d081c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Custom carpentry work",
      title: "Custom Carpentry",
      description: "Built-in shelving and storage solutions",
      category: "general" as const
    }
  ];

  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="bg-steelers-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Work <span className="text-steelers-gold">Gallery</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See the quality craftsmanship and attention to detail that makes us Pittsburgh's preferred home renovation experts.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryGrid images={galleryImages} />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-steelers-black mb-6">
            Ready to Transform Your Home?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Let us bring your vision to life with our expert craftsmanship and professional service. Contact us today for your free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-steelers-gold text-steelers-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-dark-gold transition-colors duration-300 transform hover:scale-105">
              Get Free Quote
            </a>
            <a href="tel:412-555-0123" className="border-2 border-steelers-gold text-steelers-gold px-8 py-4 rounded-lg text-lg font-semibold hover:bg-steelers-gold hover:text-steelers-black transition-all duration-300">
              Call (412) 555-0123
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
