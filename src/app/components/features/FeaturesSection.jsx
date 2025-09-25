import Small from '../ui/Small.jsx';
import Checkmark from '../ui/Checkmark.jsx';
import Button from '../ui/Button.jsx';
import FeatureItem from '../ui/FeatureItem.jsx';
import SectionHeader from '../ui/SectionHeader.jsx';
import Image from 'next/image';

export default function FeaturesSection() {
  return (
    <section className="section-padding bg-[#272727] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Image */}
          <div className="order-2 lg:order-1 flex justify-center items-center lg:pr-4 lg:justify-start">
            <Image
              src="/images/features-main.webp"
              alt="EMS dragt i aktion"
              width={600}
              height={600}
              className="lg:w-full w-auto h-full shadow-sm"
            />
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2 flex flex-col space-y-4 ">
            

            {/* Section Header */}
            <SectionHeader 
          
              title="Hvorfor vælge EMS dragt?"
            />
            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
              
              <FeatureItem 
                number="01"
                title="Den næste generation af EMS"
                description="Dragter der overgår tidligere modeller: højere kvalitet, lavere pris, lettere betjening."
              />

              <FeatureItem 
                number="02"
                title="Bedre. Billigere. Smartere."
                description="Emssuits i topkvalitet – mere effektive, nemmere at bruge og til en skarpere pris."
              />

              <FeatureItem 
                number="03"
                title="Styrke med omsorg for kroppen"
                description="Opbyg muskelmasse og stabilitet uden unødigt pres på led og sener – nemt og effektivt."
              />

              <FeatureItem 
                number="04"
                title="Frihed til at træne"
                description="20 minutters effektiv træning – når som helst, hvor som helst, og nu til en pris alle kan være med på."
              />

            </div>

            {/* CTA Button */}
            <div className=" text-center lg:text-left mt-4">
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
