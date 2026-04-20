import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export function Button({
  children,
  variant = 'primary',
  onClick,
  className = '',
  type = 'button',
}: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-lg transition-all duration-200 font-medium shadow-sm';

  const variants = {
    primary: 'bg-[#56a927] hover:bg-[#3d7f20] text-white shadow-md hover:shadow-lg',
    secondary: 'bg-[#b5b5b5] hover:bg-gray-400 text-black shadow-md hover:shadow-lg',
    ghost: 'border-2 border-[#56a927] text-[#56a927] hover:bg-[#56a927] hover:text-white',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
