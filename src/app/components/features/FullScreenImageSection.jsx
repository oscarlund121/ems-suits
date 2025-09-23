import SectionHeader from "../ui/SectionHeader.jsx";
import Button from "../ui/Button.jsx";

export default function FullScreenImageSection() {
  return (
    <section className="relative flex justify-center items-center">
      <figure className="">
        <img
          src="/images/mobile-main.webp"
          alt="EMS træning på mobil"
          className="object-cover"
        />
        
        {/* Text overlay */}
        <div className="absolute inset-0 z-1000 flex items-center justify-center">
          <div className="text-center text-white max-w-2xl px-6">
            <h1 className="text-4xl">Træn med EMS</h1>
            <Button variant="secondary" size="lg" href="/produkter">
              Se vores produkter
            </Button>
          </div>
        </div>
      </figure>
    </section>
  );
}