import { notFound } from 'next/navigation'
import { getProduct } from '../../../lib/products'
import DynamicProductSection from '../../components/features/DynamicProductSection'

export default async function ProductPage({ params }) {
  const resolvedParams = await params
  const product = getProduct(resolvedParams.slug)
  
  if (!product) {
    notFound()
  }

  return (
    <main className="pt-24">
      <DynamicProductSection product={product} />
    </main>
  )
}

// Generate static params for the two products
export function generateStaticParams() {
  return [
    { slug: 'ems-hjemmedragt' },
    { slug: 'ems-erhvervsdragt' }
  ]
}

// Generate metadata for each product
export function generateMetadata({ params }) {
  const product = getProduct(params.slug)
  
  if (!product) {
    return {
      title: 'Produkt ikke fundet'
    }
  }

  return {
    title: `${product.name} | EMS dragt`,
    description: product.description.short,
    openGraph: {
      title: product.name,
      description: product.description.short,
      images: [product.images[0].src]
    }
  }
}