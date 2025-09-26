import SectionHeader from '../components/ui/SectionHeader'
import MapContainer from '../components/ui/GoogleMap'
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa'

export const metadata = {
  title: 'Vores Centre | EMS dragt',
  description: 'Find vores EMS træningscentre og kontaktinformation. Besøg os i Holbæk for professionel EMS træning.',
}

export default function Centre() {
  const centerInfo = {
    name: "Holbæk",
    address: "Center: Nygade, 6, kl. 4300 Holbæk",
    contacts: [
      {
        name: "Felix",
        email: "Felix@emsdragt.dk",
        phone: "+45 26 35 16 77"
      },
      {
        name: "Annette",
        email: "Annette@emsdragt.dk", 
        phone: "+45 31 38 03 07"
      }
    ],
    openingHours: [
      { days: "Man - Fre", hours: "08:00 - 20:00" },
      { days: "Lørdag", hours: "09:00 - 19:00" },
      { days: "Søndag", hours: "09:00 - 21:00" }
    ],
    coordinates: {
      lat: 55.7171,
      lng: 11.7114
    }
  }

  return (
    <div className="bg-white text-black">

      {/* Header Section */}
      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl  uppercase ">
              Besøg Vores Centre
            </h1>
            <div className="space-y-6 leading-relaxed max-w-3xl mx-auto">
              <p>
                Find dit nærmeste EMS træningscenter og oplev professionel 
                EMS-træning i trygge og moderne rammer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Center Information Section */}
      <section className="bg-[#272727] text-white section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
            
            {/* Center Information */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                  {centerInfo.name}
                </h2>
                
                {/* Address */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Addresse</h3>
                  <p>{centerInfo.address}</p>
                </div>

                {/* Contact Information */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Kontakt</h3>
                  <div className="space-y-3">
                    {centerInfo.contacts.map((contact, index) => (
                      <div key={index} className="space-y-1">
                        <p className="font-medium">{contact.name}</p>
                        <p>
                          <a href={`mailto:${contact.email}`} className="hover:underline">
                            {contact.email}
                          </a>
                        </p>
                        <p>
                          <a href={`tel:${contact.phone}`} className="hover:underline">
                            {contact.phone}
                          </a>
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Social Media Icons */}
                  <div className="flex space-x-3 mt-4">
                    <a href="#" className="w-8 h-8 bg-[#272727] rounded-full flex items-center justify-center text-white hover:bg-gray-600 transition-colors">
                      <FaFacebook className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-8 h-8 bg-[#272727] rounded-full flex items-center justify-center text-white hover:bg-gray-600 transition-colors">
                      <FaInstagram className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-8 h-8 bg-[#272727] rounded-full flex items-center justify-center text-white hover:bg-gray-600 transition-colors">
                      <FaTiktok className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Opening Hours */}
                
              </div>
            </div>

            {/* Map */}
            <div className="lg:col-span-2 lg:h-[600px] h-[400px]">
              <MapContainer 
                center={centerInfo.coordinates}
                zoom={15}
                markers={[
                  {
                    position: centerInfo.coordinates,
                    title: centerInfo.name,
                    info: centerInfo.address
                  }
                ]}
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}