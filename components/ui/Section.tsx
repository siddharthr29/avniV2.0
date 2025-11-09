/**
 * Responsive Section Component
 * Provides consistent spacing and background options
 * 
 * Usage:
 * <Section>Content</Section>
 * <Section bg="gray">Content</Section>
 * <Section spacing="lg">Content</Section>
 */

import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  bg?: 'white' | 'gray' | 'dark' | 'primary';
  spacing?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const bgClasses = {
  white: 'bg-white',
  gray: 'bg-[#F5F5F5]',
  dark: 'bg-[#1a1a1a] text-white',
  primary: 'bg-[#fcfcfc]',
};

const spacingClasses = {
  none: '',
  sm: 'py-8 md:py-12',
  md: 'py-12 md:py-16 lg:py-20',
  lg: 'py-16 md:py-20 lg:py-24 2xl:py-28',
  xl: 'py-20 md:py-24 lg:py-28 2xl:py-32',
};

export default function Section({ 
  children, 
  bg = 'white', 
  spacing = 'md',
  className = '' 
}: SectionProps) {
  return (
    <section className={`${bgClasses[bg]} ${spacingClasses[spacing]} ${className}`}>
      {children}
    </section>
  );
}
