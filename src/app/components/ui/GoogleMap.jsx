'use client'

import { useEffect } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import the map component to avoid SSR issues
const DynamicMap = dynamic(() => import('./OpenStreetMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
      <div className="text-center p-8">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#272727] mx-auto mb-4"></div>
        <p className="text-gray-600">Indlæser kort...</p>
      </div>
    </div>
  )
})

export default function MapContainer({ 
  center = { lat: 55.7171, lng: 11.7114 }, 
  zoom = 15, 
  markers = [],
  className = "w-full h-full rounded-lg"
}) {
  return (
    <div className={className}>
      <DynamicMap 
        center={center}
        zoom={zoom}
        markers={markers}
      />
    </div>
  )
}