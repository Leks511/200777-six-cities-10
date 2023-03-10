import {useState} from 'react';
import {Offers} from '../../types/offer';
import Places from '../places/places';
import Map from '../map/map';
import {PlacesRootComponent} from '../../const';

type CitiesProps = {
  offers: Offers;
}

const Cities = ({offers}: CitiesProps): JSX.Element => {
  const [selectedPlaceId, setSelectedPlaceId] = useState(0);

  const onPlacesListItemHover = (id: number) => setSelectedPlaceId(id);

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <Places
          offers={offers}
          onPlacesListItemHover={onPlacesListItemHover}
          rootComponent={PlacesRootComponent.CITIES}
        />
        <div className="cities__right-section">
          <Map
            offers={offers}
            selectedOfferId={selectedPlaceId}
            className="cities__map"
          />
        </div>
      </div>
    </div>
  );
};

export default Cities;
