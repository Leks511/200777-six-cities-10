import { Offer, Offers } from '../../types/offer';
import CityPlacesList from '../city-places-list/city-places-list';

type FavoritesListProps = {
  offers: Offers
}

const FavoritesList = ({offers}: FavoritesListProps): JSX.Element => {
  const cities = [...new Set(offers.map((it: Offer): string => it.city.name))];

  return (
    <ul className="favorites__list">
      {
        cities.map((city: string) => {
          const places = offers.filter((offer: Offer) => offer.city.name === city);
          return <CityPlacesList key={city} city={city} places={places} />;
        })
      }
    </ul>
  );
};

export default FavoritesList;
