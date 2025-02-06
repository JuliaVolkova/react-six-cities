import { useState, useRef, MutableRefObject, useEffect } from 'react';
import { Map, TileLayer } from 'leaflet';
import { MapOption } from '../const';
import { City } from '../types/offers';

function useMap(mapRef: MutableRefObject<HTMLElement | null>, city: City): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const mapInstance = new Map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude
        },
        zoom: city.location.zoom
      });

      const layer = new TileLayer(
        MapOption.URL,
        {
          attribution: MapOption.ATTRIBUTION
        }
      );

      mapInstance.addLayer(layer);

      setMap(mapInstance);
      isRenderedRef.current = true;
    }
  }, [mapRef, city]);

  return map;
}

export default useMap;
