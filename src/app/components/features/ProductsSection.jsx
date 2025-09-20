import Button from '../ui/Button'
import SectionHeader from '../ui/SectionHeader'

const products = [
  {
    id: 1,
    category: "Privat",
    items: [
      { name: "EMS Dragt", image: "/images/ems-suit.jpg" },
      { name: "Energy Box", image: "/images/energy-box.jpg" },
      { name: "Waist Belt", image: "/images/waist-belt.png" }
    ]
  },
  {
    id: 2,
    category: "Erhverv", 
    items: [
      { name: "EMS Dragt", image: "/images/ems-suit.jpg" },
      { name: "Energy Box", image: "/images/energy-box.jpg" },
      { name: "Waist Belt", image: "/images/waist-belt.png" }
    ]
  }
]

export default function ProductsSection() {
  return (
    <section className="section-padding bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          smallText="Vores produkter"
          title="Vælg den rigtige EMS dragt" 
          subtitle="Vi har tre forskellige modeller der passer til alle behov - fra begynder til professionel"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mt-8 max-w-7xl mx-auto">
          {products.map((product) => (
            <div key={product.id} className="text-center border border-black p-4">
              {/* Category Title */}
              <h4 className="text-xl font-bold text-[#272727] mb-4">
                {product.category}
              </h4>
              
              {/* Bento Grid */}
              <div className="grid grid-cols-3 gap-3 h-80 sm:h-96 mb-6">
                {/* Main Dragt - Left side (2 columns) */}
                <div className="col-span-2 bg-gray-100 rounded-lg overflow-hidden">
                  {product.items[0].image ? (
                    <img 
                      src={product.items[0].image} 
                      alt={`${product.category} ${product.items[0].name}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400 text-center">
                      <div>
                        <div className="text-2xl mb-2">📱</div>
                        <p className="text-sm">{product.items[0].name}</p>
                        <p className="text-xs text-gray-500">{product.category}</p>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Right side - Energy Box and Waist Belt stacked */}
                <div className="col-span-1 grid grid-rows-2 gap-3">
                  {/* Energy Box - Top right */}
                  <div className="bg-gray-100 rounded-lg overflow-hidden">
                    {product.items[1].image ? (
                      <img 
                        src={product.items[1].image} 
                        alt={`${product.category} ${product.items[1].name}`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400 text-center">
                        <div>
                          <div className="text-lg mb-1">⚡</div>
                          <p className="text-xs">{product.items[1].name}</p>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Waist Belt - Bottom right */}
                  <div className="bg-white rounded-lg overflow-hidden">
                    {product.items[2].image ? (
                      <img 
                        src={product.items[2].image} 
                        alt={`${product.category} ${product.items[2].name}`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400 text-center">
                        <div>
                          <div className="text-lg mb-1">⌚</div>
                          <p className="text-xs">{product.items[2].name}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Single Button for this category */}
              <Button 
                variant="secondary"
                size="md"
                className="w-full sm:w-auto px-8"
              >
                Læs mere om produktet
              </Button>
            </div>
          ))}
        </div>
        
   
      </div>
    </section>
  )
}