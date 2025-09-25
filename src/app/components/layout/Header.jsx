'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import useCartStore from '../../../store/cartStore';
import CartPopup from '../features/CartPopup';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  const { getTotalItems, toggleCart } = useCartStore();
  const pathname = usePathname();

  // Ensure hydration is complete before showing cart count
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  // Check if we're on the homepage
  const isHomepage = pathname === '/';
  
  // Dynamic header classes based on positioning
  const headerClasses = isHomepage 
    ? "absolute top-3 left-0 right-0 z-50 bg-transparent"
    : "relative z-50 top-3 bg-white ";

  return (
    <header className={headerClasses}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image 
                src="/images/logo/logo1.png" 
                alt="EMS Dragt Logo" 
                width={160}
                height={160}
                className="h-40 md:h-40"
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex ml-auto mr-8">
            <ul className="flex space-x-8">
              <li>
                <Link href="/produkter/ems-erhvervsdragt" className="text-black hover:text-gray-600 font-medium">
                  Køb til erhverv
                </Link>
              </li>
              <li>
                <Link href="/produkter/ems-hjemmedragt" className="text-black hover:text-gray-600 font-medium">
                  Køb til private
                </Link>
              </li>
              <li>
                <Link href="/centre" className="text-black hover:text-gray-600 font-medium">
                 Vores centre
                </Link>
              </li>
              <li>
                <Link href="/om" className="text-black hover:text-gray-600 font-medium">
                  Om EMS
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile menu button and cart */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Mobile Cart */}
            <button 
              onClick={toggleCart}
              className="relative w-8 h-8 bg-black rounded flex items-center justify-center"
            >
              <HiOutlineShoppingBag className="text-white text-sm" />
              {isHydrated && getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </button>
            
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
          
          {/* Desktop Cart */}
          <div className="hidden md:flex items-center">
            <button 
              onClick={toggleCart}
              className="relative w-10 h-10 bg-black rounded flex items-center justify-center"
            >
              <HiOutlineShoppingBag className="text-white text-lg" />
              {isHydrated && getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 bg-white shadow-lg rounded-lg mt-2">
              <ul className="space-y-1">
                <li>
                  <Link
                    href="/produkter/ems-erhvervsdragt"
                    className="block px-3 py-2 text-black hover:text-gray-600 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Køb til erhverv
                  </Link>
                </li>
                <li>
                  <Link
                    href="/produkter/ems-hjemmedragt"
                    className="block px-3 py-2 text-black hover:text-gray-600 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Køb til private
                  </Link>
                </li>
                <li>
                  <Link
                    href="/centre"
                    className="block px-3 py-2 text-black hover:text-gray-600 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Centre
                  </Link>
                </li>
                <li>
                  <Link
                    href="/om"
                    className="block px-3 py-2 text-black hover:text-gray-600 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Om EMS
                  </Link>
                </li>
              </ul>
              
              {/* Social Media Links */}
              <div className="mt-4 pt-3 border-t border-gray-200">
                <div className="flex space-x-4 px-3">
                  <Link href="#" className="text-gray-600 hover:text-gray-900" aria-label="Facebook">
                    <span className="sr-only">Facebook</span>
                    <FaFacebook className="w-6 h-6" />
                  </Link>
                  <Link href="#" className="text-gray-600 hover:text-gray-900" aria-label="Instagram">
                    <span className="sr-only">Instagram</span>
                    <FaInstagram className="w-6 h-6" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
      
      {/* Cart Popup */}
      <CartPopup />
    </header>
  );
}