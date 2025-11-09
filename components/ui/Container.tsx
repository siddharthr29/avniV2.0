/**
 * Responsive Container Component
 * Use this for ALL future pages to ensure consistent responsive behavior
 * 
 * Usage:
 * <Container>Your content</Container>
 * <Container size="sm">Narrow content</Container>
 * <Container size="full">Full width</Container>
 */

import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  className?: string;
}

const sizeClasses = {
  sm: 'max-w-3xl',      // 768px
  md: 'max-w-5xl',      // 1024px
  lg: 'max-w-6xl',      // 1152px
  xl: 'max-w-7xl',      // 1280px
  full: 'max-w-[1440px]', // 1440px (design width)
};

export default function Container({ children, size = 'full', className = '' }: ContainerProps) {
  return (
    <div className={`${sizeClasses[size]} w-full mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 ${className}`}>
      {children}
    </div>
  );
}
