/**
 * Testimonials Data
 * Easy to add new testimonials - just add to the array
 */

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  position: string;
  organization: string;
  image?: string; // Optional: path to person's image
  videoThumbnail?: string; // Optional: path to video thumbnail
  type: 'text' | 'video'; // Type of testimonial
  stat?: string; // Optional: impact stat (e.g., "5000+ beneficiaries tracked")
}

export const testimonials: Testimonial[] = [
  {
    id: "maitri",
    quote: "Avni has transformed how we collect and manage field data. The offline-first approach is a game-changer for our remote health workers.",
    name: "Maitri",
    position: "Program Manager",
    organization: "Health NGO",
    image: "/images/testimonials/maitri.webp",
    type: "text",
    stat: "5000+ beneficiaries tracked",
  },
  {
    id: "noah",
    quote: "The ease of use and customization options in Avni allowed us to digitize our entire education program in just 2 weeks.",
    name: "Noah",
    position: "Field Coordinator",
    organization: "Education Initiative",
    image: "/images/testimonials/noah.webp",
    type: "text",
    stat: "200+ schools digitized",
  },
  {
    id: "shobhaben",
    quote: "Even without internet, I can collect data from villages and sync later. Avni makes my work so much easier!",
    name: "Shobhaben",
    position: "Community Health Worker",
    organization: "Rural Health Program",
    image: "/images/testimonials/shobhaben.webp",
    type: "text",
    stat: "1000+ home visits tracked",
  },
];
