'use client'

import CheckoutForm from '../components/forms/CheckoutForm'
import SectionHeader from '../components/ui/SectionHeader.jsx'

export default function CheckoutPage() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
        
          
          <CheckoutForm />
        </div>
      </div>
    </section>
  )
}