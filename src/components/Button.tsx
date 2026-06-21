import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', onClick, className = '' }) => {
  if (variant === 'secondary') {
    return (
      <button 
        onClick={onClick}
        className={`px-6 py-3 rounded-xl font-medium bg-dark-card border border-gray-700 hover:border-gray-500 transition-all duration-300 ${className}`}
      >
        {children}
      </button>
    );
  }

  return (
    <button 
      onClick={onClick}
      className={`px-8 py-4 rounded-xl font-bold bg-france-blue text-white shadow-glow-blue hover:shadow-glow-hover hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 ${className}`}
    >
      {children}
    </button>
  );
};