import Button from "../components/ui/Button";
import Image from "next/image";

export default function Om() {
  return (
    <div className="bg-white text-black">

      {/* Section 1: Hero Section - Clean centered layout */}
      <section className="text-white bg-[#272727]  section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            {/* Large heading */}
            <h1 className="text-4xl md:text-6xl uppercase">
              Godt at møde dig
            </h1>

            {/* Descriptive paragraphs */}
            <div className="space-y-6 leading-relaxed max-w-3xl mx-auto">
              <p>
                EMS dragt præsenterer den nye bølge af EMS-teknologi og fortæller deres historie
                gennem innovative træningsløsninger.
              </p>

              <p>
                Grundlagt med visionen om at gøre professionel EMS-træning tilgængelig for alle,
                tilbyder vi et eklektisk og glædeligt perspektiv på
                fitness, der nærer passionen for effektiv træning.
              </p>

              <p>
                Nu sammensat af eksperter – fysiologer, trænere, trendsættere – har mærket, der
                er blevet et mediehus og kreativ strategi agentur, adresseret alle
                samlere af inspiration i søgen efter unikhed.
              </p>

              <p>
                En sand trendsætter, Emssuits fejrer kreativitet i alle former ved at
                blande talenter, discipliner og styles!
              </p>
            </div>

            {/* Call to action button */}

          </div>
        </div>
      </section>
      <div className="section-padding flex justify-center items-center">
        {/* Image - spans 2 columns */}
        <div className="lg:col-span-2 max-w-7xl relative">
          <Image
            src="/images/om-ems-page.webp"
            alt="EmsSuits EMS træning"
            width={1100}
            height={800}
            className="w-275 h-auto shadow-sm object-cover"
          />
        </div>
      </div>

      {/* Section 2: Hvad gør os anderledes - White Background */}
      <section className="bg-[#272727] text-white section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
            {/* Image - spans 2 columns */}
            <div className="lg:col-span-2 relative">
              <Image
                src="/images/om-ems-page-2.webp"
                alt="EmsSuits EMS træning"
                width={800}
                height={600}
                className="w-full h-auto shadow-lg object-cover"
              />
            </div>

            {/* Text content - spans 1 column */}
            <div className="lg:col-span-1 space-y-6">
              <h3>Hvad gør os anderledes?</h3>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-1">
                <p>
                  Vi tror på, at avanceret træningsteknologi skal være tilgængelig for alle -
                  ikke kun for dem med adgang til dyre specialcentre eller komplekse systemer.
                  Derfor har vi udviklet Emssuits der kombinerer professionel kvalitet
                  med brugervenlig teknologi og en pris der giver mening.
                </p>

                <p>
                  Vores fokus ligger på at gøre EMS-træning simpelt, effektivt og tilgængeligt.
                  Vi udvikler produkter der ikke kun matcher traditionelle EMS-systemer i
                  resultater, men overgår dem i brugervenlighed, holdbarhed og pris.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Produktet i detaljer - Gray Background */}
      <section className=" section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
            {/* Text content - spans 1 column */}
            <div className="lg:col-span-1 space-y-6 md:order-1 order-2">
              <h3>Produktet i detaljer</h3>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-1">
                <div>
                  <p>
                    Ems dragt giver dig effektiv helkropstræning på kun 20 minutter.
                    Med vores trådløse Emssuits aktiveres alle de store
                    muskelgrupper samtidig – skånsomt, fleksibelt og med resultater,
                    du kan mærke i hverdagen.
                  </p>


                  <p>
                    Vores dragter kombinerer slidstyrke, brugervenlighed og fuld
                    helkropsaktivering – alt sammen i en prisvenlig løsning, så flere
                    kan få glæde af teknologien.
                  </p>
                </div>
                <div>
                  <p>
                    Når du træner med Emssuits, aktiveres hele kroppen på én gang:
                    ben, ryg, mave, arme og skuldre arbejder samtidig, hvilket giver
                    en komplet træning på bare 20 minutter.
                  </p>

                  <p>
                    Metoden er skånsom for led og sener, men giver stadig en dyb og
                    effektiv muskelstimulering. Det betyder, at du kan opbygge styrke,
                    forbedre din holdning og øge dit energiniveau – uden risiko for
                    overbelastning.
                  </p>
                </div>
              </div>

            </div>

            {/* Image - spans 2 columns */}
            <div className="lg:col-span-2 relative">
              <Image
                src="/images/om-ems-page-3.webp"
                alt="EmsSuits EMS træning"
                width={800}
                height={600}
                className="w-full h-auto shadow-sm object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Frihed og fleksibilitet - Gray Background */}
      <section className="bg-[#272727] text-white section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h1>Frihed og fleksibilitet</h1>
            <p className="text-lg md:text-xl leading-relaxed">
              Uanset om du træner derhjemme, udendørs eller i et center, giver
              Emssuits dig friheden til at træne, når det passer dig. Vores
              dragter er både mere driftssikre og nemmere at bruge end
              tidligere generationer – og samtidig markant billigere end mange
              andre løsninger på markedet.
            </p>
            <div className="mt-10">
              <Button variant="primary" href="/produkter">
                Se vores produkter
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}