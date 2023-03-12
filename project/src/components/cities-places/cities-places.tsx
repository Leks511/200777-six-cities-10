import { useState } from 'react';
import {Offers} from '../../types/offer';
import PlacesSorter from '../places-sorter/places-sorter';
import PlacesList from '../places-list/places-list';

type CitiesPlacesProps = {
  offers: Offers;
  onPlacesListItemHover: (id: number) => void;
}

const SortVariants = {
  POPULAR: 'Popular',
  LOW_TO_HIGH: 'Price: low to high',
  HIGH_TO_LOW: 'Price: high to low',
  TOP_RATED: 'Top rated first'
};

const CitiesPlaces = (
  {offers, onPlacesListItemHover}: CitiesPlacesProps
): JSX.Element => {
  const [activeFilter, setActiveFilter] = useState<string>(SortVariants.POPULAR);

  let sortedOffers = offers.slice();

  switch(activeFilter) {
    case SortVariants.LOW_TO_HIGH:
      sortedOffers.sort((a, b) => a.price - b.price);
      break;
    case SortVariants.HIGH_TO_LOW:
      sortedOffers.sort((a, b) => b.price - a.price);
      break;
    case SortVariants.TOP_RATED:
      sortedOffers.sort((a, b) => b.rating - a.rating);
      break;
    default:
      sortedOffers = offers;
      break;
  }

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offers.length} places to stay in Amsterdam</b>
      <PlacesSorter
        sortVariants={SortVariants}
        activeFilter={activeFilter}
        onFilterVariantClick={setActiveFilter}
      />
      <PlacesList
        offers={sortedOffers}
        onPlacesListItemHover={onPlacesListItemHover}
        additionalClasses={{
          listClasses: 'cities__places-list tabs__content',
          articleClass: 'cities__card',
          imgWrapperClass: 'cities__image-wrapper'
        }}
      />
    </section>
  );
};

export default CitiesPlaces;
