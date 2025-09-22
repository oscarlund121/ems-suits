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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Suspense
          fallback={
            <div className="max-w-5xl mx-auto text-center py-16 flex items-center justify-center">
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
    <div className="max-w-5xl mx-auto text-center">
          
          {/* Success Icon */}
          <div className="mb-8">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <HiCheckCircle className="w-10 h-10 text-green-600" />
            </div>
            
            <SectionHeader 
              smallText="Bestilling bekræftet"
              title="Tak for din bestilling!"
            />
            
            <p className="text-xl text-gray-600 mb-4 mt-6">
              Din ordre er blevet modtaget og behandles nu.
            </p>
            
            {orderId && (
              <p className="text-lg text-gray-500 mb-8">
                Ordre nummer: <span className="font-mono font-semibold">{orderId}</span>
              </p>
            )}
          </div>

          {/* Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            
            {/* Email Confirmation */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-left">
              <div className="flex items-start">
                <HiMail className="w-6 h-6 text-blue-600 mt-1 mr-3" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">
                    Email bekræftelse sendt
                  </h3>
                  <p className="text-blue-700 text-sm">
                    Du vil modtage en ordrebekræftelse på din email inden for få minutter. 
                    Tjek også din spam-mappe hvis du ikke ser den.
                  </p>
                </div>
              </div>
            </div>

            {/* Invoice Information */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-left">
              <div className="flex items-start">
                <HiClock className="w-6 h-6 text-yellow-600 mt-1 mr-3" />
                <div>
                  <h3 className="font-semibold text-yellow-900 mb-2">
                    Faktura følger
                  </h3>
                  <p className="text-yellow-700 text-sm">
                    Du vil modtage en faktura på email inden for 1-2 hverdage. 
                    Betaling skal ske inden for fakturadatoen.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-[#272727] mb-4 text-center">
              Hvad sker der nu?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="w-8 h-8 bg-[#272727] text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-semibold">
                  1
                </div>
                <p className="text-sm text-gray-600">
                  Vi behandler din ordre
                </p>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 bg-[#272727] text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-semibold">
                  2
                </div>
                <p className="text-sm text-gray-600">
                  Du modtager faktura på email
                </p>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 bg-[#272727] text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-semibold">
                  3
                </div>
                <p className="text-sm text-gray-600">
                  Varen sendes efter betaling
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="text-center mb-8">
            <h3 className="font-semibold text-[#272727] mb-2">
              Har du spørgsmål til din ordre?
            </h3>
            <p className="text-gray-600 mb-4">
              Kontakt os gerne hvis du har spørgsmål eller brug for hjælp.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center text-sm text-gray-600">
              <span>📧 info@emssuits.dk</span>
              <span className="hidden sm:inline">•</span>
              <span>📞 +45 12 34 56 78</span>
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
  )
}