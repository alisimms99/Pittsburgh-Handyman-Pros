export interface ServiceData {
  slug: string;
  title: string;
  icon: string;
  shortDescription: string;
  fullDescription: string;
  tasks: string[];
  benefits: {
    icon: string;
    title: string;
    description: string;
  }[];
  metaTitle: string;
  metaDescription: string;
  keywords: string;
}

export const services: ServiceData[] = [
  {
    slug: 'drywall-repair',
    title: 'Drywall Repair',
    icon: 'fas fa-hammer',
    shortDescription: 'Expert drywall repair and patching services for holes, cracks, and water damage.',
    fullDescription: 'Whether you have small nail holes or large damaged sections, our professional drywall repair services restore your walls to perfect condition. We handle everything from minor patches to extensive repairs, ensuring seamless results that blend perfectly with your existing walls.',
    tasks: [
      'Hole and crack repair',
      'Water damage restoration',
      'Texture matching',
      'Painting and finishing',
      'Drywall replacement',
      'Corner bead repair'
    ],
    benefits: [
      {
        icon: 'fas fa-check-circle',
        title: 'Perfect Texture Match',
        description: 'We match your existing wall texture so repairs are invisible.'
      },
      {
        icon: 'fas fa-clock',
        title: 'Same-Day Service',
        description: 'Most repairs completed in a single visit.'
      },
      {
        icon: 'fas fa-paint-roller',
        title: 'Paint-Ready Finish',
        description: 'Smooth, primed surface ready for painting.'
      }
    ],
    metaTitle: 'Drywall Repair Pittsburgh | Pittsburgh Handyman Pros',
    metaDescription: 'Professional drywall repair services in Pittsburgh. Fast, reliable, and fairly priced. Licensed & insured. Get your free estimate today.',
    keywords: 'drywall repair Pittsburgh, wall repair Pittsburgh, drywall patching, hole repair'
  },
  {
    slug: 'door-repair',
    title: 'Door Repair & Installation',
    icon: 'fas fa-door-open',
    shortDescription: 'Professional door repair, installation, and hardware replacement services.',
    fullDescription: 'From squeaky hinges to complete door replacement, we handle all your door needs. Our experienced team repairs and installs interior and exterior doors, ensuring proper fit, smooth operation, and enhanced security for your home.',
    tasks: [
      'Door hinge repair and replacement',
      'Lock and hardware installation',
      'Door frame repair',
      'Weather stripping',
      'Interior door installation',
      'Exterior door installation',
      'Sliding door repair',
      'Door alignment and adjustment'
    ],
    benefits: [
      {
        icon: 'fas fa-shield-alt',
        title: 'Enhanced Security',
        description: 'Properly functioning doors and locks keep your home secure.'
      },
      {
        icon: 'fas fa-tools',
        title: 'Expert Installation',
        description: 'Precise measurements and professional installation every time.'
      },
      {
        icon: 'fas fa-wind',
        title: 'Energy Efficiency',
        description: 'Proper sealing reduces drafts and energy costs.'
      }
    ],
    metaTitle: 'Door Repair Pittsburgh | Pittsburgh Handyman Pros',
    metaDescription: 'Professional door repair services in Pittsburgh. Fast, reliable, and fairly priced. Licensed & insured. Get your free estimate today.',
    keywords: 'door repair Pittsburgh, door installation Pittsburgh, door hardware, lock installation'
  },
  {
    slug: 'fence-repair',
    title: 'Fence Repair',
    icon: 'fas fa-border-all',
    shortDescription: 'Reliable fence repair and maintenance for wood, vinyl, and chain link fences.',
    fullDescription: 'Keep your fence looking great and functioning properly with our professional repair services. We fix damaged boards, replace posts, repair gates, and handle all types of fence maintenance to extend the life of your fence and maintain your property\'s curb appeal.',
    tasks: [
      'Broken board replacement',
      'Post repair and replacement',
      'Gate repair and adjustment',
      'Fence staining and sealing',
      'Hardware replacement',
      'Leaning fence correction',
      'Panel replacement'
    ],
    benefits: [
      {
        icon: 'fas fa-home',
        title: 'Curb Appeal',
        description: 'A well-maintained fence enhances your property value.'
      },
      {
        icon: 'fas fa-user-shield',
        title: 'Privacy & Security',
        description: 'Properly repaired fences provide better privacy and security.'
      },
      {
        icon: 'fas fa-calendar-check',
        title: 'Preventive Maintenance',
        description: 'Small repairs now prevent costly replacements later.'
      }
    ],
    metaTitle: 'Fence Repair Pittsburgh | Pittsburgh Handyman Pros',
    metaDescription: 'Professional fence repair services in Pittsburgh. Fast, reliable, and fairly priced. Licensed & insured. Get your free estimate today.',
    keywords: 'fence repair Pittsburgh, fence installation Pittsburgh, wood fence repair, vinyl fence repair'
  },
  {
    slug: 'painting',
    title: 'Interior Painting',
    icon: 'fas fa-paint-roller',
    shortDescription: 'Professional interior and exterior painting services with premium finishes.',
    fullDescription: 'Transform your home with our professional painting services. We provide meticulous surface preparation, premium paints, and expert application for beautiful, long-lasting results. Whether you need a single room refreshed or your entire home painted, we deliver quality craftsmanship.',
    tasks: [
      'Interior wall and ceiling painting',
      'Exterior painting',
      'Trim and molding painting',
      'Cabinet painting',
      'Deck and fence staining',
      'Color consultation',
      'Surface preparation and repair',
      'Clean, professional finish'
    ],
    benefits: [
      {
        icon: 'fas fa-palette',
        title: 'Premium Paints',
        description: 'We use high-quality paints for durability and coverage.'
      },
      {
        icon: 'fas fa-broom',
        title: 'Clean Workspace',
        description: 'Careful prep and thorough cleanup protect your home.'
      },
      {
        icon: 'fas fa-eye',
        title: 'Attention to Detail',
        description: 'Crisp lines, smooth finish, and professional results.'
      }
    ],
    metaTitle: 'Interior Painting Pittsburgh | Pittsburgh Handyman Pros',
    metaDescription: 'Professional interior painting services in Pittsburgh. Fast, reliable, and fairly priced. Licensed & insured. Get your free estimate today.',
    keywords: 'interior painting Pittsburgh, exterior painting Pittsburgh, house painting, cabinet painting'
  },
  {
    slug: 'plumbing',
    title: 'Plumbing Repairs',
    icon: 'fas fa-wrench',
    shortDescription: 'Handyman plumbing services for common repairs and fixture installation.',
    fullDescription: 'We handle common plumbing repairs and installations that don\'t require a licensed plumber. From leaky faucets to toilet repairs and fixture installations, we provide quick, reliable service to keep your plumbing working properly.',
    tasks: [
      'Faucet repair and replacement',
      'Toilet repair and installation',
      'Sink installation',
      'Garbage disposal installation',
      'Drain clearing',
      'Leak repairs',
      'Showerhead replacement',
      'Water line connections'
    ],
    benefits: [
      {
        icon: 'fas fa-tint',
        title: 'Stop Leaks Fast',
        description: 'Quick response to prevent water damage.'
      },
      {
        icon: 'fas fa-dollar-sign',
        title: 'Cost-Effective',
        description: 'Handyman rates for common plumbing tasks.'
      },
      {
        icon: 'fas fa-tools',
        title: 'Proper Tools',
        description: 'We have the right equipment for the job.'
      }
    ],
    metaTitle: 'Plumbing Handyman Pittsburgh | Pittsburgh Handyman Pros',
    metaDescription: 'Professional plumbing handyman services in Pittsburgh. Fast, reliable, and fairly priced. Licensed & insured. Get your free estimate today.',
    keywords: 'plumbing handyman Pittsburgh, faucet repair Pittsburgh, toilet repair, fixture installation'
  },
  {
    slug: 'electrical',
    title: 'Electrical Repairs',
    icon: 'fas fa-bolt',
    shortDescription: 'Licensed electrical repairs, outlet installation, and lighting fixture services.',
    fullDescription: 'Our licensed electricians handle electrical repairs and installations safely and to code. From installing new outlets to replacing light fixtures and troubleshooting electrical issues, we ensure your home\'s electrical system functions safely and reliably.',
    tasks: [
      'Outlet installation and repair',
      'Light fixture installation',
      'Ceiling fan installation',
      'Switch replacement',
      'GFCI outlet installation',
      'Electrical troubleshooting',
      'USB outlet installation',
      'Dimmer switch installation'
    ],
    benefits: [
      {
        icon: 'fas fa-certificate',
        title: 'Licensed Electrician',
        description: 'All work performed by licensed professionals.'
      },
      {
        icon: 'fas fa-shield-alt',
        title: 'Code Compliant',
        description: 'Work meets all local electrical codes.'
      },
      {
        icon: 'fas fa-bolt',
        title: 'Safety First',
        description: 'Your safety is our top priority on every job.'
      }
    ],
    metaTitle: 'Electrical Handyman Pittsburgh | Pittsburgh Handyman Pros',
    metaDescription: 'Professional electrical handyman services in Pittsburgh. Fast, reliable, and fairly priced. Licensed & insured. Get your free estimate today.',
    keywords: 'electrical handyman Pittsburgh, outlet installation Pittsburgh, light fixture installation, electrician'
  },
  {
    slug: 'home-repairs',
    title: 'General Home Repairs',
    icon: 'fas fa-tools',
    shortDescription: 'Comprehensive handyman services for all your home repair and maintenance needs.',
    fullDescription: 'Your one-stop solution for all home repairs and maintenance. From fixing that squeaky door to assembling furniture and everything in between, we handle the complete list of tasks on your to-do list. No job is too small, and we\'re equipped to tackle multiple repairs in a single visit.',
    tasks: [
      'Furniture assembly',
      'Shelf and picture hanging',
      'Minor carpentry',
      'Caulking and sealing',
      'Weatherproofing',
      'Gutter cleaning',
      'Pressure washing',
      'General maintenance',
      'Honey-do list items'
    ],
    benefits: [
      {
        icon: 'fas fa-list-check',
        title: 'One Call Does It All',
        description: 'We handle your entire to-do list in one visit.'
      },
      {
        icon: 'fas fa-clock',
        title: 'Save Your Time',
        description: 'Stop spending weekends on home repairs.'
      },
      {
        icon: 'fas fa-handshake',
        title: 'Reliable Service',
        description: 'We show up on time and get the job done right.'
      }
    ],
    metaTitle: 'Home Repair Pittsburgh | Pittsburgh Handyman Pros',
    metaDescription: 'Professional home repair services in Pittsburgh. Fast, reliable, and fairly priced. Licensed & insured. Get your free estimate today.',
    keywords: 'home repair Pittsburgh, handyman services Pittsburgh, general repairs, home maintenance'
  }
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find(service => service.slug === slug);
}
