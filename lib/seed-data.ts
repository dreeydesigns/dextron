export interface ProductItem {
  productName: string;
  productImage?: string;
  productDescription: string;
  productBenefits: string[];
  productSize: string;
}

export interface BrandData {
  _id: string;
  name: string;
  slug: { current: string };
  tagline: string;
  category: 'baby-care' | 'infant-nutrition' | 'feminine-hygiene' | 'home-cleaning' | 'health-supplements';
  primaryColor: string;
  accentColor: string;
  lightBg: string;
  borderClass: string;
  badge: string;
  targetAudience: string;
  description: string;
  keyBenefits: string[];
  heroImage?: string;
  productImages?: string[];
  productLine: ProductItem[];
  usageInstructions?: string;
  certifications: string[];
  competitorContext?: string;
  featured: boolean;
  order: number;
}

export interface StockistData {
  _id: string;
  name: string;
  type: 'supermarket' | 'pharmacy' | 'wholesaler' | 'baby-shop' | 'online-store' | 'other';
  location: string;
  region: 'Nairobi' | 'Coast / Mombasa' | 'Rift Valley' | 'Western / Nyanza' | 'Central';
  address: string;
  phone: string;
  brandsStocked: string[];
  featured: boolean;
}

export interface TestimonialData {
  _id: string;
  customerName: string;
  customerLocation: string;
  brandName: string;
  quote: string;
  rating: number;
  customerPhoto?: string;
  approved: boolean;
  dateReceived?: string;
}

export interface FAQData {
  _id: string;
  question: string;
  answer: string;
  category: 'general' | 'nuna-diapers' | 'nunalac' | 'bilan' | 'sofresh-soclean' | 'shipping-delivery' | 'distribution-wholesale';
  order: number;
}

export interface SiteSettingsData {
  companyName: string;
  whatsappNumber: string;
  phoneNumber: string;
  secondaryPhone: string;
  email: string;
  physicalAddress: string;
  heroHeadline: string;
  heroSubheadline: string;
  facebookUrl: string;
  instagramUrl: string;
  tiktokUrl: string;
}

const nunaPhoto = (sku: string, angle = 1) =>
  `/images/nuna-diapers/${sku}/Nuna ${sku.includes('wipes') ? 'wipes' : sku.includes('xxxl') ? 'XXXL' : sku.includes('xxl') ? 'XXL' : sku.includes('xl') ? 'XL' : sku.includes('l-') ? 'L' : sku.includes('m-') ? 'M' : 'S'} (${angle}).webp`;
const bilanPhoto = (size: 3 | 4, angle = 1) =>
  `/images/bilan/size-${size}/Size ${size} (${angle}).webp`;

