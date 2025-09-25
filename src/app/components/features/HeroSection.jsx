import Button from "../ui/Button.jsx";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-[calc(100vh-50px)] hero-bg ">
      {/* Logo overlay - positioned like in the image */}
      <div className="absolute inset-0 flex items-start top-20 justify-end md:grid md:grid-cols-2">
        <div></div>
        <div className="flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 space-y-2">
          <Image
            src="/images/logo/logo1.png"
            alt="EMS Dragt Logo"
            width={400}
            height={300}
            className="logo-responsive h-auto max-w-full object-contain hidden md:block"
          />
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button variant="secondary" href="/produkter">
              Se dragter
            </Button>
            <Button variant="primary" href="/om">
              Læs om EMS
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
