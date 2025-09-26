export const products = {
  'ems-hjemmedragt': {
    id: 'ems-hjemmedragt',
    slug: 'ems-hjemmedragt',
    name: 'EMS dragt Hjemmedragt',
    shortName: 'Hjemmedragt',
    price: 10000,
    currency: 'DKK',
    sku: '364215376135191',
    category: 'private',
    images: [
      { src: "/images/ems-suit.png", alt: "EMS Hjemmedragt" },
      { src: "/images/energy-box-homesuit.webp", alt: "Energy Box" },
      { src: "/images/waist-belt.png", alt: "Waist Belt" },
      { src: "/images/washing-bag.png", alt: "Washing Bag" }
    ],
    description: {
      short: "Komplet EMS træningssæt til hjemmebrug med 20 pads for maksimal muskelaktivering",
      long: "Hjemmedragten er udstyret med 20 pads, strategisk placeret på kroppens store muskelgrupper. Det betyder, at hele kroppen kan stimuleres samtidig for en komplet, balanceret og mere effektiv træning."
    },
    features: [
      "Trådløs og mobil – den lille aktivator gør træningen mere fri og ubesværet",
      "Slidstærk kvalitet – tåler mindst 100 vaske uden at miste funktionalitet", 
      "Brugervenlig teknologi – styres nemt via vores egen app på både tablet og telefon",
      "Stilrent design – moderne look, der matcher et professionelt træningsmiljø",
      "Pålidelig drift – vi sikrer hurtig levering af nye dragter og reservedele, så din træning aldrig går i stå"
    ],
    muscleCoverage: {
      pads: 20,
      areas: ["baglår", "forlår", "baller", "nedre ryg", "øvre ryg", "trapezius (kappemusklen)", "triceps", "biceps", "bryst", "mave"],
      note: "Til kvinder findes en model med 18 pads, uden dækning af brystområdet – for maksimal komfort."
    },
    packageContents: [
      "1 Hjemmedragt",
      "1 Aktivator + oplader", 
      "1 Waistbelt",
      "1 Vaskepose",
      "1 Lille taske",
      "1 Manual"
    ],
    shipping: {
      deliveryTime: "2-5 hverdage",
      freeShippingThreshold: 500,
      returnPolicy: "30 dages returret"
    },
    inStock: true,
    weight: 2.5, // kg
    dimensions: {
      length: 40,
      width: 30, 
      height: 15 // cm
    }
  },
  
  'ems-erhvervsdragt': {
    id: 'ems-erhvervsdragt',
    slug: 'ems-erhvervsdragt', 
    name: 'EMS dragt Pro dragt',
    shortName: 'Erhvervsdragt',
    price: 25000,
    currency: 'DKK',
    sku: '364215376135192',
    category: 'business',
    images: [
      { src: "/images/ems-suit.png", alt: "EMS Erhvervsdragt" },
      { src: "/images/energy-box.jpg", alt: "Professional Energy Box" },
      { src: "/images/waist-belt.png", alt: "Professional Waist Belt" },
      { src: "/images/washing-bag.png", alt: "Washing Bag" }
    ],
    description: {
      short: "Professionel EMS dragt til fitnesscentre og træningsstudier med avanceret teknologi",
      long: "Erhvervsdragten er designet til professionel brug i fitnesscentre og træningsstudier. Med robust kvalitet og avancerede funktioner til intensive træningsprogrammer."
    },
    features: [
      "Professionel kvalitet til kommerciel brug",
      "Avanceret kontrolsystem med flere træningsprogrammer",
      "Forstærket konstruktion til intensiv daglig brug", 
      "Centraliseret styring af flere dragter samtidig",
      "Dedikeret support og vedligeholdelse",
      "Branding muligheder for din virksomhed"
    ],
    muscleCoverage: {
      pads: 24,
      areas: ["baglår", "forlår", "baller", "nedre ryg", "øvre ryg", "trapezius", "triceps", "biceps", "bryst", "mave", "skuldre", "lægge"],
      note: "Erhvervsdragten har udvidet pad-placering for maksimal træningseffekt."
    },
    packageContents: [
      "1 Erhvervsdragt (professionel model)",
      "1 Avanceret kontrolenhed + oplader",
      "2 Waistbelts (small/large)", 
      "1 Professionel vaskepose",
      "1 Transportkasse",
      "1 Installations- og brugermanual",
      "1 År support og vedligeholdelse"
    ],
    shipping: {
      deliveryTime: "3-7 hverdage",
      freeShippingThreshold: 0, // Altid gratis for erhverv
      returnPolicy: "14 dages returret",
      installationService: true
    },
    inStock: true,
    weight: 4.2, // kg
    dimensions: {
      length: 50,
      width: 40,
      height: 20 // cm  
    },
    businessFeatures: {
      warranty: "2 års garanti på aktivator",
      support: "Dedikeret erhvervssupport",
      training: "Inkluderet personaletræning",
      maintenance: "Forebyggende vedligeholdelse"
    }
  }
}

// Helper functions
export function getProduct(slug) {
  return products[slug] || null
}

export function getAllProducts() {
  return Object.values(products)
}

export function getProductsByCategory(category) {
  return Object.values(products).filter(product => product.category === category)
}

export function formatPrice(price, currency = 'DKK') {
  return new Intl.NumberFormat('da-DK', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price)
}