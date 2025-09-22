import { getAllProducts } from '../../lib/products'
import SectionHeader from '../components/ui/SectionHeader.jsx'
import ProductCard from '../components/ui/ProductCard.jsx'

export const metadata = {
  title: 'Produkter - EMS Suits',
  description: 'Se alle vores EMS dragter og vælg den der passer til dine behov. Hjemme- og erhvervsdragter tilgængelig.',
}

export default function ProductsPage() {
  const products = getAllProducts()

  return (
    <div className="bg-white text-black">
      {/* Header Section */}
      <section className="bg-[#272727] text-white section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl uppercase tracking-wider">
              Produkter
            </h1>
            <div className="space-y-6 leading-relaxed max-w-3xl mx-auto">
              <p>
                Vælg den EMS dragt der passer til dine behov. Vi tilbyder 
                løsninger til både private og virksomheder.
              </p>
              <p>
                Som privatperson kan du træne hjemme med vores brugervenlige 
                dragter. Som virksomhed kan du tilbyde professionel EMS-træning 
                til dine kunder med vores erhvervsdragter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}