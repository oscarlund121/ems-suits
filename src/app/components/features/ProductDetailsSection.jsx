import Small from '../ui/Small.jsx';
import Button from '../ui/Button.jsx';
import SectionHeader from '../ui/SectionHeader.jsx';
import CheckmarkItem from '../ui/CheckmarkItem.jsx';
import Image from 'next/image';

export default function ProductDetailsSection() {
  return (
    <section className="section-padding text-black bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="space-y-6">
            
            {/* Section Header */}
            <SectionHeader 
              smallText="Teknologi"
              title="Ny generation af EMS"
            />

            <div className="space-y-8">
              <h5 className="text-lg font-semibold">
                Ems dragt giver dig effektiv helkropstræning på kun 20 minutter 
                med trådløse Emssuits. Med vores suits aktiveres alle de store 
                muskelgrupper samtidig – skånsomt, fleksibelt og med resultater, 
                du kan mærke i hverdagen.
              </h5>

              <div className="space-y-1 mt-6">
                <CheckmarkItem>
                  Vores dragter kombinerer slidstyrke, brugervenlighed og fuld 
                  helkropsaktivering – alt sammen i en prisvenlig løsning, så flere 
                  kan få glæde af teknologien.
                </CheckmarkItem>

                <CheckmarkItem>
                  EMS dragt er en ny generation af Emssuits – udviklet til dig, der 
                  vil have mest muligt ud af din træning på kortest mulig tid.
                </CheckmarkItem>

                <CheckmarkItem>
                  Når du træner med Emssuits, aktiveres hele kroppen på én gang: 
                  ben, ryg, mave, arme og skuldre arbejder samtidig, hvilket giver 
                  en komplet træning på bare 20 minutter.
                </CheckmarkItem>

                <CheckmarkItem>
                  Metoden er skånsom for led og sener, men giver stadig en dyb og 
                  effektiv muskelstimulering uden risiko for overbelastning.
                </CheckmarkItem>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8 text-center lg:text-right">
              <Button variant="secondary" href="/om">
                Læs mere om produktet
              </Button>
            </div>

          </div>

          {/* Image */}
          <div className="flex justify-center items-center lg:pl-4 mt-6 lg:justify-end">
            <Image
              src="/images/product-details.webp"
              alt="Mand med EMS-dragt og telefon"
              width={600}
              height={700}
              className="h-200 object-cover shadow-sm hidden md:block"
            />
          </div>

        </div>
      </div>
    </section>
  );
}