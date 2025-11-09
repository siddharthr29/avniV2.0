/**
 * Partner Organizations Data
 * Logos and URLs for trusted partners
 */

export interface Partner {
  name: string;
  logo: string;
  url: string;
  width: number;
  height: number;
}

export const partners: Partner[] = [
  {
    name: 'Calcutta Kids',
    logo: '/logos/CK-logo-white-text-transparentbg.png',
    url: 'https://www.calcuttakids.org/',
    width: 180,
    height: 80,
  },
  {
    name: 'JSS Bilaspur',
    logo: '/logos/JSS-Logo-new-Hindi-2.webp',
    url: 'https://www.jssbilaspur.org/',
    width: 180,
    height: 80,
  },
  {
    name: 'Arghyam',
    logo: '/logos/ARGHYAM.webp',
    url: 'https://arghyam.org/',
    width: 180,
    height: 80,
  },
  {
    name: 'Goonj',
    logo: '/logos/Goonj-logo-10June20.png',
    url: 'https://goonj.org/',
    width: 180,
    height: 80,
  },
  {
    name: 'Hasiru Dala',
    logo: '/logos/HD-Main-Logo.png',
    url: 'https://hasirudala.in/',
    width: 180,
    height: 80,
  },
];
