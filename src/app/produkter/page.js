import { getAllProducts } from '../../lib/products'
import SectionHeader from '../components/ui/SectionHeader.jsx'
import ProductCard from '../components/ui/ProductCard.jsx'

export const metadata = {
  title: 'Alle Produkter - EMS Suits',
  description: 'Se alle vores EMS dragter og vælg den der passer til dine behov. Hjemme- og erhvervsdragter tilgængelig.',
}

export default function ProductsPage() {
  const products = getAllProducts()

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <SectionHeader 
            smallText="Vores udvalg"
            title="Alle EMS Dragter"
          />
          <p className="text-gray-600 max-w-2xl mx-auto mt-6">
            Vælg den EMS dragt der passer til dine behov. Vi tilbyder dragter til både hjemmebrug og erhverv.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
     
      </div>
    </section>
  )
}