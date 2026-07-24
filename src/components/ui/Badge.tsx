import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'blue' | 'violet' | 'success' | 'warning' | 'neutral';
  pulseBeacon?: boolean;
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'primary',
  pulseBeacon = false,
  children,
  className = '',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold tracking-wide transition-all duration-200 select-none';

  const variantStyles = {
    primary: 'bg-[#F27D26]/15 text-[#F27D26] border border-[#F27D26]/35 shadow-[0_0_12px_rgba(242,125,38,0.15)]',
    blue: 'bg-[#38BDF8]/15 text-[#38BDF8] border border-[#38BDF8]/30',
    violet: 'bg-[#A855F7]/15 text-[#A855F7] border border-[#A855F7]/30',
    success: 'bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30',
    warning: 'bg-[#F59E0B]/15 text-[#F59E0B] border border-[#F59E0B]/30',
    neutral: 'bg-white/5 text-[var(--text-secondary)] border border-[var(--border-default)]',
  };

  return (
    <span className={`${baseStyles} ${variantStyles[variant]} ${className}`} {...props}>
      {pulseBeacon && (
        <span className="relative flex h-2 w-2 items-center justify-center">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-75"></span>
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-current"></span>
        </span>
      )}
      {children}
    </span>
  );
};
