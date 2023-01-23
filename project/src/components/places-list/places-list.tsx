import {Offer, Offers} from '../../types/offer';
import PlaceCard from '../place-card/place-card';

type PlacesListProps = {
  offers: Offers,
  onPlacesListItemHover: (id: number) => void,
};

const PlacesList = ({offers, onPlacesListItemHover}: PlacesListProps): JSX.Element => (
  <div className="cities__places-list places__list tabs__content">
    {
      offers.map((offer: Offer) =>
        (
          <PlaceCard
            onPlacesListItemHover={onPlacesListItemHover}
            key={offer.id}
            offerData={offer}
          />
        )
      )
    }
  </div>
);

export default PlacesList;
