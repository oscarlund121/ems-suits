'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { useCallback } from 'react'
import SectionHeader from '../ui/SectionHeader'

const testimonials = [
  {
    id: 1,
    name: "Michael Hansen",
    title: "Fitness Coach",
    company: "FitLife Gym",
    text: "EMS træning har revolutioneret måden jeg træner mine klienter på. Resultaterne kommer hurtigere og træningen er mere effektiv end nogensinde før.",
    image: "/images/testimonial-1.jpg"
  },
  {
    id: 2,
    name: "Sarah Larsen",
    title: "Fysiotherapeut",
    company: "Fysio Klinikken",
    text: "Som fysiotherapeut ser jeg utrolige resultater med EMS træning. Det er skånsomt og samtidig utroligt effektivt til rehabilitation.",
    image: "/images/testimonial-2.jpg"
  },
  {
    id: 3,
    name: "Thomas Nielsen",
    title: "Personal Trainer",
    company: "Elite Fitness",
    text: "Mine klienter elsker EMS træning. De kan opnå samme resultater på halvdelen af tiden, og det er fantastisk for beskæftigede mennesker.",
    image: "/images/testimonial-3.jpg"
  },
  {
    id: 4,
    name: "Anna Pedersen",
    title: "Træningscenterejer",
    company: "BodyShape Studio",
    text: "EMS dragterne fra jeres virksomhed er af højeste kvalitet. Vores kunder er begejstrede for træningsoplevelsen.",
    image: "/images/testimonial-4.jpg"
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
        />
        </div>
        
        <div className="relative px-4 sm:px-0">
          <div className="embla overflow-hidden rounded-lg" ref={emblaRef}>
            <div className="embla__container flex touch-pan-y">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="embla__slide flex-[0_0_90%] sm:flex-[0_0_85%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] xl:flex-[0_0_30%] pl-4 sm:pl-6">
                  <div className="bg-white rounded-lg p-4 sm:p-6 lg:p-8 shadow-lg h-full min-h-[280px] sm:min-h-[320px]">
                    <div className="mb-4 sm:mb-6">
                      <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed italic">
                        "{testimonial.text}"
                      </p>
                    </div>
                    
                    <div className="flex items-center mt-auto">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-300 rounded-full flex-shrink-0 mr-3 sm:mr-4">
                        {testimonial.image ? (
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-full h-full object-cover rounded-full"
                          />
                        ) : (
                          <div className="w-full h-full bg-[#272727] rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-sm sm:text-lg">
                              {testimonial.name.charAt(0)}
                            </span>
                          </div>
                        )}
                      </div>
                      
                      <div className="min-w-0 flex-1">
                        <h4 className="font-bold text-[#272727] text-sm sm:text-base lg:text-lg truncate">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-600 text-xs sm:text-sm truncate">
                          {testimonial.title}
                        </p>
                        <p className="text-gray-500 text-xs sm:text-sm truncate">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons - hidden on mobile, visible on tablet+ */}
          <button
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-6 w-10 h-10 lg:w-12 lg:h-12 bg-white text-[#272727] rounded-full items-center justify-center shadow-lg hover:bg-gray-100 transition-colors z-10"
            onClick={scrollPrev}
            aria-label="Forrige udtalelse"
          >
            <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-6 w-10 h-10 lg:w-12 lg:h-12 bg-white text-[#272727] rounded-full items-center justify-center shadow-lg hover:bg-gray-100 transition-colors z-10"
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