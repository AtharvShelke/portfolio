import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'solid' | 'glass' | 'interactive';
  children: React.ReactNode;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ variant = 'solid', children, className = '', ...props }, ref) => {
    const baseStyles = 'rounded-2xl transition-all duration-300 p-6 text-[var(--text-primary)]';

    const variantStyles = {
      solid: 'bg-[var(--surface-card)] border border-[var(--border-default)] shadow-sm',
      glass: 'glass-panel shadow-sm',
      interactive:
        'bg-[var(--bg-elevation-1)] border border-[var(--border-default)] hover:border-[var(--border-hover)] hover:bg-[var(--surface-card)] hover:shadow-[0_0_24px_rgba(242,125,38,0.20)] hover:-translate-y-1',
    };

    return (
      <div
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className = '',
  ...props
}) => (
  <div className={`flex flex-col space-y-1.5 mb-4 ${className}`} {...props}>
    {children}
  </div>
);

export const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  className = '',
  ...props
}) => (
  <h3 className={`text-xl font-bold tracking-tight text-[var(--text-primary)] ${className}`} {...props}>
    {children}
  </h3>
);

export const CardDescription: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  children,
  className = '',
  ...props
}) => (
  <p className={`text-sm text-[var(--text-secondary)] leading-relaxed ${className}`} {...props}>
    {children}
  </p>
);

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className = '',
  ...props
}) => (
  <div className={`${className}`} {...props}>
    {children}
  </div>
);

export const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className = '',
  ...props
}) => (
  <div className={`flex items-center pt-4 border-t border-[var(--border-default)] mt-4 ${className}`} {...props}>
    {children}
  </div>
);
