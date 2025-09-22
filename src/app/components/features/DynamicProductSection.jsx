'use client'

import { useState } from 'react'
import { formatPrice } from '../../../lib/products'
import useCartStore from '../../../store/cartStore'
import Button from '../ui/Button'

export default function DynamicProductSection({ product }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState(null)
  
  const { addItem } = useCartStore()

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index)
  }

  const increaseQuantity = () => setQuantity(prev => prev + 1)
  const decreaseQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1)

  const handleAddToCart = () => {
    addItem(product, quantity)
    // Optional: Show success message or redirect
    console.log(`Added ${quantity}x ${product.name} to cart`)
  }

  return (
    <section className="py-4 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Image Gallery - Left Side */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden border">
              <img
                src={product.images[selectedImage].src}
                alt={product.images[selectedImage].alt}
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Thumbnail Row */}
            <div className="flex gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-black' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-contain bg-gray-50"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info - Right Side */}
          <div className="space-y-6">
            
            {/* Product Title & Price */}
            <div>
              <h2 className="text-3xl font-bold text-black mb-2">
                {product.name}
              </h2>
              <p className="text-gray-600 mb-4">
                Varenr: {product.sku}
              </p>
              <div className="text-3xl font-bold text-black">
                {formatPrice(product.price, product.currency)}
              </div>
            </div>

            {/* Quantity Selector */}
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Antal *
              </label>
              <div className="flex items-center border border-gray-300 rounded-md w-32">
                <button
                  onClick={decreaseQuantity}
                  className="px-3 py-2 text-black hover:text-gray-800"
                >
                  -
                </button>
                <span className="flex-1 text-center py-2 border-x border-gray-300">
                  {quantity}
                </span>
                <button
                  onClick={increaseQuantity}
                  className="px-3 py-2 text-black hover:text-gray-800"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <Button 
              variant="secondary" 
              size="lg" 
              className="w-full"
              onClick={handleAddToCart}
            >
              Tilføj til kurv
            </Button>

            {/* Accordions */}
            <div className="space-y-4 mt-8">
              
              {/* PRODUKTINFO Accordion */}
              <div className="border-b border-gray-200">
                <button
                  onClick={() => toggleAccordion(0)}
                  className="w-full flex justify-between items-center py-4 text-left"
                >
                  <span className="font-medium text-black">PRODUKTINFO</span>
                  <span className="text-xl">
                    {openAccordion === 0 ? '−' : '+'}
                  </span>
                </button>
                {openAccordion === 0 && (
                  <div className="pb-4 space-y-6">
                    <ul className="accordion-list space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                    
                    <div>
                      <h4 className="font-semibold mb-3 text-black text-sm">Maksimal muskelaktivering</h4>
                      <p className="text-black text-sm leading-relaxed">
                        {product.category === 'private' ? 'Hjemmedragten' : 'Erhvervsdragten'} er udstyret med <strong>{product.muscleCoverage.pads} pads</strong>, strategisk placeret på kroppens store muskelgrupper.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-black text-sm">
                        {product.category === 'private' ? 'Styrke uden slid' : 'Professionel kvalitet'}
                      </h4>
                      <p className="text-black text-sm leading-relaxed">
                        {product.description.long}
                      </p>
                    </div>

                    {/* Business Features for Erhverv */}
                    {product.businessFeatures && (
                      <div>
                        <h4 className="font-semibold mb-3 text-black text-sm">Erhvervsfordele</h4>
                        <ul className="accordion-list space-y-1">
                          <li><strong>Garanti:</strong> {product.businessFeatures.warranty}</li>
                          <li><strong>Support:</strong> {product.businessFeatures.support}</li>
                          <li><strong>Træning:</strong> {product.businessFeatures.training}</li>
                          <li><strong>Vedligeholdelse:</strong> {product.businessFeatures.maintenance}</li>
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* INDHOLD I SÆTTET Accordion */}
              <div className="border-b border-gray-200">
                <button
                  onClick={() => toggleAccordion(1)}
                  className="w-full flex justify-between items-center py-4 text-left"
                >
                  <span className="font-medium text-black">INDHOLD I SÆTTET</span>
                  <span className="text-xl">
                    {openAccordion === 1 ? '−' : '+'}
                  </span>
                </button>
                {openAccordion === 1 && (
                  <div className="pb-4">
                    <ul className="accordion-list space-y-2">
                      {product.packageContents.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* LEVERINGSINFO Accordion */}
              <div className="border-b border-gray-200">
                <button
                  onClick={() => toggleAccordion(2)}
                  className="w-full flex justify-between items-center py-4 text-left"
                >
                  <span className="font-medium text-black">LEVERINGSINFO</span>
                  <span className="text-xl">
                    {openAccordion === 2 ? '−' : '+'}
                  </span>
                </button>
                {openAccordion === 2 && (
                  <div className="pb-4 space-y-4">
                    <ul className="accordion-list space-y-2">
                      <li className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="font-medium text-black text-sm">Leveringstid:</span>
                        <span className="text-black text-sm">{product.shipping.deliveryTime}</span>
                      </li>
                      {product.shipping.freeShippingThreshold > 0 ? (
                        <li className="flex justify-between items-center py-2 border-b border-gray-100">
                          <span className="font-medium text-black text-sm">Forsendelse:</span>
                          <span className="text-black text-sm">Gratis fragt ved køb over {product.shipping.freeShippingThreshold} kr.</span>
                        </li>
                      ) : (
                        <li className="flex justify-between items-center py-2 border-b border-gray-100">
                          <span className="font-medium text-black text-sm">Forsendelse:</span>
                          <span className="text-black text-sm">Gratis fragt</span>
                        </li>
                      )}
                      <li className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="font-medium text-black text-sm">Returnering:</span>
                        <span className="text-black text-sm">{product.shipping.returnPolicy}</span>
                      </li>
                      <li className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="font-medium text-black text-sm">Support:</span>
                        <span className="text-black text-sm">Hurtig kundeservice hvis der opstår problemer</span>
                      </li>
                      {product.shipping.installationService && (
                        <li className="flex justify-between items-center py-2 border-b border-gray-100">
                          <span className="font-medium text-black text-sm">Installation:</span>
                          <span className="text-black text-sm">Professionel installationsservice tilgængelig</span>
                        </li>
                      )}
                    </ul>
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}