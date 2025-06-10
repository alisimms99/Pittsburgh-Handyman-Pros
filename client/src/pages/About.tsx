export default function About() {
  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "25+", label: "Years Experience" },
    { number: "4.9", label: "Average Rating" },
    { number: "100%", label: "Licensed & Insured" }
  ];

  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="bg-steelers-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-steelers-gold">Pittsburgh Handyman Pros</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your trusted partner for quality home improvement and renovation services throughout the Pittsburgh area.
          </p>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-steelers-black mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                With over 25 years of experience serving the Pittsburgh area, we've built our reputation on quality craftsmanship, reliable service, and honest pricing. Our team of skilled professionals takes pride in transforming houses into homes.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                From small repairs to complete renovations, we approach every project with the same attention to detail and commitment to excellence. We're not just contractors – we're your neighbors, invested in making Pittsburgh homes beautiful and functional.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-steelers-gold mb-2">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center space-x-4">
                <i className="fas fa-certificate text-steelers-gold text-2xl"></i>
                <span className="text-gray-600">Licensed, Bonded & Insured</span>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Professional contractor team" 
                className="rounded-xl shadow-2xl w-full h-auto" 
              />
              <div className="absolute -bottom-6 -right-6 bg-steelers-black text-white p-6 rounded-xl shadow-xl">
                <div className="text-steelers-gold text-2xl font-bold">★★★★★</div>
                <div className="text-sm font-medium">Trusted by Pittsburgh</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-steelers-black mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape our commitment to excellence in every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-steelers-gold rounded-full flex items-center justify-center text-steelers-black text-2xl mx-auto mb-4">
                <i className="fas fa-handshake"></i>
              </div>
              <h3 className="text-xl font-bold text-steelers-black mb-4">Integrity</h3>
              <p className="text-gray-600">
                We believe in honest communication, transparent pricing, and doing what's right for our customers.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-steelers-gold rounded-full flex items-center justify-center text-steelers-black text-2xl mx-auto mb-4">
                <i className="fas fa-award"></i>
              </div>
              <h3 className="text-xl font-bold text-steelers-black mb-4">Quality</h3>
              <p className="text-gray-600">
                Every project receives our full attention to detail and commitment to superior craftsmanship.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-steelers-gold rounded-full flex items-center justify-center text-steelers-black text-2xl mx-auto mb-4">
                <i className="fas fa-clock"></i>
              </div>
              <h3 className="text-xl font-bold text-steelers-black mb-4">Reliability</h3>
              <p className="text-gray-600">
                On-time service, dependable results, and consistent communication throughout your project.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-steelers-gold rounded-full flex items-center justify-center text-steelers-black text-2xl mx-auto mb-4">
                <i className="fas fa-users"></i>
              </div>
              <h3 className="text-xl font-bold text-steelers-black mb-4">Community</h3>
              <p className="text-gray-600">
                We're proud to serve our Pittsburgh neighbors and contribute to our community's growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-steelers-black mb-4">Our Commitment</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              When you choose Pittsburgh Handyman Pros, you're choosing a team dedicated to excellence in every aspect of your home improvement project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-steelers-gold rounded-full flex items-center justify-center text-steelers-black text-2xl mx-auto mb-4">
                <i className="fas fa-tools"></i>
              </div>
              <h3 className="text-xl font-bold text-steelers-black mb-4">Expert Craftsmanship</h3>
              <p className="text-gray-600">
                Our skilled professionals bring years of experience and expertise to every project, ensuring quality results that last.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-steelers-gold rounded-full flex items-center justify-center text-steelers-black text-2xl mx-auto mb-4">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3 className="text-xl font-bold text-steelers-black mb-4">Peace of Mind</h3>
              <p className="text-gray-600">
                Fully licensed, bonded, and insured, we provide complete protection and peace of mind for every project.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-steelers-gold rounded-full flex items-center justify-center text-steelers-black text-2xl mx-auto mb-4">
                <i className="fas fa-heart"></i>
              </div>
              <h3 className="text-xl font-bold text-steelers-black mb-4">Customer Care</h3>
              <p className="text-gray-600">
                Your satisfaction is our priority. We listen to your needs and work closely with you throughout the entire process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-steelers-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Work with Pittsburgh's Best?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Experience the difference that quality craftsmanship and professional service can make for your home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-steelers-gold text-steelers-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-dark-gold transition-colors duration-300 transform hover:scale-105">
              Get Your Free Quote
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
