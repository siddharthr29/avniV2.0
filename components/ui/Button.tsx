/**
 * Reusable Button Component
 * Supports primary, secondary, and outline variants
 */

import Link from 'next/link';
import { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  children: ReactNode;
  fullWidth?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-[#419372] text-white hover:bg-[#357a5e] border-2 border-[#419372]',
  secondary: 'bg-white text-[#0b2540] hover:bg-gray-50 border-2 border-gray-200',
  outline: 'bg-transparent text-[#419372] border-2 border-[#419372] hover:bg-[#419372] hover:text-white',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-[16px] py-[8px] text-[12px]',
  md: 'px-[24px] py-[12px] text-[14px]',
  lg: 'px-[32px] py-[16px] text-[16px]',
};

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  children,
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-[20px] font-anek font-medium transition-all duration-300';
  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${fullWidth ? 'w-full' : ''} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      {children}
    </button>
  );
}
