'use client';

import React from 'react';

interface CardProps {
  children: React.ReactNode;
  hover?: boolean;
  selected?: boolean;
  disabled?: boolean;
  className?: string;
}

export default function Card({ 
  children, 
  hover = false, 
  selected = false, 
  disabled = false,
  className = ''
}: CardProps) {
  const baseClasses = `
    bg-[#111111] text-white border border-[#1F1F1F] rounded-xl p-6
    shadow-[0px_1px_0px_rgba(255,255,255,0.02),0px_0px_0px_1px_rgba(255,255,255,0.03)_inset]
    transition-all duration-160 ease-out
  `;
  
  const stateClasses = selected 
    ? 'bg-[#262626] border-[#3A3A3A]'
    : hover 
    ? 'hover:bg-[#141414] hover:border-[#2A2A2A] hover:shadow-[0_8px_24px_rgba(0,0,0,0.35),0_2px_8px_rgba(0,0,0,0.25)]'
    : '';
    
  const disabledClasses = disabled ? 'opacity-60' : '';

  return (
    <div className={`${baseClasses} ${stateClasses} ${disabledClasses} ${className}`}>
      {children}
    </div>
  );
}