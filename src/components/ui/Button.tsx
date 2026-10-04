import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'glass' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'default' | 'lg' | 'icon';
  isLoading?: boolean;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'default',
      isLoading = false,
      children,
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center gap-2 rounded-xl text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF9545] disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] cursor-pointer select-none';

    const sizeStyles = {
      sm: 'h-9 px-3.5 text-xs rounded-lg',
      default: 'h-11 px-5 py-2.5 text-sm rounded-xl',
      lg: 'h-13 px-7 text-base rounded-2xl',
      icon: 'h-10 w-10 p-0 rounded-xl',
    };

    const variantStyles = {
      primary:
        'bg-[#F27D26] text-[#050505] font-bold hover:bg-[#FF9545] hover:shadow-[0_0_24px_rgba(242,125,38,0.45)]',
      secondary:
        'bg-[var(--bg-elevation-2)] text-[var(--text-primary)] border border-[var(--border-default)] hover:bg-[var(--surface-hover)] hover:border-[var(--border-hover)]',
      glass:
        'glass-panel text-[var(--text-primary)] hover:bg-[var(--surface-hover)] hover:border-[var(--border-hover)] hover:shadow-[0_0_20px_rgba(242,125,38,0.25)]',
      outline:
        'border border-[var(--border-hover)] text-[#F27D26] hover:bg-[#F27D26]/10 hover:shadow-[0_0_16px_rgba(242,125,38,0.2)]',
      ghost:
        'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-hover)]',
      danger:
        'bg-[#EF4444]/15 border border-[#EF4444]/30 text-[#EF4444] hover:bg-[#EF4444]/25',
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
        {...props}
      >
        {isLoading ? (
          <span className="flex items-center gap-2">
            <svg
              className="animate-spin h-4 w-4 text-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <span>Loading...</span>
          </span>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
