export default function HeroSection() {
  return (
    <section className="relative h-[calc(100vh-50px)] hero-bg ">
      
      {/* Logo overlay - positioned like in the image */}
      <div className="absolute inset-0 flex items-center justify-center md:grid md:grid-cols-2">
        <div className="hidden md:block"></div>
        <div className="flex items-center justify-center px-4 sm:px-6 md:px-8">
          <img 
            src="/images/logo/logo1.png" 
            alt="EMS Dragt Logo" 
            className="w-48 h-auto sm:w-56 md:w-64 lg:w-80 xl:w-96 max-w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}