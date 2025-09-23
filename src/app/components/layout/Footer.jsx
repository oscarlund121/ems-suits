import Link from 'next/link';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-black">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo Column */}
          <div className="md:col-span-1">
            <img 
              src="/images/logo/logo1.png" 
              alt="EMS Dragt Logo" 
              className="h-48 w-auto mb-4"
            />
          </div>
          
          {/* Kontakt Column */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Kontakt
            </h4>
            <div className="space-y-3">
              <div>
                <p className="text-gray-600 text-sm">Felix:</p>
                <p className="text-gray-900 text-sm">+45 26 35 16 77</p>
                <p className="text-gray-900 text-sm">Felix@emsdragt.dk</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Annette:</p>
                <p className="text-gray-900 text-sm">+45 31 38 03 07</p>
                <p className="text-gray-900 text-sm">Annette@emsdragt.dk</p>
              </div>
              <div className="mt-3">
                <p className="text-gray-600 text-sm">Adresse:</p>
                <p className="text-gray-900 text-sm">Nygade 6, kl. 4300 Holbæk</p>
              </div>
            </div>
          </div>
          
          {/* Vores webshop Column */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Vores webshop
            </h4>
            <ul className="space-y-2">
              <li><Link href="/produkter/ems-hjemmedragt" className="text-gray-600 hover:text-gray-900">Private</Link></li>
              <li><Link href="/produkter/ems-erhvervsdragt" className="text-gray-600 hover:text-gray-900">Erhverv</Link></li>
            </ul>
          </div>
          
          {/* Handelsbetingelser Column */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Handelsbetingelser
            </h4>
            <ul className="space-y-2">
              <li><Link href="/brug-af-emsuits-dragt" className="text-gray-600 hover:text-gray-900">Brug af Emsuits dragt</Link></li>
              <li><Link href="/privatlivspolitik" className="text-gray-600 hover:text-gray-900">Privatlivspolitik</Link></li>
              <li><Link href="/betingelser" className="text-gray-600 hover:text-gray-900">Betingelser</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-black">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Social Media Icons */}
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a href="#" className="text-gray-600 hover:text-gray-900" aria-label="Facebook">
                <span className="sr-only">Facebook</span>
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900" aria-label="Instagram">
                <span className="sr-only">Instagram</span>
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
            
            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-gray-600">© 2025</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}