export interface ServiceAreaData {
  slug: string;
  name: string;
  zipCode: string;
  description: string;
  landmarks: string[];
  metaTitle: string;
  metaDescription: string;
  keywords: string;
}

export const serviceAreas: ServiceAreaData[] = [
  {
    slug: 'upper-st-clair',
    name: 'Upper St. Clair',
    zipCode: '15241',
    description: 'Upper St. Clair is known for its excellent schools, beautiful homes, and strong community. We\'re proud to serve homeowners in this vibrant Pittsburgh suburb with reliable, professional handyman services. Whether you need drywall repair, painting, or general home maintenance, we understand the quality standards Upper St. Clair residents expect.',
    landmarks: [
      'Upper St. Clair Township Building',
      'Boyce Mayview Park',
      'Upper St. Clair High School',
      'Village Square Shopping Center'
    ],
    metaTitle: 'Handyman Services in Upper St. Clair | Pittsburgh Handyman Pros',
    metaDescription: 'Trusted handyman for Upper St. Clair homeowners. Drywall, plumbing, electrical, painting & general repairs. Licensed, insured, reliable. Free quotes.',
    keywords: 'handyman Upper St. Clair, home repair 15241, Upper St. Clair handyman services'
  },
  {
    slug: 'fox-chapel',
    name: 'Fox Chapel',
    zipCode: '15238',
    description: 'Fox Chapel\'s beautiful estates and well-maintained properties deserve the highest quality handyman services. We provide professional home repair and maintenance for Fox Chapel homeowners who value reliability, craftsmanship, and attention to detail. From routine maintenance to specialized repairs, we\'re your trusted local handyman.',
    landmarks: [
      'Fox Chapel Golf Club',
      'Hartwood Acres Park',
      'Fox Chapel Area High School',
      'Squaw Run Park'
    ],
    metaTitle: 'Handyman Services in Fox Chapel | Pittsburgh Handyman Pros',
    metaDescription: 'Trusted handyman for Fox Chapel homeowners. Drywall, plumbing, electrical, painting & general repairs. Licensed, insured, reliable. Free quotes.',
    keywords: 'handyman Fox Chapel, home repair 15238, Fox Chapel handyman services'
  },
  {
    slug: 'sewickley',
    name: 'Sewickley',
    zipCode: '15143',
    description: 'Sewickley\'s charming historic homes and tight-knit community deserve a handyman who understands quality craftsmanship. We serve Sewickley homeowners with professional repair and maintenance services, respecting the character and value of your home. Whether you have a historic property or modern home, we deliver reliable, skilled service.',
    landmarks: [
      'Sewickley Village',
      'Sewickley Heights Golf Club',
      'Sewickley Academy',
      'Riverfront Park'
    ],
    metaTitle: 'Handyman Services in Sewickley | Pittsburgh Handyman Pros',
    metaDescription: 'Trusted handyman for Sewickley homeowners. Drywall, plumbing, electrical, painting & general repairs. Licensed, insured, reliable. Free quotes.',
    keywords: 'handyman Sewickley, home repair 15143, Sewickley handyman services'
  },
  {
    slug: 'ross-township',
    name: 'Ross Township',
    zipCode: '15237',
    description: 'Ross Township homeowners trust us for prompt, professional handyman services. We understand the needs of busy families in this thriving community and provide reliable repairs and maintenance you can count on. From quick fixes to larger projects, we\'re your local handyman solution in Ross Township and McCandless.',
    landmarks: [
      'Ross Park Mall',
      'North Park',
      'Ross Township Municipal Building',
      'McKnight Road shopping district'
    ],
    metaTitle: 'Handyman Services in Ross Township | Pittsburgh Handyman Pros',
    metaDescription: 'Trusted handyman for Ross Township homeowners. Drywall, plumbing, electrical, painting & general repairs. Licensed, insured, reliable. Free quotes.',
    keywords: 'handyman Ross Township, home repair 15237, Ross Township handyman services, McCandless handyman'
  },
  {
    slug: 'aspinwall',
    name: 'Aspinwall',
    zipCode: '15215',
    description: 'Aspinwall\'s close-knit community and diverse housing stock require a versatile, skilled handyman. We provide professional home repair services for Aspinwall residents, handling everything from routine maintenance to specialized repairs. Our commitment to quality and reliability makes us the trusted choice for Aspinwall homeowners.',
    landmarks: [
      'Aspinwall Riverfront Park',
      'Brilliant Avenue business district',
      'Aspinwall Borough Building',
      'Highland Park (nearby)'
    ],
    metaTitle: 'Handyman Services in Aspinwall | Pittsburgh Handyman Pros',
    metaDescription: 'Trusted handyman for Aspinwall homeowners. Drywall, plumbing, electrical, painting & general repairs. Licensed, insured, reliable. Free quotes.',
    keywords: 'handyman Aspinwall, home repair 15215, Aspinwall handyman services'
  }
];

export const alsoServingAreas = [
  'Mt. Lebanon',
  'Bethel Park',
  'Shadyside',
  'Squirrel Hill'
];

export function getServiceAreaBySlug(slug: string): ServiceAreaData | undefined {
  return serviceAreas.find(area => area.slug === slug);
}
