"use client"

import { AdvancedMarker, APIProvider, Map, Pin } from '@vis.gl/react-google-maps';
import { mapsApi, mapsId } from '@/sanity/env';

export default function LocationMap({ lat, lng }) {

  const position = { lat: lat, lng: lng }

  return (
    <APIProvider apiKey={mapsApi}>
      <div className='w-full h-96'>
        <Map
          defaultZoom={15}
          defaultCenter={position}
          mapId={mapsId}
          style={{ width: '100%', height: '100%' }}
        >
          <AdvancedMarker position={position} />
        </Map>

      </div>
    </APIProvider>
  );
}