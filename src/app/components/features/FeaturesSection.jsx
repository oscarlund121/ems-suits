import Small from '../ui/Small.jsx';
import Checkmark from '../ui/Checkmark.jsx';
import Button from '../ui/Button.jsx';
import FeatureItem from '../ui/FeatureItem.jsx';
import SectionHeader from '../ui/SectionHeader.jsx';

export default function FeaturesSection() {
  return (
    <section className="section-padding bg-[#272727] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Image */}
          <div className="order-2 lg:order-1 flex justify-center items-center lg:pr-4 lg:justify-start">
            <img
              src="/images/features-main.webp"
              alt="EMS dragt i aktion"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2 space-y-8">
            

            {/* Section Header */}
            <SectionHeader 
              smallText="Velkommen"
              title="Hvorfor vælge EMS Suits?"
            />
            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <FeatureItem 
                number="01"
                title="Den næste generation af EMS"
                description="Dragter der overgår tidligere modeller: højere kvalitet, lavere pris, lettere betjening."
              />

              <FeatureItem 
                number="02"
                title="Bedre. Billigere. Smartere."
                description="EMS-dragter i topkvalitet – mere effektive, nemmere at bruge og til en skarpere pris."
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
            <div className="mt-8 text-center lg:text-left">
              <Button variant="primary" href="/kob-til-private">
                Se vores produkter
              </Button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
