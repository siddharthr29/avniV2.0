/**
 * Design System - Typography Tokens
 * Font families, sizes, weights, and line heights
 */

export const typography = {
  // Font Families
  fontFamily: {
    anek: 'var(--font-anek)',
    noto: 'var(--font-noto)',
  },

  // Font Sizes
  fontSize: {
    xs: '12px',
    sm: '14px',
    base: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '32px',
    '4xl': '36px',
    '5xl': '42px',
    '6xl': '64px',
    '7xl': '86px',
  },

  // Font Weights
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },

  // Line Heights
  lineHeight: {
    tight: '1.2',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },
} as const;

export type TypographyToken = typeof typography;
