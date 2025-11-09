/**
 * Impact Stories Data
 * Content for different sector impact stories
 */

export interface ImpactStory {
  title: string;
  description: string;
  image: string;
}

export const sectors = [
  'Education',
  'Healthcare',
  'Water & Sanitation',
  'Waste Management',
  'Social Security',
  'Livelihood',
  'Human Rights',
  'Legal Aid',
  'Sports',
] as const;

export type Sector = (typeof sectors)[number];

export const impactStories: Record<Sector, ImpactStory> = {
  Education: {
    title: 'CLNL - Anganwadis And Schools Building Skills Beyond Classroom',
    description:
      "CLNL works with Anganwadis and schools to nurture children's social, emotional, and cognitive skills. The program focuses on holistic development — helping children learn, grow, and thrive beyond the clas...",
    image: '/images/education_impactstory.png',
  },
  Healthcare: {
    title: 'Coming Soon - Healthcare Impact Story',
    description:
      'Healthcare impact story will be added soon. Stay tuned for inspiring stories of how Avni is transforming healthcare delivery.',
    image: '/images/education_impactstory.png',
  },
  'Water & Sanitation': {
    title: 'Coming Soon - Water & Sanitation Impact Story',
    description: 'Water & Sanitation impact story will be added soon. Stay tuned for inspiring stories.',
    image: '/images/education_impactstory.png',
  },
  'Waste Management': {
    title: 'Coming Soon - Waste Management Impact Story',
    description: 'Waste Management impact story will be added soon. Stay tuned for inspiring stories.',
    image: '/images/education_impactstory.png',
  },
  'Social Security': {
    title: 'Coming Soon - Social Security Impact Story',
    description: 'Social Security impact story will be added soon. Stay tuned for inspiring stories.',
    image: '/images/education_impactstory.png',
  },
  Livelihood: {
    title: 'Coming Soon - Livelihood Impact Story',
    description: 'Livelihood impact story will be added soon. Stay tuned for inspiring stories.',
    image: '/images/education_impactstory.png',
  },
  'Human Rights': {
    title: 'Coming Soon - Human Rights Impact Story',
    description: 'Human Rights impact story will be added soon. Stay tuned for inspiring stories.',
    image: '/images/education_impactstory.png',
  },
  'Legal Aid': {
    title: 'Coming Soon - Legal Aid Impact Story',
    description: 'Legal Aid impact story will be added soon. Stay tuned for inspiring stories.',
    image: '/images/education_impactstory.png',
  },
  Sports: {
    title: 'Coming Soon - Sports Impact Story',
    description: 'Sports impact story will be added soon. Stay tuned for inspiring stories.',
    image: '/images/education_impactstory.png',
  },
};
