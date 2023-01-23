import {Marker, Icon} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {Offer, Offers} from '../../types/offer';
import {useEffect, useRef} from 'react';
import useMap from '../../hooks/useMap';
import {URL_MARKER_CURRENT, URL_MARKER_DEFAULT} from '../../const';

type MapProps = {
  offers: Offers;
  selectedOfferId: number;
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

const Map = ({offers, selectedOfferId}: MapProps): JSX.Element => {
  const mapRef = useRef(null);
  const city = {
    name: 'Amsterdam',
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 12
    }
  };

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
    <div className="cities__right-section">
      <section
        ref={mapRef}
        className="cities__map map"
      />
    </div>
  );
};

export default Map;
