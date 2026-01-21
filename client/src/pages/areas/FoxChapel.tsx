import AreaPageTemplate from "@/components/AreaPageTemplate";
import { getServiceAreaBySlug } from "@/data/serviceAreas";

export default function FoxChapel() {
  const area = getServiceAreaBySlug('fox-chapel');
  
  if (!area) {
    return <div>Service area not found</div>;
  }

  return <AreaPageTemplate area={area} />;
}
