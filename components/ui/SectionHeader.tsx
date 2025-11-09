/**
 * Reusable Section Header Component
 * Consistent header styling across sections
 */

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
}

export function SectionHeader({
  label,
  title,
  subtitle,
  align = 'center',
}: SectionHeaderProps) {
  const alignmentClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }[align];

  return (
    <div className={alignmentClass}>
      {label && (
        <p className="font-anek font-medium text-[14px] leading-[20px] text-[#fba47e] uppercase mb-[16px]">
          {label}
        </p>
      )}
      <h2 className="font-anek font-bold text-[42px] md:text-[64px] leading-[38px] md:leading-[64px] text-[#0b2540] mb-[16px]">
        {title}
      </h2>
      {subtitle && (
        <p className="font-noto text-[18px] md:text-[20px] leading-[27px] text-[#000000]">
          {subtitle}
        </p>
      )}
    </div>
  );
}