export const SEED_BRANDS: BrandData[] = [
  {
    _id: 'brand-nuna-diapers',
    name: 'Nuna Diapers',
    slug: { current: 'nuna-diapers' },
    tagline: 'Dry through the night. Happy in the morning.',
    category: 'baby-care',
    primaryColor: '#2563EB',
    accentColor: '#1D4ED8',
    lightBg: '#EFF6FF',
    borderClass: 'border-blue-200',
    badge: '12-Hour Leak Protection',
    targetAudience: 'Mothers aged 22–35 looking for superior overnight comfort & affordability',
    description:
      'Nuna Diapers deliver premium 12-hour leak protection at a price Kenyan families can comfortably afford. Engineered with breathable microporous layers, high-absorption Japanese polymer cores, and 360-degree elastic stretch waistbands, Nuna keeps your baby dry, rash-free, and happy all day and night.',
    keyBenefits: [
      '12-Hour Ultra-Dry Core for uninterrupted overnight sleep',
      'Ultra-soft, breathable microporous top sheet that prevents diaper rash',
      'Double elastic leak guards & 360° flexible stretch waistband',
      'Intelligent wetness indicator strip that changes color when it is time to change',
      'Unbeatable Kenyan value—premium performance competing directly with multinational brands'
    ],
    heroImage: nunaPhoto('nuna-s-1-2'),
    productImages: [
      nunaPhoto('nuna-s-1-2'),
      nunaPhoto('nuna-m-3'),
      nunaPhoto('nuna-xl-5')
    ],
    productLine: [
      {
        productName: 'Nuna Premium Baby Diapers - New Stage 1-2 (S)',
        productImage: nunaPhoto('nuna-s-1-2'),
        productDescription: 'Soft, dependable protection for little ones in the New Stage 1-2 range.',
        productBenefits: ['Soft, breathable comfort', 'Absorbent core', 'Flexible fit'],
        productSize: 'Stage New 1-2 (S), up to 8 kg, 38 count'
      },
      {
        productName: 'Nuna Premium Baby Diapers - New Stage 1-2 (S) Value Pack',
        productImage: nunaPhoto('nuna-s-1-2b'),
        productDescription: 'The same gentle New Stage 1-2 protection in a larger pack.',
        productBenefits: ['Soft, breathable comfort', 'Absorbent core', 'Flexible fit'],
        productSize: 'Stage New 1-2 (S), up to 8 kg, 68 count'
      },
      {
        productName: 'Nuna Premium Baby Diapers - Stage 3 (M)',
        productImage: nunaPhoto('nuna-m-3'),
        productDescription: 'Comfortable everyday protection for babies progressing through Stage 3.',
        productBenefits: ['Soft, breathable comfort', 'Absorbent core', 'Flexible fit'],
        productSize: 'Stage 3 (M)'
      },
      {
        productName: 'Nuna Premium Baby Diapers - Stage 3 (M) Pack Variant B',
        productImage: nunaPhoto('nuna-m-3b'),
        productDescription: 'Stage 3 protection in the supplied B pack variant.',
        productBenefits: ['Soft, breathable comfort', 'Absorbent core', 'Flexible fit'],
        productSize: 'Stage 3 (M)'
      },
      {
        productName: 'Nuna Premium Baby Diapers - Stage 3 (M) Pack Variant C',
        productImage: nunaPhoto('nuna-m-3c'),
        productDescription: 'Stage 3 protection in the supplied C pack variant.',
        productBenefits: ['Soft, breathable comfort', 'Absorbent core', 'Flexible fit'],
        productSize: 'Stage 3 (M)'
      },
      {
        productName: 'Nuna Premium Baby Diapers - Stage 4 (L)',
        productImage: nunaPhoto('nuna-l-4'),
        productDescription: 'Reliable, comfortable coverage for active little ones in Stage 4.',
        productBenefits: ['Soft, breathable comfort', 'Absorbent core', 'Flexible fit'],
        productSize: 'Stage 4 (L)'
      },
      {
        productName: 'Nuna Premium Baby Diapers - Stage 4 (L) Pack Variant B',
        productImage: nunaPhoto('nuna-l-4b'),
        productDescription: 'Stage 4 protection in the supplied B pack variant.',
        productBenefits: ['Soft, breathable comfort', 'Absorbent core', 'Flexible fit'],
        productSize: 'Stage 4 (L)'
      },
      {
        productName: 'Nuna Premium Baby Diapers - Stage 4 (L) Pack Variant C',
        productImage: nunaPhoto('nuna-l-4c'),
        productDescription: 'Stage 4 protection in the supplied C pack variant.',
        productBenefits: ['Soft, breathable comfort', 'Absorbent core', 'Flexible fit'],
        productSize: 'Stage 4 (L)'
      },
      {
        productName: 'Nuna Premium Baby Diapers - Stage 4 (L) 20 Count',
        productImage: nunaPhoto('nuna-l-20'),
        productDescription: 'Convenient Stage 4 pack for dependable everyday protection.',
        productBenefits: ['Soft, breathable comfort', 'Absorbent core', 'Flexible fit'],
        productSize: 'Stage 4 (L), 20 count'
      },
      {
        productName: 'Nuna Premium Baby Diapers - Stage 5 (XL)',
        productImage: nunaPhoto('nuna-xl-5'),
        productDescription: 'Comfortable protection designed for the Stage 5 fit.',
        productBenefits: ['Soft, breathable comfort', 'Absorbent core', 'Flexible fit'],
        productSize: 'Stage 5 (XL)'
      },
      {
        productName: 'Nuna Premium Baby Diapers - Stage 5 (XL) Pack Variant B',
        productImage: nunaPhoto('nuna-xl-5b'),
        productDescription: 'Stage 5 protection in the supplied B pack variant.',
        productBenefits: ['Soft, breathable comfort', 'Absorbent core', 'Flexible fit'],
        productSize: 'Stage 5 (XL)'
      },
      {
        productName: 'Nuna Premium Baby Diapers - Stage 5 (XL) Pack Variant C',
        productImage: nunaPhoto('nuna-xl-5c'),
        productDescription: 'Stage 5 protection in the supplied C pack variant.',
        productBenefits: ['Soft, breathable comfort', 'Absorbent core', 'Flexible fit'],
        productSize: 'Stage 5 (XL)'
      },
      {
        productName: 'Nuna Adult Diaper - XL 20 Count',
        productImage: nunaPhoto('nuna-xl-20'),
        productDescription: 'Absorbent adult diaper protection in an XL convenience pack.',
        productBenefits: ['Absorbent core', 'Comfortable fit', 'Secure protection'],
        productSize: 'XL, 20 count'
      },
      {
        productName: 'Nuna Premium Baby Diapers - Stage 6 (XXL)',
        productImage: nunaPhoto('nuna-xxl-6'),
        productDescription: 'Comfortable protection for children progressing to Stage 6.',
        productBenefits: ['Soft, breathable comfort', 'Absorbent core', 'Flexible fit'],
        productSize: 'Stage 6 (XXL)'
      },
      {
        productName: 'Nuna Premium Baby Diapers - Stage 7 (XXXL)',
        productImage: nunaPhoto('nuna-xxxl-7'),
        productDescription: 'Comfortable protection for children progressing to Stage 7.',
        productBenefits: ['Soft, breathable comfort', 'Absorbent core', 'Flexible fit'],
        productSize: 'Stage 7 (XXXL)'
      },
      {
        productName: 'Nuna Premium Baby Wipes',
        productImage: nunaPhoto('nuna-wipes'),
        productDescription: 'Gentle wipes for quick, everyday baby care.',
        productBenefits: ['Soft touch', 'Everyday convenience', 'Easy to carry'],
        productSize: '15 × 20 cm'
      }
    ],
    usageInstructions:
      'Open the diaper flat with the fastening tabs at the back underneath your baby. Bring the front section up between your baby’s legs. Fasten the side tabs securely onto the front landing strip. Ensure the inner elastic leg ruffles are flared outward to prevent side leakage.',
    certifications: [
      'KEBS Quality Standardization Mark (KS EAS 96)',
      'Dermatologist Tested & Approved',
      '100% Elemental Chlorine-Free & Latex-Free'
    ],
    competitorContext: 'Engineered to outperform imported brands like Pampers and Huggies at 30% greater value for Kenyan parents.',
    featured: true,
    order: 1
  },
  {
    _id: 'brand-nunalac',
    name: 'Nunalac',
    slug: { current: 'nunalac' },
    tagline: 'Every spoonful builds them up.',
    category: 'infant-nutrition',
    primaryColor: '#EA580C',
    accentColor: '#C2410C',
    lightBg: '#FFF7ED',
    borderClass: 'border-orange-200',
    badge: 'Iron & Vitamin Fortified',
    targetAudience: 'Mothers with babies transitioning to solid weaning foods (6+ months)',
    description:
      'Nunalac infant cereal is fortified with bioavailable iron, zinc, calcium, and essential vitamins (A, C, D, and B-complex) to promote robust physical growth and cognitive brain development. With a naturally sweet taste babies love and a smooth texture gentle on tiny stomachs, Nunalac is the trusted everyday weaning meal.',
    keyBenefits: [
      'Fortified with Iron & Zinc for healthy cognitive and brain development',
      'Rich in Calcium and Vitamin D for strong bone and teeth formation',
      'Smooth, creamy texture formulated for easy digestion and zero constipation',
      'Quick 2-minute preparation with warm clean water or milk',
      'Pure Kenyan grain formulation with no artificial preservatives, colorings, or sweeteners'
    ],
    heroImage: '/images/nunalac/Formula-1.webp',
    productImages: [
      '/images/nunalac/Formula-1.webp',
      '/images/nunalac/Formula-2.webp',
      '/images/nunalac/Wheat-with-milk.webp'
    ],
    productLine: [
      {
        productName: 'Nunalac+ Infant Formula - Stage 1',
        productImage: '/images/nunalac/Formula-1.webp',
        productDescription: 'Milk-based infant formula for the first stage of feeding.',
        productBenefits: ['Milk-based powder', 'Stage 1 formula', '400 g tin'],
        productSize: 'Stage 1, 0-6 months, 400 g'
      },
      {
        productName: 'Nunalac+ Follow-Up Formula - Stage 2',
        productImage: '/images/nunalac/Formula-2.webp',
        productDescription: 'Milk-based follow-up formula for the next stage of feeding.',
        productBenefits: ['Milk-based powder', 'Stage 2 formula', '400 g tin'],
        productSize: 'Stage 2, 6-12 months, 400 g'
      },
      {
        productName: 'Nuna Cereal+ Premium Rice & Milk',
        productImage: '/images/nunalac/Rice-milk.webp',
        productDescription: 'A smooth rice and milk cereal for babies beginning their cereal journey.',
        productBenefits: ['Easy to digest', 'Rice and milk', '6+ months'],
        productSize: '6+ months, 350 g'
      },
      {
        productName: 'Nuna Cereal+ Premium Wheat, Milk & Dates',
        productImage: '/images/nunalac/Wheat-milk-dates.webp',
        productDescription: 'A creamy wheat and milk cereal blended with dates.',
        productBenefits: ['Easy to digest', 'Wheat, milk and dates', '6+ months'],
        productSize: '6+ months, 350 g'
      },
      {
        productName: 'Nuna Cereal+ Premium Wheat, Milk & Honey',
        productImage: '/images/nunalac/Wheat-milk-honey.webp',
        productDescription: 'A creamy wheat and milk cereal blended with honey.',
        productBenefits: ['Easy to digest', 'Wheat, milk and honey', '6+ months'],
        productSize: '6+ months, 350 g'
      },
      {
        productName: 'Nuna Cereal+ Premium Wheat with Milk',
        productImage: '/images/nunalac/Wheat-with-milk.webp',
        productDescription: 'A smooth, easy-to-digest wheat and milk cereal for little ones.',
        productBenefits: ['Easy to digest', 'Wheat with milk', '6+ months'],
        productSize: '6+ months, 350 g'
      }
    ],
    usageInstructions:
      'Boil fresh drinking water for 5 minutes and allow it to cool to lukewarm (approx. 40°C). Pour 150ml of water or clean prepared milk into a sterilized feeding bowl. Add 5 level tablespoons of Nunalac cereal. Stir continuously until smooth and creamy. Feed baby immediately using a clean spoon.',
    certifications: [
      'KEBS Certified Infant Food Fortification (KS EAS 72)',
      'HACCP & GMP Certified Food Safety Facility',
      'Kenyan Ministry of Health Nutrition Standards Compliant'
    ],
    competitorContext: 'Offers equivalent or superior micronutrient density to Cerelac at an accessible price point for every Kenyan family.',
    featured: true,
    order: 2
  },
  {
    _id: 'brand-bilan',
    name: 'Bilan',
    slug: { current: 'bilan' },
    tagline: 'Confidence for every day.',
    category: 'feminine-hygiene',
    primaryColor: '#BE185D',
    accentColor: '#9D174D',
    lightBg: '#FDF2F8',
    borderClass: 'border-pink-200',
    badge: 'Superior Absorbency & Comfort',
    targetAudience: 'Kenyan women, students, and professionals aged 18–40',
    description:
      'Bilan sanitary towels and personal care products are engineered for maximum absorbency, discreet thinness, and all-day protection. Designed by understanding the active lives of Kenyan women, Bilan provides dependable leak barriers, breathable cotton softness, and complete confidence during every day of your period.',
    keyBenefits: [
      'Advanced Super Absorbent Polymer (SAP) core locks fluid in seconds',
      'Cottony-soft top sheet prevents chafing, moisture buildup, and irritation',
      'Wide flexible wings and 3D leak-guard channels prevent side stains',
      'Discreet, ultra-slim ergonomic silhouette invisible under clothes',
      'Reliable, dignity-first personal care priced for consistent everyday access'
    ],
    heroImage: bilanPhoto(4),
    productImages: [
      bilanPhoto(3),
      bilanPhoto(4, 1),
      bilanPhoto(4, 2)
    ],
    productLine: [
      {
        productName: 'Bilan Ultra Thin - Size 3',
        productImage: bilanPhoto(3),
        productDescription: 'Ultra-thin sanitary protection in the Size 3 pack.',
        productBenefits: ['Ultra-thin profile', 'Comfortable protection', 'Everyday confidence'],
        productSize: 'Size 3'
      },
      {
        productName: 'Bilan Ultra Thin - Size 4',
        productImage: bilanPhoto(4),
        productDescription: 'Ultra-thin sanitary protection in the Size 4 pack.',
        productBenefits: ['Ultra-thin profile', 'Comfortable protection', 'Everyday confidence'],
        productSize: 'Size 4, 8+2 pads'
      }
    ],
    usageInstructions:
      'Peel off the central release backing paper and press the adhesive side firmly into the crotch of your underwear. Peel the wing papers and wrap the wings snugly around the underside of your underwear. For best hygiene, change every 4 to 6 hours.',
    certifications: [
      'KEBS Certified Sanitary Protection Standards (KS EAS 96)',
      'Dermatologically Tested on Sensitive Skin',
      'Hypoallergenic & Fragrance-Free Formula'
    ],
    competitorContext: 'Premium protection and softness comparable to Always, priced to ensure no woman ever compromises on menstrual health.',
    featured: true,
    order: 3
  },
  {
    _id: 'brand-sofresh-soclean',
    name: 'SoFresh SoClean',
    slug: { current: 'sofresh-soclean' },
    tagline: 'A cleaner home for less.',
    category: 'home-cleaning',
    primaryColor: '#16A34A',
    accentColor: '#15803D',
    lightBg: '#F0FDF4',
    borderClass: 'border-green-200',
    badge: 'Tough on Grease, Fair on Price',
    targetAudience: 'Kenyan households, caterers, institutions, and cleaning professionals',
    description:
      'SoFresh SoClean delivers high-potency cleaning power that cuts through tough grease, dirt, and stains without the expensive price tag. Formulated with biodegradable surfactants and uplifting citrus and floral fragrances, our cleaning range keeps Kenyan homes sparkling clean, hygienic, and fresh.',
    keyBenefits: [
      'Heavy-duty degreasing formula that instantly dissolves dried oils and burnt food',
      'Kills 99.9% of common household germs, bacteria, and viruses',
      'Concentrated long-lasting formulation—a little goes a very long way',
      'Gentle on hands with added glycerin skin moisturizers',
      'Cost-effective household essentials packaged in convenient economy sizes'
    ],
    heroImage: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80',
    productLine: [
      {
        productName: 'SoFresh Lemon Sparkle Dishwashing Liquid',
        productDescription: 'Super concentrated dish detergent with real lemon zest extract for spotless pots and plates.',
        productBenefits: ['Instant grease cutter', 'Rich long-lasting foam', 'Gentle on hands with glycerin'],
        productSize: '500ml Bottle / 750ml Squeeze / 5L Commercial Jerrycan'
      },
      {
        productName: 'SoFresh Pine Disinfectant Floor & Tile Cleaner',
        productDescription: 'Antibacterial multi-surface cleaner that leaves tiles gleaming and rooms smelling fresh.',
        productBenefits: ['Kills 99.9% germs', 'Quick-dry streak-free formula', 'Long-lasting forest pine aroma'],
        productSize: '1L Bottle / 5L Jerrycan'
      },
      {
        productName: 'SoFresh Power Thick Bleach & Toilet Cleaner',
        productDescription: 'Thick clinging bleach formula that removes stains, limescale, and toilet bowl grime.',
        productBenefits: ['Thick formula clings to slopes', 'Deep disinfecting bleach action', 'Whitens and sanitizes'],
        productSize: '750ml Angled Neck / 5L Jerrycan'
      },
      {
        productName: 'SoFresh Floral Breeze Fabric Softener',
        productDescription: 'Conditioning laundry rinse that softens clothes and locks in fresh spring floral perfume.',
        productBenefits: ['Reduces static and creases', 'Easy ironing glide', 'Delightful 7-day fragrance hold'],
        productSize: '1L Bottle / 2L Value Bottle'
      }
    ],
    usageInstructions:
      'For dishwashing, dilute one teaspoon in a bowl of warm water or apply a few drops directly to a damp sponge. For floor and surface cleaning, add 2 capfuls to a bucket of water (approx. 5 liters) and mop thoroughly. For stubborn toilet stains, apply thick bleach under the rim, leave for 15 minutes, brush and flush.',
    certifications: [
      'KEBS Quality Household Detergent Standard (KS 100)',
      'Eco-Friendly Biodegradable Surfactants',
      'ISO 9001 Quality Managed Manufacturing Facility'
    ],
    competitorContext: 'Delivers the cleaning punch of Sunlight and Vim at everyday pocket-friendly pricing for Kenyan families.',
    featured: true,
    order: 4
  }
].filter((brand) => brand._id !== 'brand-sofresh-soclean');

