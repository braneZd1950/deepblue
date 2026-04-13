import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'accent' | 'ghost' | 'outline';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: Variant;
};

export function Button({ children, variant = 'primary', className = '', type = 'button', ...rest }: Props) {
  const v = `db-btn db-btn--${variant}`;
  return (
    <button type={type} className={`${v} ${className}`.trim()} {...rest}>
      {children}
    </button>
  );
}
