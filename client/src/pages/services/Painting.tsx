import ServicePageTemplate from "@/components/ServicePageTemplate";
import { getServiceBySlug } from "@/data/services";

export default function Painting() {
  const service = getServiceBySlug('painting');
  
  if (!service) {
    return <div>Service not found</div>;
  }

  return <ServicePageTemplate service={service} />;
}
