'use client';

import React from 'react';

interface CodeSnippetProps {
  children: React.ReactNode;
  inline?: boolean;
  className?: string;
}

export default function CodeSnippet({ 
  children, 
  inline = false, 
  className = '' 
}: CodeSnippetProps) {
  if (inline) {
    return (
      <code className={`
        font-mono bg-[#151515] text-[#EAEAEA] border border-[#1F1F1F] 
        rounded-md px-1.5 py-0.5 text-sm
        ${className}
      `}>
        {children}
      </code>
    );
  }

  return (
    <div className={`
      bg-[#0D0D0D] border border-[#1F1F1F] rounded-xl p-4
      font-mono text-sm overflow-x-auto
      scrollbar-thumb-[#2A2A2A] scrollbar-track-[#111111]
      ${className}
    `}>
      <pre className="text-white">{children}</pre>
    </div>
  );
}