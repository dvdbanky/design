'use client';

import React from 'react';

interface TileGridItemProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  href?: string;
  className?: string;
}

export default function TileGridItem({ 
  title, 
  description, 
  icon, 
  href = '#',
  className = ''
}: TileGridItemProps) {
  return (
    <a 
      href={href}
      className={`
        block bg-[#111111] border border-[#1F1F1F] rounded-2xl p-6
        shadow-[0px_1px_0px_rgba(255,255,255,0.02),0px_0px_0px_1px_rgba(255,255,255,0.03)_inset]
        hover:bg-[#141414] hover:border-[#2A2A2A] hover:shadow-[0_8px_24px_rgba(0,0,0,0.35),0_2px_8px_rgba(0,0,0,0.25)]
        transition-all duration-160 ease-out
        ${className}
      `}
    >
      {icon && (
        <div className="text-[#D4D4D4] mb-4">
          {icon}
        </div>
      )}
      <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
      <p className="text-[#C7C7C7] text-sm leading-relaxed">{description}</p>
    </a>
  );
}