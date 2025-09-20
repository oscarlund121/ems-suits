import Button from "../ui/Button.jsx";
import Small from "../ui/Small.jsx";
import SectionHeader from "../ui/SectionHeader.jsx";

export default function AboutSection() {
  return (
    <section className=" section-padding bg-[#272727] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}

            <div className="space-y-6">
              <SectionHeader 
                smallText="Om os"
                title="Mød Ems Suits"
              />
              <p>
                <span className="font-bold">
                  Hos EmsSuits tror vi på, at effektiv træning skal være
                tilgængelig for alle
              </span>{" "}
              – ikke kun for dem med tid og penge til dyre fitnesscentre. Derfor
              har vi udviklet en ny generation af EMS-dragter, der kombinerer
              topkvalitet, brugervenlig teknologi og en pris, hvor alle kan være
              med.
            </p>

            <p>
              <span className="font-bold">Vi gør det simpelt:</span> Du tager
              dragten på, kobler den til vores lille aktivator, og styrer hele
              træningen direkte fra vores egen app på din telefon. Det betyder,
              at du kan træne når som helst, hvor som helst, uden at gå på
              kompromis med resultaterne.
            </p>

            <p>
              <span className="font-bold">Med EmsSuits får du en løsning,</span>{" "}
              der både er bedre, billigere og lettere at bruge end de
              traditionelle EMS-systemer. Vores mission er at give flere
              mennesker muligheden for at opleve, hvor meget EMS-træning kan
              gøre – for styrke, energi, velvære og livskvalitet.
            </p>

            <div className="mt-8">
              <Button variant="primary" href="/om">
                Læs mere om os
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center items-start pl-4 lg:justify-top">
            <img
              src="/images/om-os-main.webp"
              alt="EmsSuits team"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
