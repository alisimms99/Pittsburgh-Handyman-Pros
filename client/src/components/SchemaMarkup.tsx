import { useEffect } from 'react';

interface SchemaMarkupProps {
  type: 'local-business' | 'service';
  serviceName?: string;
  serviceDescription?: string;
}

export default function SchemaMarkup({ type, serviceName, serviceDescription }: SchemaMarkupProps) {
  useEffect(() => {
    const existingScript = document.querySelector('script[data-schema-type]');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-schema-type', type);

    if (type === 'local-business') {
      const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "HomeAndConstructionBusiness",
        "name": "Pittsburgh Handyman Pros",
        "description": "Professional handyman and home repair services for Pittsburgh homeowners. Licensed, insured, and reliable.",
        "url": "https://www.pittsburghhandymanpros.com",
        "telephone": "[PHONE_NUMBER_PLACEHOLDER]",
        "email": "info@pittsburghhandymanpros.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Pittsburgh",
          "addressRegion": "PA",
          "addressCountry": "US"
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Pittsburgh",
            "sameAs": "https://en.wikipedia.org/wiki/Pittsburgh"
          },
          {
            "@type": "Place",
            "name": "Upper St. Clair, PA"
          },
          {
            "@type": "Place",
            "name": "Fox Chapel, PA"
          },
          {
            "@type": "Place",
            "name": "Sewickley, PA"
          },
          {
            "@type": "Place",
            "name": "Ross Township, PA"
          },
          {
            "@type": "Place",
            "name": "Aspinwall, PA"
          }
        ],
        "priceRange": "$$",
        "openingHours": ["Mo-Fr 07:00-18:00", "Sa 08:00-16:00"],
        "sameAs": []
      };
      script.textContent = JSON.stringify(localBusinessSchema);
    } else if (type === 'service' && serviceName && serviceDescription) {
      const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": serviceName,
        "provider": {
          "@type": "HomeAndConstructionBusiness",
          "name": "Pittsburgh Handyman Pros"
        },
        "areaServed": {
          "@type": "City",
          "name": "Pittsburgh"
        },
        "description": serviceDescription
      };
      script.textContent = JSON.stringify(serviceSchema);
    }

    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.querySelector('script[data-schema-type]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [type, serviceName, serviceDescription]);

  return null;
}
