/**
 * Features Data
 * Content for "What Avni Does" section features
 */

export interface Feature {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

export const features: Feature[] = [
  {
    id: 'build-trust',
    title: 'Build Trust With One Source Of Truth',
    description:
      'Give every stakeholder access to real-time, reliable information from a single platform. Avni ensures consistency and transparency so your teams can make decisions with confidence.',
    image: '/images/build-trust.png',
    link: '/features',
  },
  {
    id: 'simplify-data',
    title: 'Simplify Data Collection And Management',
    description:
      'Free your teams from the burden of manual paperwork and scattered spreadsheets. Avni streamlines field data collection so you can focus on what matters most — impact on the ground.',
    image: '/images/simplify-data.png',
    link: '/features',
  },
  {
    id: 'steer-programs',
    title: 'Steer Your Programs With Insight And Agility',
    description:
      'Access accurate, real-time data that helps you adapt and improve your programs continuously. Use feedback from the field to respond faster and serve your communities more effectively.',
    image: '/images/steer-programs.png',
    link: '/features',
  },
];
