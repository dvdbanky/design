'use client';

import React from 'react';

interface ButtonProps {
  variant?: 'solid' | 'ghost' | 'link';
  size?: 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export default function Button({ 
  variant = 'solid', 
  size = 'md', 
  children, 
  onClick, 
  disabled = false,
  className = ''
}: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center font-medium transition-all duration-160 ease-out focus:outline-none focus:ring-2 focus:ring-[#3A3A3A] focus:ring-offset-2 focus:ring-offset-[#0A0A0A]";
  
  const variantClasses = {
    solid: `
      bg-white text-[#0A0A0A] border border-[#2A2A2A] rounded-lg
      hover:bg-[#F5F5F5] hover:border-[#3A3A3A]
      active:bg-[#EAEAEA] active:border-[#3A3A3A]
      disabled:bg-[#1A1A1A] disabled:text-[#7A7A7A] disabled:border-[#1F1F1F]
    `,
    ghost: `
      bg-transparent text-white border border-[#2A2A2A] rounded-lg
      hover:bg-[#151515] hover:border-[#3A3A3A]
      active:bg-[#1A1A1A]
      disabled:text-[#7A7A7A] disabled:border-[#1F1F1F]
    `,
    link: `
      bg-transparent text-[#E5E5E5] border-none p-0
      hover:text-white hover:underline
      active:text-white
      disabled:text-[#7A7A7A]
    `
  };
  
  const sizeClasses = {
    md: "px-4 py-2.5 text-sm",
    lg: "px-5 py-3 text-base"
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}