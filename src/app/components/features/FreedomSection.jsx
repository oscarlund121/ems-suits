import SectionHeader from "../ui/SectionHeader.jsx";
import Image from "next/image";
import Button from "../ui/Button.jsx";

export default function FreedomSection() {
  return (
    <section className="section-padding bg-[#272727] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-1 lg:order-1 flex flex-col space-y-6">
            <SectionHeader title="Frihed til at træne, hvor du vil" />
            <h5 className="text-lg leading-relaxed">
              Emssuits fylder ingenting, så du kan nemt pakke den i tasken og
              træne hjemme, på kontoret eller på ferien.
            </h5>
              <div className=" text-center lg:text-left mt-4">
            <Button variant="primary" href="/produkter">
              Se vores produkter
            </Button>
          </div>
          </div>

          {/* Image */}
          <div className="order-2 lg:order-2 flex flex-col justify-center items-center lg:pl-4 lg:justify-start">
            <Image
              src="/images/ems-bag-pic.jpg"
              alt="EMS dragt pakket i taske"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
