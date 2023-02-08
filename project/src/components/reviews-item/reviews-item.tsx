import {Review} from '../../types/review';
import UserCard from '../user-card/user-card';

type ReviewsItemProps = {
  review: Review
}

const ReviewsItem = ({review}: ReviewsItemProps): JSX.Element => {
  const a = 1;
  return (
    <li className="reviews__item">
      <UserCard />
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: '80%'}} />
            <span className="visually-hidden">Rating {a}</span>
          </div>
        </div>
        <p className="reviews__text">
          A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
        </p>
        <time className="reviews__time" dateTime="2019-04-24">April 2019</time>
      </div>
    </li>
  );
};

export default ReviewsItem;
