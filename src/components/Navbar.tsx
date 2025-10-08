'use client';

import React from 'react';
import Button from './Button';

export default function Navbar() {
  return (
    <nav className="bg-[#0A0A0A] border-b border-[#1A1A1A] h-16 px-4 flex items-center justify-between">
      <div className="flex items-center space-x-8">
        <div className="text-white font-bold text-xl">Next.js</div>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-[#C7C7C7] hover:text-white transition-colors duration-160">
            Docs
          </a>
          <a href="#" className="text-[#C7C7C7] hover:text-white transition-colors duration-160">
            API
          </a>
          <a href="#" className="text-[#C7C7C7] hover:text-white transition-colors duration-160">
            Examples
          </a>
          <a href="#" className="text-[#C7C7C7] hover:text-white transition-colors duration-160">
            Learn
          </a>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="md">
          Sign In
        </Button>
        <Button variant="solid" size="md">
          Get Started
        </Button>
      </div>
    </nav>
  );
}