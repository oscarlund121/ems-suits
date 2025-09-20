export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Column */}
          <div className="md:col-span-1">
            <img 
              src="/images/logo/logo1.png" 
              alt="EMS Dragt Logo" 
              className="h-16 w-auto mb-4"
            />
          </div>
          
          {/* Kontakt Column */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Kontakt
            </h3>
            <div className="space-y-2">
              <div>
                <p className="text-gray-600 text-sm">Telefon:</p>
                <p className="text-gray-900">+45 31 38 03 07</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Mail:</p>
                <p className="text-gray-900">acasmose@gmail.com</p>
              </div>
            </div>
          </div>
          
          {/* Vores webshop Column */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Vores webshop
            </h3>
            <ul className="space-y-2">
              <li><a href="/kob-til-private" className="text-gray-600 hover:text-gray-900">Private</a></li>
              <li><a href="/kob-til-erhverv" className="text-gray-600 hover:text-gray-900">Erhverv</a></li>
            </ul>
          </div>
          
          {/* Handelsbetingelser Column */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Handelsbetingelser
            </h3>
            <ul className="space-y-2">
              <li><a href="/brug-af-emsuits-dragt" className="text-gray-600 hover:text-gray-900">Brug af Emsuits dragt</a></li>
              <li><a href="/privatlivspolitik" className="text-gray-600 hover:text-gray-900">Privatlivspolitik</a></li>
              <li><a href="/betingelser" className="text-gray-600 hover:text-gray-900">Betingelser</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Social Media Icons */}
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a href="#" className="text-gray-600 hover:text-gray-900" aria-label="Facebook">
                <span className="sr-only">Facebook</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900" aria-label="Instagram">
                <span className="sr-only">Instagram</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988s11.987-5.367 11.987-11.988C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-2.508 0-4.54-2.033-4.54-4.54s2.032-4.54 4.54-4.54c2.508 0 4.54 2.032 4.54 4.54s-2.032 4.54-4.54 4.54z"/>
                </svg>
              </a>
            </div>
            
            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-gray-600">© 2035 . Skabt med <span className="font-semibold">GDPR</span></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}