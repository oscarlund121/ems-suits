import Button from "../ui/Button.jsx";
import Small from "../ui/Small.jsx";
import SectionHeader from "../ui/SectionHeader.jsx";

export default function AboutSection() {
  return (
    <section className=" section-padding bg-[#272727] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Text Content */}

            <div className="space-y-6">
              <SectionHeader 
                smallText="Om os"
                title="Mød EMS dragter"
              />
              <p>
              
                  Hos EMS dragter tror vi på, at effektiv træning skal være
                tilgængelig for alle
             
              – ikke kun for dem med tid og penge til dyre fitnesscentre.
            </p>

            <p>
          Vi gør det simpelt: Du tager
              dragten på, kobler den til vores lille aktivator, og styrer hele
              træningen direkte fra vores egen app på din telefon.
            </p>

            <p>
             Med EMS dragter får du en løsning,
              der både er bedre, billigere og lettere at bruge end de
              traditionelle EMS-systemer.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center items-start col-span-2 lg:pl-4 lg:justify">
            <img
              src="/images/om-os-main.webp"
              alt="EMS dragter team"
              className="w-full h-auto shadow-sm"
            />
          </div>
        </div>
            <div className="mt-8 flex justify-end">
              <Button variant="primary" href="/om">
                Læs mere om os
              </Button>
            </div>
      </div>

    </section>
  );
}
