import ServicePageTemplate from "@/components/ServicePageTemplate";
import { getServiceBySlug } from "@/data/services";

export default function HomeRepairs() {
  const service = getServiceBySlug('home-repairs');
  
  if (!service) {
    return <div>Service not found</div>;
  }

  return <ServicePageTemplate service={service} />;
}
