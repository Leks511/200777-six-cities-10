import ReviewsForm from '../reviews-form/reviews-form';
import ReviewsList from '../reviews-list/reviews-list';
import {Reviews} from '../../types/review';

type ReviewsSectionProps = {
  reviews: Reviews;
};

const ReviewsSection = ({reviews}: ReviewsSectionProps): JSX.Element => (
  <section className="property__reviews reviews">
    <h2 className="reviews__title">Reviews · <span className="reviews__amount">{reviews.length}</span></h2>
    <ReviewsList reviews={reviews} />
    <ReviewsForm />
  </section>
);

export default ReviewsSection;
