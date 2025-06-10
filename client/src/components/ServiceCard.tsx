interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export default function ServiceCard({ icon, title, description, features }: ServiceCardProps) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-steelers-gold">
      <div className="w-16 h-16 bg-steelers-gold rounded-full flex items-center justify-center text-steelers-black text-2xl mb-6">
        <i className={icon}></i>
      </div>
      <h3 className="text-2xl font-bold text-steelers-black mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="text-gray-600 space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <i className="fas fa-check text-steelers-gold mr-2"></i>
            {feature}
          </li>
        ))}
      </ul>
      <a href="/contact" className="text-steelers-gold font-semibold hover:text-dark-gold transition-colors duration-300">
        Learn More <i className="fas fa-arrow-right ml-2"></i>
      </a>
    </div>
  );
}
