import SectionHeader from "../ui/SectionHeader.jsx";
import Image from "next/image";
import Button from "../ui/Button.jsx";

export default function FreedomSection() {
  return (
    <section className="section-padding bg-[#272727] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             {/* Image */}
          <div className="order-2 md:order-1 flex flex-col justify-center items-center lg:pl-4 lg:justify-start">
            <Image
              src="/images/ems-bag-pic.jpg"
              alt="EMS dragt pakket i taske"
              width={600}
              height={700}
              className="lg:w-full w-auto h-full object-cover shadow-sm"
            />
          </div>
          {/* Text Content */}
          <div className="order-1 md:order-2 flex flex-col space-y-2">
            <SectionHeader title="Frihed til at træne, hvor du vil" />
            <h5 className="text-lg">
              Emssuits fylder ingenting, så du kan nemt pakke den i tasken og
              træne hjemme, på kontoret eller på ferien.
            </h5>
              <div className=" text-center lg:text-left mt-12">
            <Button variant="primary" href="/produkter">
              Se vores produkter
            </Button>
          </div>
          </div>

       
        </div>
      </div>
    </section>
  );
}
