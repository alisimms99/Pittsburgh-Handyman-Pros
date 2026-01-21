import ServicePageTemplate from "@/components/ServicePageTemplate";
import { getServiceBySlug } from "@/data/services";

export default function DrywallRepair() {
  const service = getServiceBySlug('drywall-repair');
  
  if (!service) {
    return <div>Service not found</div>;
  }

  return <ServicePageTemplate service={service} />;
}
