'use client'

import CheckoutForm from '../components/forms/CheckoutForm'
import SectionHeader from '../components/ui/SectionHeader.jsx'

export default function CheckoutPage() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <SectionHeader 
              smallText="Bestilling"
              title="Udfyld dine oplysninger"
            />
            <p className="text-gray-600 max-w-2xl mx-auto mt-6">
              Du vil modtage en faktura på email efter din bestilling er bekræftet.
            </p>
          </div>
          
          <CheckoutForm />
        </div>
      </div>
    </section>
  )
}