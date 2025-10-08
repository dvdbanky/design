'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Card from '@/components/Card';
import Button from '@/components/Button';
import Input from '@/components/Input';
import CodeSnippet from '@/components/CodeSnippet';
import TileGridItem from '@/components/TileGridItem';
import Aurora from '@/components/Aurora';
import InfoPanel from '@/components/InfoPanel';

export default function Home() {
  const [isInfoPanelOpen, setIsInfoPanelOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white relative">
      <Aurora 
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />
      <div className="relative z-10">
        <Navbar />
      
      {/* Hero Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-extrabold leading-tight tracking-tight mb-6">
              The React Framework for Production
            </h1>
            <p className="text-xl text-[#C7C7C7] leading-relaxed max-w-2xl mx-auto mb-8">
              Next.js gives you the best developer experience with all the features you need for production: 
              hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="solid" size="lg" onClick={() => setIsInfoPanelOpen(true)}>
                Get Started
              </Button>
              <Button variant="ghost" size="lg">
                View Documentation
              </Button>
            </div>
          </div>

          {/* Code Example */}
          <div className="max-w-4xl mx-auto">
            <CodeSnippet>
{`import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}`}
            </CodeSnippet>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">What's in Next.js?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TileGridItem
              title="Zero Config"
              description="Automatic code splitting, filesystem-based routing, and API routes. No configuration needed."
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              }
            />
            <TileGridItem
              title="Image Optimization"
              description="Built-in Image Optimization with automatic WebP/AVIF generation and lazy loading."
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              }
            />
            <TileGridItem
              title="TypeScript Support"
              description="Built-in TypeScript support with zero configuration required."
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              }
            />
            <TileGridItem
              title="Fast Refresh"
              description="Fast, reliable live-editing experience with instant feedback on your changes."
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              }
            />
            <TileGridItem
              title="API Routes"
              description="Create API endpoints with Serverless Functions that scale automatically."
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v11a2 2 0 002 2z" />
                </svg>
              }
            />
            <TileGridItem
              title="Deploy Anywhere"
              description="Deploy to any platform that supports Node.js, or use Vercel for zero-config deployment."
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Get Started in Seconds</h2>
            <p className="text-lg text-[#C7C7C7]">
              Create a new Next.js app with our interactive tutorial or start from scratch.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <h3 className="text-xl font-semibold mb-4">Interactive Tutorial</h3>
              <p className="text-[#C7C7C7] mb-6">
                Learn Next.js by building a real application with step-by-step guidance.
              </p>
              <Button variant="solid" size="md">
                Start Tutorial
              </Button>
            </Card>
            
            <Card>
              <h3 className="text-xl font-semibold mb-4">Create from Scratch</h3>
              <p className="text-[#C7C7C7] mb-6">
                Set up a new Next.js project with your preferred configuration.
              </p>
              <div className="space-y-4">
                <Input placeholder="Enter your project name" />
                <Button variant="ghost" size="md">
                  Create Project
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Test Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Test Content</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <h3 className="text-xl font-semibold mb-4">Test Card 1</h3>
              <p className="text-[#C7C7C7] mb-4">
                This is a test card to demonstrate the design system. It shows how text looks with the secondary color.
              </p>
              <div className="flex gap-2">
                <Button variant="solid" size="md">Primary Action</Button>
                <Button variant="ghost" size="md">Secondary Action</Button>
              </div>
            </Card>
            
            <Card>
              <h3 className="text-xl font-semibold mb-4">Test Card 2</h3>
              <p className="text-[#C7C7C7] mb-4">
                Another test card with different content to show the design consistency.
              </p>
              <div className="space-y-3">
                <Input placeholder="Test input field" />
                <Button variant="link" size="md">Link Button</Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A0A0A] border-t border-[#1F1F1F] py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-[#C7C7C7]">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Enterprise</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Developers</h4>
              <ul className="space-y-2 text-[#C7C7C7]">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Examples</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-[#C7C7C7]">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-[#C7C7C7]">
                <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#1F1F1F] mt-8 pt-8 text-center text-[#C7C7C7]">
            <p>&copy; 2024 Next.js. All rights reserved.</p>
          </div>
        </div>
      </footer>
      </div>
      
      {/* Info Panel Modal */}
      <InfoPanel 
        isOpen={isInfoPanelOpen} 
        onClose={() => setIsInfoPanelOpen(false)} 
      />
    </div>
  );
}
