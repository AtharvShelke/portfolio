import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  iconPrefix?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ iconPrefix, className = '', disabled, ...props }, ref) => {
    return (
      <div className="relative flex items-center w-full">
        {iconPrefix && (
          <div className="absolute left-3.5 text-[var(--text-tertiary)] pointer-events-none flex items-center justify-center">
            {iconPrefix}
          </div>
        )}
        <input
          ref={ref}
          disabled={disabled}
          className={`h-11 w-full rounded-xl bg-[var(--bg-elevation-1)] border border-[var(--border-default)] ${
            iconPrefix ? 'pl-10' : 'px-4'
          } pr-4 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] transition-all duration-200 focus:outline-none focus:border-[#FF9545] focus:ring-1 focus:ring-[#FF9545] disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = 'Input';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = '', disabled, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        disabled={disabled}
        className={`w-full min-h-[120px] rounded-xl bg-[var(--bg-elevation-1)] border border-[var(--border-default)] p-4 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] transition-all duration-200 focus:outline-none focus:border-[#FF9545] focus:ring-1 focus:ring-[#FF9545] disabled:cursor-not-allowed disabled:opacity-50 resize-y ${className}`}
        {...props}
      />
    );
  }
);

Textarea.displayName = 'Textarea';
