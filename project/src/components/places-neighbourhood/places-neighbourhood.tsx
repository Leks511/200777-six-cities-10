import {Offers} from '../../types/offer';
import PlacesList from '../places-list/places-list';

type PlacesNeighbourhoondProps = {
  offers: Offers;
  onPlacesListItemHover: (id: number) => void;
}

const PlacesNeighbourhoond = (
  {offers, onPlacesListItemHover}: PlacesNeighbourhoondProps
): JSX.Element => (
  <section className="near-places places">
    <h2 className="near-places__title">Other places in the neighbourhood</h2>
    <PlacesList
      offers={offers}
      onPlacesListItemHover={onPlacesListItemHover}
      additionalClasses={{
        listClasses: 'near-places__list',
        articleClass: 'near-places__card',
        imgWrapperClass: 'near-places__image-wrapper'
      }}
    />
  </section>
);

export default PlacesNeighbourhoond;
