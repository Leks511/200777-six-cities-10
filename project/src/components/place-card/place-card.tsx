import { Link } from 'react-router-dom';
import { Offer } from '../../types/offer';
import Rating from '../rating/rating';
import PremiumMark from '../premium-mark/premium-mark';
import { AppRoute } from '../../const';

type PlaceCardProps = {
  offerData: Offer,
  onPlacesListItemHover: (id: number) => void,
  additionalClasses: {[key: string]: string}
};

const PlaceCard = ({offerData, onPlacesListItemHover, additionalClasses}: PlaceCardProps): JSX.Element => {
  const {previewImage, price, isFavorite, isPremium, rating, title, type, id} = offerData;
  const {articleClass, imgWrapperClass} = additionalClasses;

  const placeCardMouseEnterHandler = () => onPlacesListItemHover(id);

  return (
    <article
      onMouseEnter={placeCardMouseEnterHandler}
      className={`${articleClass} place-card`}
    >
      {isPremium && <PremiumMark />}
      <div className={`${imgWrapperClass} place-card__image-wrapper`}>
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${isFavorite && 'place-card__bookmark-button--active'}`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <Rating rating={rating} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

export default PlaceCard;
