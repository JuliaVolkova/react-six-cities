import { useEffect, useRef } from 'react';
import { Icon, Marker, layerGroup } from 'leaflet';
import useMap from '../../hooks/use-map';
import { Offer, City, Place } from '../../types/offers.ts';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  offers: Offer[];
  activeOffer?: string;
  city: City;
  place: Omit<Place, 'Favorites'>;
}

const defaultIcon = new Icon({
  iconUrl: 'img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [13, 39]
});
const currentIcon = new Icon({
  iconUrl: 'img/pin-active.svg',
  iconSize: [27, 39],
  iconAnchor: [13, 39]
});

function Map({offers, activeOffer, city, place = 'Cities'}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      map.setView([city.location.latitude, city.location.longitude], city.location.zoom);
      offers.forEach((card) => {
        const marker = new Marker({
          lat: card.location.latitude,
          lng: card.location.longitude
        });
        marker
          .setIcon(
            activeOffer && activeOffer === card.id ? currentIcon : defaultIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }

  }, [map, offers, activeOffer, city]);

  return (
    <section className={`${place.toLowerCase()}__map map`} ref={mapRef} data-testid='map'></section>
  );
}

export default Map;
