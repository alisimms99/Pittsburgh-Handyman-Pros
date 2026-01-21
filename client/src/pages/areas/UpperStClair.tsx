import AreaPageTemplate from "@/components/AreaPageTemplate";
import { getServiceAreaBySlug } from "@/data/serviceAreas";

export default function UpperStClair() {
  const area = getServiceAreaBySlug('upper-st-clair');
  
  if (!area) {
    return <div>Service area not found</div>;
  }

  return <AreaPageTemplate area={area} />;
}
