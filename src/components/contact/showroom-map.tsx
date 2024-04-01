'use client'

import 'mapbox-gl/dist/mapbox-gl.css'

import { MapPinIcon } from 'lucide-react'
import { useMemo, useState } from 'react'
import Map, {
  Marker,
  NavigationControl,
  Popup,
  ScaleControl
} from 'react-map-gl'

import { storeLocation } from '@/data/info'

interface StoreLocation {
  name: string
  address: string
  link: string
  location: {
    longitude: number
    latitude: number
  }
  icon?: any
}

export const ShowroomMap = () => {
  const [popupInfo, setPopupInfo] = useState<StoreLocation | null>()

  const pins = useMemo(
    () => (
      <Marker
        longitude={storeLocation.location.longitude}
        latitude={storeLocation.location.latitude}
        anchor='bottom'
        onClick={e => {
          e.originalEvent.stopPropagation()
          setPopupInfo(storeLocation)
        }}
      >
        <div className='flex cursor-pointer flex-col items-center'>
          <MapPinIcon className='size-6 text-pink-600' />
        </div>
      </Marker>
    ),
    []
  )

  return (
    <Map
      style={{ width: '100%', height: '100%' }}
      mapStyle={process.env.NEXT_PUBLIC_MAPBOX_STYLE_URL}
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
      initialViewState={{
        latitude: storeLocation.location.latitude,
        longitude: storeLocation.location.longitude,
        zoom: 12,
        bearing: 0,
        pitch: 0
      }}
      maxZoom={15}
      minZoom={4}
    >
      <NavigationControl position='top-left' />
      <ScaleControl />

      {pins}

      {popupInfo && (
        <Popup
          anchor='top'
          longitude={storeLocation.location.longitude}
          latitude={storeLocation.location.latitude}
          closeButton={false}
          onClose={() => setPopupInfo(null)}
        >
          <div>
            {popupInfo && (
              <div>
                <div className='text-base font-bold uppercase text-pink-700'>
                  {popupInfo.name}
                </div>
                <div className='mt-2 text-sm font-medium'>
                  {popupInfo.address}
                </div>
              </div>
            )}
          </div>
        </Popup>
      )}
    </Map>
  )
}