export const SEED_STOCKISTS: StockistData[] = [
  {
    _id: 'stockist-1',
    name: 'Quickmart Supermarket - CBD Pioneer Branch',
    type: 'supermarket',
    location: 'Nairobi CBD',
    region: 'Nairobi',
    address: 'Pioneer Building, Moi Avenue, Nairobi',
    phone: '+254 722 000111',
    brandsStocked: ['Nuna Diapers', 'Nunalac', 'Bilan', 'SoFresh SoClean'],
    featured: true
  },
  {
    _id: 'stockist-2',
    name: 'Eastleigh Central Baby & Hygiene Mart',
    type: 'baby-shop',
    location: 'Eastleigh 1st Avenue',
    region: 'Nairobi',
    address: 'Garissa Lodge Mall, Ground Floor Shop G12, Eastleigh, Nairobi',
    phone: '+254 722 750766',
    brandsStocked: ['Nuna Diapers', 'Nunalac', 'Bilan'],
    featured: true
  },
  {
    _id: 'stockist-3',
    name: 'Goodlife Pharmacy - Westlands Square',
    type: 'pharmacy',
    location: 'Westlands',
    region: 'Nairobi',
    address: 'Westlands Square, Mpaka Road, Nairobi',
    phone: '+254 700 123456',
    brandsStocked: ['Nuna Diapers', 'Nunalac', 'Bilan'],
    featured: true
  },
  {
    _id: 'stockist-4',
    name: 'Naivas Supermarket - Mombasa Digo Road',
    type: 'supermarket',
    location: 'Mombasa Island',
    region: 'Coast / Mombasa',
    address: 'Digo Road opposite Central Post Office, Mombasa',
    phone: '+254 711 234567',
    brandsStocked: ['Nuna Diapers', 'Nunalac', 'Bilan', 'SoFresh SoClean'],
    featured: true
  },
  {
    _id: 'stockist-5',
    name: 'Nyali Family Chemist & Baby Store',
    type: 'pharmacy',
    location: 'Nyali, Mombasa',
    region: 'Coast / Mombasa',
    address: 'Links Road, Next to City Mall, Nyali',
    phone: '+254 722 345678',
    brandsStocked: ['Nuna Diapers', 'Nunalac', 'Bilan'],
    featured: false
  },
  {
    _id: 'stockist-6',
    name: 'Gilani’s Supermarket & Wholesalers',
    type: 'wholesaler',
    location: 'Nakuru Town',
    region: 'Rift Valley',
    address: 'Club Road, Nakuru CBD',
    phone: '+254 733 456789',
    brandsStocked: ['Nuna Diapers', 'Nunalac', 'Bilan', 'SoFresh SoClean'],
    featured: true
  },
  {
    _id: 'stockist-7',
    name: 'Eldoret Wholesale Distributors Ltd',
    type: 'wholesaler',
    location: 'Eldoret CBD',
    region: 'Rift Valley',
    address: 'Uganda Road, Near Central Market, Eldoret',
    phone: '+254 720 567890',
    brandsStocked: ['Nuna Diapers', 'Nunalac', 'Bilan', 'SoFresh SoClean'],
    featured: false
  },
  {
    _id: 'stockist-8',
    name: 'Khetias Supermarket - Kisumu Mega',
    type: 'supermarket',
    location: 'Kisumu CBD',
    region: 'Western / Nyanza',
    address: 'Oginga Odinga Street, Kisumu',
    phone: '+254 721 678901',
    brandsStocked: ['Nuna Diapers', 'Nunalac', 'Bilan', 'SoFresh SoClean'],
    featured: true
  },
  {
    _id: 'stockist-9',
    name: 'Thika Greens Pharmacy & Care Shop',
    type: 'pharmacy',
    location: 'Thika Town',
    region: 'Central',
    address: 'Commercial Street, Thika CBD',
    phone: '+254 722 789012',
    brandsStocked: ['Nuna Diapers', 'Nunalac', 'Bilan'],
    featured: false
  },
  {
    _id: 'stockist-10',
    name: 'Mama Ngina Wholesalers',
    type: 'wholesaler',
    location: 'Machakos Town',
    region: 'Central',
    address: 'Machakos CBD Market Road',
    phone: '+254 724 890123',
    brandsStocked: ['Nuna Diapers', 'Nunalac', 'Bilan', 'SoFresh SoClean'],
    featured: false
  }
];

