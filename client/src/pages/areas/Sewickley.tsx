import AreaPageTemplate from "@/components/AreaPageTemplate";
import { getServiceAreaBySlug } from "@/data/serviceAreas";

export default function Sewickley() {
  const area = getServiceAreaBySlug('sewickley');
  
  if (!area) {
    return <div>Service area not found</div>;
  }

  return <AreaPageTemplate area={area} />;
}
