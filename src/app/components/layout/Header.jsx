'use client';

import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-3 left-0 right-0 z-50 bg-transparent">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/images/logo/logo1.png" 
              alt="EMS Dragt Logo" 
              className="h-40"
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex ml-auto mr-8">
            <ul className="flex space-x-8">
              <li>
                <a href="/kob-til-erhverv" className="text-black hover:text-gray-600 font-medium">
                  Køb til Erhverv
                </a>
              </li>
              <li>
                <a href="/kob-til-private" className="text-black hover:text-gray-600 font-medium">
                  Køb til private
                </a>
              </li>
              <li>
                <a href="/centre" className="text-black hover:text-gray-600 font-medium">
                 Vores centre
                </a>
              </li>
              <li>
                <a href="/om" className="text-black hover:text-gray-600 font-medium">
                  Om
                </a>
              </li>
            </ul>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black hover:text-gray-600 focus:outline-none focus:text-gray-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          
          {/* Cart */}
          <div className="hidden md:flex items-center">
            <div className="w-10 h-10 bg-black rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">0</span>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg rounded-lg mt-2">
              <a
                href="/kob-til-erhverv"
                className="block px-3 py-2 text-black hover:text-gray-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Køb til Erhverv
              </a>
              <a
                href="/kob-til-private"
                className="block px-3 py-2 text-black hover:text-gray-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Køb til private
              </a>
              <a
                href="/centre"
                className="block px-3 py-2 text-black hover:text-gray-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Centre
              </a>
              <a
                href="/om"
                className="block px-3 py-2 text-black hover:text-gray-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Om
              </a>
              {/* Mobile Cart */}
              <div className="px-3 py-2">
                <div className="w-10 h-10 bg-black rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">0</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}