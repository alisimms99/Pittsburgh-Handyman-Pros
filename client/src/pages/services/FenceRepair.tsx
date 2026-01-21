import ServicePageTemplate from "@/components/ServicePageTemplate";
import { getServiceBySlug } from "@/data/services";

export default function FenceRepair() {
  const service = getServiceBySlug('fence-repair');
  
  if (!service) {
    return <div>Service not found</div>;
  }

  return <ServicePageTemplate service={service} />;
}
