import AreaPageTemplate from "@/components/AreaPageTemplate";
import { getServiceAreaBySlug } from "@/data/serviceAreas";

export default function RossTownship() {
  const area = getServiceAreaBySlug('ross-township');
  
  if (!area) {
    return <div>Service area not found</div>;
  }

  return <AreaPageTemplate area={area} />;
}
