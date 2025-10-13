'use client';

import React from 'react';
import Button from './Button';

interface NavbarProps {
  language: number;
  onLanguageChange: (lang: number) => void;
  texts?: {
    docs?: string;
    api?: string;
    examples?: string;
    learn?: string;
    signIn?: string;
    getStarted?: string;
  };
}

export default function Navbar({ language, onLanguageChange, texts }: NavbarProps) {
  const languages = [
    { code: 1, label: 'EN', name: 'English' },
    { code: 2, label: 'ES', name: 'Spanish' },
    { code: 3, label: 'RU', name: 'Russian' }
  ];

  return (
    <nav className="bg-[#0A0A0A] border-b border-[#1A1A1A] h-16 px-4 flex items-center justify-between relative z-20">
      <div className="flex items-center space-x-8">
        <div className="text-white font-bold text-xl">Next.js</div>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-[#C7C7C7] hover:text-white transition-colors duration-160">
            {texts?.docs || 'Docs'}
          </a>
          <a href="#" className="text-[#C7C7C7] hover:text-white transition-colors duration-160">
            {texts?.api || 'API'}
          </a>
          <a href="#" className="text-[#C7C7C7] hover:text-white transition-colors duration-160">
            {texts?.examples || 'Examples'}
          </a>
          <a href="#" className="text-[#C7C7C7] hover:text-white transition-colors duration-160">
            {texts?.learn || 'Learn'}
          </a>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden sm:flex items-center gap-4">
          <Button variant="ghost" size="md">
            {texts?.signIn || 'Sign In'}
          </Button>
          <Button variant="solid" size="md">
            {texts?.getStarted || 'Get Started'}
          </Button>
        </div>
        <select
          value={language}
          onChange={(e) => onLanguageChange(Number(e.target.value))}
          className="bg-[#111111] text-white border border-[#1F1F1F] rounded-lg px-3 py-2 text-sm hover:bg-[#141414] hover:border-[#2A2A2A] transition-all duration-160 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#3A29FF] min-w-[140px]"
        >
          {languages.map(lang => (
            <option key={lang.code} value={lang.code} className="bg-[#111111]">
              {lang.label} - {lang.name}
            </option>
          ))}
        </select>
      </div>
    </nav>
  );
}