import 'leaflet/dist/leaflet.css';
import {Icon, Marker} from 'leaflet';
import {useEffect, useRef} from 'react';
import useMap from '../../hooks/useMap';
import {URL_MARKER_CURRENT, URL_MARKER_DEFAULT} from '../../const';
import {Offers, Offer} from '../../types/offer';

type MapProps = {
  selectedOfferId: number;
  className: string;
  offers: Offers;
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const Map = (
  {selectedOfferId, offers, className = ''}: MapProps
): JSX.Element => {
  const {city} = offers[0];

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      offers.forEach((place: Offer) => {
        const marker = new Marker({
          lat: place.location.latitude,
          lng: place.location.longitude,
        });

        marker
          .setIcon(place.id === selectedOfferId
            ? currentCustomIcon
            : defaultCustomIcon)
          .addTo(map);
      });
    }
  }, [map, offers, selectedOfferId]);

  return (
    <section
      ref={mapRef}
      className={`map ${className}`}
    />
  );
};

export default Map;
