import {useState} from 'react';
import {Offers} from '../../types/offer';
import Places from '../places/places';
import Map from '../map/map';

type CitiesProps = {
  offers: Offers;
}

const Cities = ({offers}: CitiesProps): JSX.Element => {
  const [selectedPlaceId, setSelectedPlaceId] = useState<number>(0);

  const onPlacesListItemHover = (id: number) => setSelectedPlaceId(id);

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <Places
          offers={offers}
          onPlacesListItemHover={onPlacesListItemHover}
        />
        <Map
          offers={offers}
          selectedOfferId={selectedPlaceId}
        />
      </div>
    </div>
  );
};

export default Cities;
