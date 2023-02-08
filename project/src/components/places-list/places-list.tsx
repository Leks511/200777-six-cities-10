import {Offer, Offers} from '../../types/offer';
import PlaceCard from '../place-card/place-card';

type PlacesListProps = {
  offers: Offers;
  onPlacesListItemHover: (id: number) => void;
  additionalClasses: {[key: string]: string};
};

const PlacesList = ({offers, onPlacesListItemHover, additionalClasses}: PlacesListProps): JSX.Element => {
  const {listClasses, articleClass, imgWrapperClass} = additionalClasses;
  return (
    <div className={`${listClasses} places__list`}>
      {
        offers.map((offer: Offer) =>
          (
            <PlaceCard
              key={offer.id}
              onPlacesListItemHover={onPlacesListItemHover}
              offerData={offer}
              additionalClasses={{
                articleClass,
                imgWrapperClass
              }}
            />
          )
        )
      }
    </div>
  );
};

export default PlacesList;