export const SEED_TESTIMONIALS: TestimonialData[] = [
  {
    _id: 'test-1',
    customerName: 'Faith Wanjiku',
    customerLocation: 'Nairobi (Ruaka)',
    brandName: 'Nuna Diapers',
    quote:
      'I was spending too much on imported diapers until my friend introduced me to Nuna. My 7-month-old baby girl sleeps through the entire night without a single leak or diaper rash. As a Kenyan mother, I am so proud of this quality!',
    rating: 5,
    customerPhoto: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&q=80',
    approved: true,
    dateReceived: '2026-07-14'
  },
  {
    _id: 'test-2',
    customerName: 'Amina Hassan',
    customerLocation: 'Mombasa (Nyali)',
    brandName: 'Nunalac',
    quote:
      'Weaning my twin boys was stressful until we tried Nunalac Rice & Mixed Fruits. They genuinely finish every spoonful without fuss. Knowing it is fortified with iron and vitamins gives me total peace of mind.',
    rating: 5,
    customerPhoto: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80',
    approved: true,
    dateReceived: '2026-07-28'
  },
  {
    _id: 'test-3',
    customerName: 'Brenda Chebet',
    customerLocation: 'Nakuru Town',
    brandName: 'Bilan',
    quote:
      'Bilan pads give me total security during long working shifts. They are ultra-slim, soft, and never cause itching like other brands. The affordability without sacrificing comfort is unmatched.',
    rating: 5,
    customerPhoto: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=400&q=80',
    approved: true,
    dateReceived: '2026-08-05'
  },
  {
    _id: 'test-4',
    customerName: 'Peter Kamau (Retail Wholesaler)',
    customerLocation: 'Eastleigh, Nairobi',
    brandName: 'Dextron Enterprise',
    quote:
      'Dextron has been our most dependable FMCG partner this year. Nuna Diapers and SoFresh dishwash fly off the shelves quickly. Their delivery turnaround and distributor profit margins are top tier.',
    rating: 5,
    approved: true,
    dateReceived: '2026-08-18'
  }
];

