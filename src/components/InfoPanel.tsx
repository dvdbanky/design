'use client';

import React from 'react';
import Button from './Button';

interface InfoPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InfoPanel({ isOpen, onClose }: InfoPanelProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Panel */}
      <div className="relative bg-[#111111] border border-[#1F1F1F] rounded-xl p-8 max-w-2xl mx-4 shadow-2xl">
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-2xl font-bold text-white">Test Information Panel</h2>
          <button
            onClick={onClose}
            className="text-[#C7C7C7] hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Design System Variables</h3>
            <div className="bg-[#0D0D0D] border border-[#1F1F1F] rounded-lg p-4 font-mono text-sm">
              <div className="text-[#C7C7C7] mb-2">CSS Variables:</div>
              <div className="text-[#7A7A7A] space-y-1">
                <div>--background: oklch(0.2178 0 0)</div>
                <div>--foreground: oklch(0.9067 0 0)</div>
                <div>--primary: oklch(0.6083 0.2090 27.0276)</div>
                <div>--secondary: oklch(0.6423 0.1467 133.0145)</div>
                <div>--accent: oklch(0.7482 0.1235 244.7492)</div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Color Palette</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-[#111111] border border-[#1F1F1F] rounded-lg p-3">
                <div className="w-full h-8 bg-[#6083] rounded mb-2"></div>
                <div className="text-xs text-[#C7C7C7]">Primary</div>
              </div>
              <div className="bg-[#111111] border border-[#1F1F1F] rounded-lg p-3">
                <div className="w-full h-8 bg-[#6423] rounded mb-2"></div>
                <div className="text-xs text-[#C7C7C7]">Secondary</div>
              </div>
              <div className="bg-[#111111] border border-[#1F1F1F] rounded-lg p-3">
                <div className="w-full h-8 bg-[#7482] rounded mb-2"></div>
                <div className="text-xs text-[#C7C7C7]">Accent</div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Typography</h3>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-white">Heading 2xl</div>
              <div className="text-xl font-semibold text-white">Heading xl</div>
              <div className="text-lg text-[#C7C7C7]">Body large</div>
              <div className="text-sm text-[#9B9B9B]">Body small</div>
              <div className="text-xs font-mono text-[#7A7A7A]">Code snippet</div>
            </div>
          </div>
          
          <div className="flex gap-4 pt-4">
            <Button variant="solid" size="md" onClick={onClose}>
              Close Panel
            </Button>
            <Button variant="ghost" size="md" onClick={onClose}>
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
