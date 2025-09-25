import Link from 'next/link'
import Image from 'next/image'
import Button from './Button.jsx'
import { formatPrice } from '../../../lib/products'

export default function ProductCard({ product }) {
  return (
    <Link href={`/produkter/${product.slug}`} className="block">
      <div className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 max-w-sm cursor-pointer">
      {/* Product Image */}
      <div className="relative h-48 overflow-hidden bg-white flex items-center justify-center p-4">
        <Image
          src={product.images?.[0]?.src || product.images?.main}
          alt={product.images?.[0]?.alt || product.name}
          fill
          className="object-contain group-hover:scale-105 transition-transform duration-300 p-4"
        />
        {product.badge && (
          <div className="absolute top-3 left-3 bg-black text-white px-2 py-1 rounded text-xs font-semibold">
            {product.badge}
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4 h-62 flex flex-col">
        <div className="flex-1">
          <h4 className="text-base font-semibold text-black mb-2 leading-tight">
            {product.name}
          </h4>
          <p className="mb-3 text-xs leading-relaxed line-clamp-2">
            {product.description?.short || product.shortDescription}
          </p>
          
          {/* Price */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-base font-bold text-black">
              {formatPrice(product.price, product.currency)}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-gray-500 line-through">
                {formatPrice(product.originalPrice, product.currency)}
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 mt-auto">
          <Button variant="secondary" className="w-full text-xs py-2">
            Køb nu
          </Button>
        </div>
      </div>
      </div>
    </Link>
  )
}