import {useState} from 'react';
import { useParams } from 'react-router-dom';
import { Offer, Offers } from '../../types/offer';
import Rating from '../../components/rating/rating';
import Page404 from '../page-404/page-404';
import ReviewsSection from '../../components/reviews-section/reviews-section';
import {reviews} from '../../mocks/reviews';
import Map from '../../components/map/map';
import PlacesNeighbourhood from '../../components/places-neighbourhood/places-neighbourhood';

type RoomProps = {
  offers: Offers
}

const Room = ({offers}: RoomProps): JSX.Element => {
  const [selectedPlaceId, setSelectedPlaceId] = useState<number>(0);
  const {id} = useParams();

  if (!id) {
    return <Page404 />;
  }

  const roomOfferId = Number(id);
  const roomData = offers.find((offer: Offer): boolean => offer.id === roomOfferId);

  if (!roomData) {
    return <Page404 />;
  }

  const neighbourhoodPlaces = offers.filter((place) => Number(place.id) !== roomOfferId);

  const onPlacesListItemHover = (offerId: number) => setSelectedPlaceId(offerId);

  const {
    bedrooms, maxAdults, price,
    isPremium, rating, title,
    type, images, host, goods,
    description
  } = roomData;

  const {name, isPro} = host;

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#todo">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#todo">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {
                images.slice(0, 6).map((image: string) => (
                  <div key={image} className="property__image-wrapper">
                    <img className="property__image" src={image} alt="studio" />
                  </div>
                ))
              }
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {
                isPremium && (
                  <div className="property__mark">
                    <span>Premium</span>
                  </div>
                )
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className={`property__bookmark-button button ${isPremium && 'property__bookmark-button--active'}`} type="button">
                  <svg className="property__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <Rating rating={rating}/>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                    Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {
                    goods.map((good: string) => (
                      <li key={good} className="property__inside-item">
                        {good}
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper user__avatar-wrapper ${isPro && 'property__avatar-wrapper--pro'}`}>
                    <img className="property__avatar user__avatar" src="img/avatar-angelina.jpg" width={74} height={74} alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {name}
                  </span>
                  {
                    isPro && <span className="property__user-status">Pro</span>
                  }
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <ReviewsSection reviews={reviews} />
            </div>
          </div>
          <Map
            offers={offers}
            selectedOfferId={selectedPlaceId}
            className={'property__map'}
          />
        </section>
        <div className="container">
          <PlacesNeighbourhood
            offers={neighbourhoodPlaces}
            onPlacesListItemHover={onPlacesListItemHover}
          />
        </div>
      </main>
    </div>
  );
};

export default Room;
