import ReviewsItem from '../reviews-item/reviews-item';
import {Reviews} from '../../types/review';

type ReviewsListProps = {
  reviews: Reviews;
};

const ReviewsList = ({reviews}: ReviewsListProps): JSX.Element => (
  <ul className="reviews__list">
    {
      reviews.map((reviewData) =>
        <ReviewsItem key={reviewData.id} review={reviewData} />)
    }
  </ul>
);

export default ReviewsList;