export const SEED_FAQS: FAQData[] = [
  {
    _id: 'faq-1',
    question: 'Where can I purchase Dextron products across Kenya?',
    answer:
      'Our products are widely available at major supermarkets (Naivas, Quickmart, Khetias, Gilanis), neighborhood baby shops, and licensed pharmacies throughout Nairobi, Mombasa, Nakuru, Kisumu, Eldoret, and other regional centers. You can also order directly via our WhatsApp line (+254 722 750766), and our team will connect you immediately to your nearest stockist or dispatch direct delivery.',
    category: 'general',
    order: 1
  },
  {
    _id: 'faq-2',
    question: 'Are Dextron products certified by the Kenya Bureau of Standards (KEBS)?',
    answer:
      'Yes, 100%. Every single product line manufactured and distributed by Dextron Enterprise—including Nuna Diapers (KS EAS 96), Nunalac Infant Cereal (KS EAS 72), Bilan Sanitary Towels, and SoFresh Cleaning Essentials—fully complies with KEBS standardization marks and stringent safety regulations.',
    category: 'general',
    order: 2
  },
  {
    _id: 'faq-3',
    question: 'How do Nuna Diapers prevent diaper rash and nighttime leaks?',
    answer:
      'Nuna Diapers utilize a cutting-edge Japanese Super Absorbent Polymer (SAP) core paired with a microporous, hypoallergenic breathable top sheet. This rapidly channels liquids away from your baby’s delicate skin within seconds and locks moisture in for up to 12 continuous hours, keeping the surface completely dry throughout the night.',
    category: 'nuna-diapers',
    order: 3
  },
  {
    _id: 'faq-4',
    question: 'At what age can I introduce Nunalac cereal to my baby?',
    answer:
      'Nunalac is specially formulated for infants aged 6 months and older who are beginning their solid weaning transition. Nunalac is fortified with iron for brain development and essential vitamins to nourish healthy growth. For babies under 6 months, exclusive breastfeeding is always recommended.',
    category: 'nunalac',
    order: 4
  },
  {
    _id: 'faq-5',
    question: 'How do I become an authorized Dextron wholesale stockist or distributor?',
    answer:
      'We welcome retail stockists, supermarket chains, pharmacies, and regional wholesalers! We offer competitive wholesale trade discounts, protected distribution zones, marketing collaterals, and reliable weekly restocking. Visit our "Become a Distributor" page or send an inquiry directly via WhatsApp to +254 722 750766.',
    category: 'distribution-wholesale',
    order: 5
  },
  {
    _id: 'faq-6',
    question: 'Do you offer doorstep or business deliveries for bulk orders?',
    answer:
      'Yes! We arrange swift delivery across Nairobi and countrywide dispatch via reputable courier partners (Fargo Courier, Wells Fargo, G4S, and regional parcel matatus) for wholesale and retail carton orders.',
    category: 'shipping-delivery',
    order: 6
  },
  {
    _id: 'faq-7',
    question: 'What makes Bilan sanitary pads suitable for sensitive skin?',
    answer:
      'Bilan pads feature an ultra-soft non-woven cotton cover that is completely free of harsh artificial perfumes, chlorine bleaches, and synthetic dyes. The breathable bottom barrier allows air circulation while preventing any moisture or odor from escaping.',
    category: 'bilan',
    order: 7
  },
  {
    _id: 'faq-8',
    question: 'Can SoFresh SoClean dishwashing liquid be used on baby feeding bottles?',
    answer:
      'Yes! SoFresh dishwashing liquid contains food-grade biodegradable cleaning agents that rinse off cleanly with zero chemical residue. Always rinse thoroughly with clean running water and sterilize feeding bottles as recommended.',
    category: 'sofresh-soclean',
    order: 8
  }
];

export const SEED_SITE_SETTINGS: SiteSettingsData = {
  companyName: 'Dextron Enterprise',
  whatsappNumber: '+254722750766',
  phoneNumber: '+254700546792',
  secondaryPhone: '+254722750766',
  email: 'info@dextron.co.ke',
  physicalAddress: 'Industrial Area / CBD Logistics Hub, Nairobi, Kenya',
  heroHeadline: 'Nurturing Kenyan Families with Quality Care',
  heroSubheadline:
    'Premium baby diapers, fortified infant nutrition, feminine hygiene, and high-performance household cleaning—proudly made for Kenyan families, priced for real life.',
  facebookUrl: 'https://facebook.com/dextronkenya',
  instagramUrl: 'https://instagram.com/dextronkenya',
  tiktokUrl: 'https://tiktok.com/@dextronkenya'
};
