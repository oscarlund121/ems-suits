import Button from "../ui/Button";
import SectionHeader from "../ui/SectionHeader";
import Link from "next/link";
import ProductCard from "../ui/ProductCard.jsx";
import { getAllProducts } from "../../../lib/products";

export default function ProductsSection() {
  const products = getAllProducts()

  return (
    <section className="section-padding bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          smallText="Vores produkter"
          title="Vælg den rigtige EMS dragt"
          subtitle="Vi har tre forskellige modeller der passer til alle behov - fra begynder til professionel"
        />
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
