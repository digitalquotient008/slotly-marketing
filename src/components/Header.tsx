'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.slotly.com';

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              Slotly
            </Link>
            <div className="hidden md:flex ml-10 space-x-8">
              <Link href="/features" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
                Features
              </Link>
              <Link href="/pricing" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
                Pricing
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
                About
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link 
              href={`${APP_URL}/auth/login`} 
              className="text-gray-600 hover:text-gray-900 text-sm font-medium"
            >
              Log In
            </Link>
            <Link 
              href={`${APP_URL}/auth/signup`} 
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
            >
              Sign Up
            </Link>
            <button
              className="md:hidden text-gray-600 hover:text-gray-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link href="/features" className="block text-gray-600 hover:text-gray-900">Features</Link>
            <Link href="/pricing" className="block text-gray-600 hover:text-gray-900">Pricing</Link>
            <Link href="/about" className="block text-gray-600 hover:text-gray-900">About</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
