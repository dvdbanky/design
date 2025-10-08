'use client';

import React from 'react';

interface InputProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
}

export default function Input({ 
  placeholder = '', 
  value, 
  onChange, 
  disabled = false,
  className = ''
}: InputProps) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={`
        w-full bg-[#0E0E0E] text-white placeholder-[#9B9B9B] 
        border border-[#1F1F1F] rounded-lg px-3 py-2.5
        focus:border-[#3A3A3A] focus:ring-2 focus:ring-[#3A3A3A] focus:ring-offset-2 focus:ring-offset-[#0A0A0A]
        hover:border-[#2A2A2A]
        disabled:bg-[#0D0D0D] disabled:text-[#7A7A7A] disabled:border-[#1F1F1F]
        transition-all duration-160 ease-out
        ${className}
      `}
    />
  );
}