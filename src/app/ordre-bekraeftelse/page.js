'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense, useEffect } from 'react'
import Link from 'next/link'
import { HiCheckCircle, HiMail, HiClock } from 'react-icons/hi'
import Button from '../components/ui/Button'
import SectionHeader from '../components/ui/SectionHeader.jsx'
import LoadingSpinner from '../components/common/LoadingSpinner'

export default function OrderConfirmationPage() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <Suspense
          fallback={
            <div className="max-w-4xl mx-auto text-center py-16 flex items-center justify-center">
              <LoadingSpinner size="large" />
            </div>
          }
        >
          <OrderConfirmationContent />
        </Suspense>
      </div>
    </section>
  )
}

function OrderConfirmationContent() {
  const searchParams = useSearchParams()
  const orderId = searchParams.get('orderId')

  useEffect(() => {
    // Optional: Track order confirmation in analytics
    console.log('Order confirmed:', orderId)
  }, [orderId])

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white ">
          
          {/* Success Icon */}
          <div className="mb-8 text-center">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <HiCheckCircle className="w-10 h-10 text-green-600" />
            </div>
            
            <h1 className="text-4xl font-semibold text-black mb-4">
              Tak for din bestilling!
            </h1>
            
            <p className="text-xl  mb-4">
              Din ordre er blevet modtaget og behandles nu.
            </p>
            
            {orderId && (
              <p className="text-lg text-gray-500 mb-8">
                Ordre nummer: <span className="font-mono font-semibold text-black">{orderId}</span>
              </p>
            )}
          </div>

          {/* Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            
            {/* Email Confirmation */}
            <div className="bg-white p-8 text-left">
              <div className="flex items-start">
               
                <div>
                  <h4 className="font-semibold text-black mb-3 text-lg">
                    Email bekræftelse sendt
                  </h4>
                  <p className="">
                    Du vil modtage en ordrebekræftelse på din email inden for få minutter. 
                    Tjek også din spam-mappe hvis du ikke ser den.
                  </p>
                </div>
              </div>
            </div>

            {/* Invoice Information */}
            <div className="bg-white  p-8 text-left">
              <div className="flex items-start">
             
                <div>
                  <h4 className="font-semibold text-black mb-3 text-lg">
                    Faktura følger
                  </h4>
                  <p className="">
                    Du vil modtage en faktura på email inden for 1-2 hverdage. 
                    Betaling skal ske inden for fakturadatoen.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-white border border-black p-8 mb-8">
            <h4 className="font-semibold text-black mb-6 text-center text-lg">
              Hvad sker der nu?
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-semibold">
                  1
                </div>
                <p className="">
                  Vi behandler din ordre
                </p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-semibold">
                  2
                </div>
                <p className="">
                  Du modtager faktura på email
                </p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-semibold">
                  3
                </div>
                <p className="">
                  Varen sendes efter betaling
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="text-center mb-8">
            <h4 className="font-semibold text-black mb-3 text-lg">
              Har du spørgsmål til din ordre?
            </h4>
            <p className=" mb-6">
              Kontakt os gerne hvis du har spørgsmål eller brug for hjælp.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center ">
              <span>info@emssuits.dk</span>
              <span className="hidden sm:inline">•</span>
              <span>+45 12 34 56 78</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button variant="primary" size="lg">
                Tilbage til forsiden
              </Button>
            </Link>
            
            <Link href="/produkter">
              <Button variant="secondary" size="lg">
                Se alle produkter
              </Button>
            </Link>
          </div>
      </div>
    </div>
  )
}