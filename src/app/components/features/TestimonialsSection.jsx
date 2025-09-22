'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useState } from 'react'
import SectionHeader from '../ui/SectionHeader'

// Component for expandable testimonial text
function ExpandableText({ text, maxLength = 150 }) {
  const [isExpanded, setIsExpanded] = useState(false)
  
  if (text.length <= maxLength) {
    return (
      <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed italic">
        "{text}"
      </p>
    )
  }
  
  const truncatedText = text.substring(0, maxLength) + '...'
  
  return (
    <div>
      <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed italic">
        "{isExpanded ? text : truncatedText}"
      </p>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-[#272727] hover:text-gray-600 text-sm font-medium mt-2 transition-colors"
      >
        {isExpanded ? 'Læs mindre' : 'Læs hele'}
      </button>
    </div>
  )
}

const testimonials = [
  {
    id: 1,
    name: "Heidi",
    text: "Det sidste års tid har jeg trænet EMS i et center. Hvilke er en træningsform der passer mig godt, idé jeg kan mærke en forskel på min krop, uden jeg behøver træne tungt. Nu har jeg købt min helt egen EMS-dragt til hjemmetræning🤩 Det giver mig en frihed og fleksibilitet at kunne træne præcis når det passer mig og så tit det passer mig. Appen til telefonen er let at betjene. Jeg tilpasser intensiteten til hvor hårdt jeg ønsker at træne den pågældende dag🏋🏼‍♀️ Dragen er nem at bevæge sig i, så jeg kan lave de samme øvelser med bl.a. håndvægte, som havde jeg traditionelt træningstøj på. EMS-træning er for mig et godt supplement til de daglige gå- eller cykelture. Jeg bevarer min muskelmasse, er blevet stærkere og min krop er blevet mere tonet 💪🏼🤩 Kan helt sikkert anbefales!"
  },
  {
    id: 2,
    name: "Charlotte",
    text: "Første gang jeg prøvede EMS var jeg solgt. Det er en virkelig god og hård træning. Man kan virkelig mærke at man får brugt sin krop og muskler. I min travle hverdag, så passer det bare så godt, at jeg kan træne når det lige passer ind i mit program og jeg ikke er fastlagt på en fast dag og tidpunkt. Jeg har altid vægtet styretræning højt, da jeg ved at det er vigtigt at holde musklerne igang ift man bliver ældre. Samtidige har jeg haft nogen små hofte, knæ og skinneben smerter efter et tidligere sports liv, som jeg kan mærke at blevet mindsket grundet min EMS træning. Jeg er der hvor jeg ikke kan undværer min EMS træning."
  },
  {
    id: 3,
    name: "Dorte",
    text: "Da jeg startede til EMS vidste ikke hvad det egentlig var, men jeg fandt hurtig ud af hvor godt det var for min krop da jeg har kronisk stress samt en tarmsygdom. Det gør og det har gjort det ved mig at jeg kan begynde at mærke min krop og jeg kan finde lidt mere ro, jeg kan mærke min krop bliver stærkere da jeg ikke kan gøre mange af de øvelser uden den EMS dragt som støtter kroppen. Men hvor jeg stadig skal bruge min krop uden at overbelaste den. Dette er det gode ved dragten er at den kan bruges uden at jeg gør noget som helst men bare sidde med dem eller ligger på de dage jeg har det slemt, det er grunden til at jeg selv har valgt at købe en da jeg så kan bruge bruge den i det omfang jeg har behov for og når jeg har."
  },
  {
    id: 4,
    name: "Anonym kunde",
    text: "Glæder mig så meget til at hoppe i dragten. Det er tydeligt på min krop at jeg ikke har trænet EMS i 3 måneder nu"
  },
  {
    id: 5,
    name: "Jette",
    text: "Efter mere end 50 års autoimmun sygdom og en ulykke for 9 år siden, der ødelagde min skulder fik jeg kendskab til EMS og efter ganske kort tid med denne træningsform bedredes min bevægelig i min skulder og mit velvære generelt. Da jeg også lider af udmattethed fik jeg ikke trænet så meget som jeg gerne ville, så det er en gave at have en EMS suite tilgængelig hjemme og jeg nyder at mærke, at følelsen af styrke og bevægelighed kommer tilbage. Kan kun anbefales herfra."
  }
]

export default function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'start',
    breakpoints: {
      '(min-width: 768px)': { align: 'start' }
    },
    dragFree: true
  })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <section className="section-padding bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-12">
        <SectionHeader 
          smallText="Kundeudtalelser"
          title="Kundernes oplevelser" 
          centered={true}
        />
        </div>
        
        <div className="relative px-4 sm:px-0">
          <div className="embla overflow-hidden py-8" ref={emblaRef}>
            <div className="embla__container flex touch-pan-y">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="embla__slide flex-[0_0_90%] sm:flex-[0_0_85%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] xl:flex-[0_0_30%] pl-4 sm:pl-6">
                  <div className="bg-white rounded-lg p-4 sm:p-6 lg:p-8 shadow-sm h-full flex flex-col">
                    <div className="mb-4 sm:mb-6 flex-grow">
                      <ExpandableText text={testimonial.text} maxLength={150} />
                    </div>
                    
                    <div className="flex items-center mt-auto">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-300 rounded-full flex-shrink-0 mr-3 sm:mr-4">
                        <div className="w-full h-full bg-[#272727] rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm sm:text-lg">
                            {testimonial.name.charAt(0)}
                          </span>
                        </div>
                      </div>
                      
                      <div className="min-w-0 flex-1">
                        <h4 className="font-bold text-[#272727] text-sm sm:text-base lg:text-lg truncate">
                          {testimonial.name}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons - hidden on mobile, visible on tablet+ */}
          <button
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-6 w-10 h-10 lg:w-12 lg:h-12 bg-[#272727] text-white rounded-full items-center justify-center shadow-lg hover:bg-white hover:text-[#272727] transition-colors z-10"
            onClick={scrollPrev}
            aria-label="Forrige udtalelse"
          >
            <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-6 w-10 h-10 lg:w-12 lg:h-12 bg-[#272727] text-white rounded-full items-center justify-center shadow-lg hover:bg-white hover:text-[#272727] transition-colors z-10"
            onClick={scrollNext}
            aria-label="Næste udtalelse"
          >
            <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        {/* Mobile swipe indicator */}
        <div className="sm:hidden mt-6 text-center">
          <p className="text-gray-300 text-sm">← Swipe for mere →</p>
        </div>
      </div>
    </section>
  )
}