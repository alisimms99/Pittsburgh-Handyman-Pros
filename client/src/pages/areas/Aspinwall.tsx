import AreaPageTemplate from "@/components/AreaPageTemplate";
import { getServiceAreaBySlug } from "@/data/serviceAreas";

export default function Aspinwall() {
  const area = getServiceAreaBySlug('aspinwall');
  
  if (!area) {
    return <div>Service area not found</div>;
  }

  return <AreaPageTemplate area={area} />;
}
