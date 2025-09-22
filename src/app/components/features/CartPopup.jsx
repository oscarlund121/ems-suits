'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { HiX, HiMinus, HiPlus, HiTrash } from 'react-icons/hi'
import useCartStore from '../../../store/cartStore'
import { formatPrice } from '../../../lib/products'
import Button from '../ui/Button'

export default function CartPopup() {
  const { 
    items, 
    isOpen, 
    setIsOpen, 
    getTotalPrice, 
    updateQuantity, 
    removeItem 
  } = useCartStore()

  // Close popup when clicking outside
  useEffect(() => {
    if (isOpen) {
      const handleClickOutside = (event) => {
        if (event.target.closest('.cart-popup') === null) {
          setIsOpen(false)
        }
      }
      document.addEventListener('click', handleClickOutside)
      return () => document.removeEventListener('click', handleClickOutside)
    }
  }, [isOpen, setIsOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
      <div className="cart-popup bg-white w-full max-w-md h-full overflow-y-auto shadow-xl">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-bold text-[#272727]">
            Indkøbskurv ({items.length})
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <HiX className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 p-6">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2L3 7v11a2 2 0 002 2h10a2 2 0 002-2V7l-7-5zM8 15a1 1 0 102 0v-3a1 1 0 10-2 0v3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Din kurv er tom
              </h3>
              <p className="text-gray-500 mb-6">
                Tilføj produkter for at fortsætte med dit køb
              </p>
              <Link href="/produkter/ems-hjemmedragt">
                <Button 
                  variant="primary" 
                  onClick={() => setIsOpen(false)}
                >
                  Se produkter
                </Button>
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              
              {/* Cart Items */}
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 p-4 border border-gray-200 rounded-lg">
                    
                    {/* Product Image */}
                    <div className="w-16 h-16 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                      <img
                        src={item.images[0].src}
                        alt={item.images[0].alt}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    
                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-[#272727] truncate">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {formatPrice(item.price)}
                      </p>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <HiMinus className="w-4 h-4 text-gray-600" />
                        </button>
                        
                        <span className="w-8 text-center text-sm font-medium">
                          {item.quantity}
                        </span>
                        
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <HiPlus className="w-4 h-4 text-gray-600" />
                        </button>
                        
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-1 hover:bg-gray-100 rounded ml-auto"
                        >
                          <HiTrash className="w-4 h-4 text-red-500" />
                        </button>
                      </div>
                    </div>
                    
                    {/* Item Total */}
                    <div className="text-right">
                      <p className="font-medium text-[#272727]">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Total */}
              <div className="border-t pt-6">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-lg font-medium text-[#272727]">
                    Total:
                  </span>
                  <span className="text-xl font-bold text-[#272727]">
                    {formatPrice(getTotalPrice())}
                  </span>
                </div>
                
                {/* Checkout Button */}
                <Link href="/checkout">
                  <Button 
                    variant="primary" 
                    size="lg" 
                    className="w-full"
                    onClick={() => setIsOpen(false)}
                  >
                    Gå til checkout
                  </Button>
                </Link>
                
                <p className="text-xs text-gray-500 text-center mt-4">
                  Du vil modtage en faktura efter bestilling
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}