import {Offers} from '../../types/offer';
import PlacesList from '../places-list/places-list';
import PlacesFilter from '../places-filter/places-filter';
import {PlacesRootComponent} from '../../const';


type PlacesProps = {
  offers: Offers;
  onPlacesListItemHover: (id: number) => void;
  rootComponent: string;
}

const Places = ({offers, onPlacesListItemHover, rootComponent}: PlacesProps): JSX.Element => {
  let placesComponent;
  switch (rootComponent) {
    case PlacesRootComponent.CITIES:
      placesComponent = (
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offers.length} places to stay in Amsterdam</b>
          <PlacesFilter />
          <PlacesList
            offers={offers}
            onPlacesListItemHover={onPlacesListItemHover}
            additionalClasses={{
              listClasses: 'cities__places-list tabs__content',
              articleClass: 'cities__card',
              imgWrapperClass: 'cities__image-wrapper'
            }}
          />
        </section>
      );
      break;
    case PlacesRootComponent.ROOM:
      placesComponent = (
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
      break;
  }
  return <> {placesComponent} </>;
};

export default Places;
