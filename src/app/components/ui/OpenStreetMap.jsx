'use client'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Custom marker icon
const createCustomIcon = () => {
  return L.divIcon({
    html: `
      <div style="
        background-color: #272727;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        border: 3px solid white;
        box-shadow: 0 2px 4px rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        justify-content: center;
      ">
        <div style="
          width: 8px;
          height: 8px;
          background-color: white;
          border-radius: 50%;
        "></div>
      </div>
    `,
    className: 'custom-marker',
    iconSize: [24, 24],
    iconAnchor: [12, 12],
    popupAnchor: [0, -12]
  })
}

export default function OpenStreetMap({
  center = { lat: 55.7171, lng: 11.7114 },
  zoom = 15,
  markers = []
}) {
  const position = [center.lat, center.lng]

  return (
    <div className="w-full h-full overflow-hidden border border-gray-200">
      <MapContainer
        center={position}
        zoom={zoom}
        style={{ height: '100%', width: '100%' }}
        zoomControl={true}
        scrollWheelZoom={true}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          maxZoom={19}
        />
        
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={[marker.position.lat, marker.position.lng]}
            icon={createCustomIcon()}
          >
            <Popup className="custom-popup">
              <div style={{ padding: '8px', minWidth: '200px' }}>
                <h3 style={{ 
                  margin: '0 0 8px 0', 
                  fontWeight: 'bold', 
                  color: '#272727',
                  fontSize: '16px'
                }}>
                  {marker.title}
                </h3>
                <p style={{ 
                  margin: '0', 
                  color: '#666',
                  fontSize: '14px',
                  lineHeight: '1.4'
                }}>
                  {marker.info}
                </p>
                <div style={{ marginTop: '12px', display: 'flex', gap: '8px' }}>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(marker.info)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: '4px 8px',
                      backgroundColor: '#272727',
                      color: 'white',
                      textDecoration: 'none',
                      borderRadius: '4px',
                      fontSize: '12px'
                    }}
                  >
                    Google Maps
                  </a>
                  <a
                    href={`http://maps.apple.com/?q=${encodeURIComponent(marker.info)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: '4px 8px',
                      backgroundColor: '#666',
                      color: 'white',
                      textDecoration: 'none',
                      borderRadius: '4px',
                      fontSize: '12px'
                    }}
                  >
                    Apple Maps
                  </a>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      
      {/* Map attribution and links */}
      <div className="bg-white p-2 text-xs text-gray-500 border-t">
        <div className="flex justify-between items-center">
          <span>© OpenStreetMap bidragydere</span>
          <div className="flex space-x-2">
            <a 
              href={`https://maps.google.com/?q=${encodeURIComponent('Nygade 6, 4300 Holbæk')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#272727] hover:underline"
            >
              Google Maps
            </a>
            <span>•</span>
            <a 
              href={`http://maps.apple.com/?q=${encodeURIComponent('Nygade 6, 4300 Holbæk')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#272727] hover:underline"
            >
              Apple Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}