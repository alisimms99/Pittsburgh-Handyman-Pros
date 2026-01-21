import ServicePageTemplate from "@/components/ServicePageTemplate";
import { getServiceBySlug } from "@/data/services";

export default function DoorRepair() {
  const service = getServiceBySlug('door-repair');
  
  if (!service) {
    return <div>Service not found</div>;
  }

  return <ServicePageTemplate service={service} />;
}
