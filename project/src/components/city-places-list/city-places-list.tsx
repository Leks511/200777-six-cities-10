import { Offers } from '../../types/offer';
import PlaceCardMini from '../palce-card-mini/place-card-mini';

type CityPlacesListProps = {
  city: string,
  places: Offers,
}

const CityPlacesList = ({city, places}: CityPlacesListProps): JSX.Element => (
  <li className="favorites__locations-items">
    <div className="favorites__locations locations locations--current">
      <div className="locations__item">
        <a className="locations__item-link" href="#todo">
          <span>{city}</span>
        </a>
      </div>
    </div>
    <div className="favorites__places">
      {
        places.map((offer) => <PlaceCardMini key={offer.id} offerData={offer} />)
      }
    </div>
  </li>
);

export default CityPlacesList;
