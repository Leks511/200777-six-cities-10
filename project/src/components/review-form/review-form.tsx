import { ChangeEvent, useState } from 'react';
import { ReviewFormData } from '../../types/review';
import StarInput from '../star-input/star-input';


const ReviewForm = (): JSX.Element => {
  const [reviewFormData, setReviewFormData] = useState({
    rating: 0,
    review: ''
  });
  const {rating, review} = reviewFormData;

  const ratings: string[] = [
    'perfect',
    'good',
    'not bad',
    'badly',
    'terribly',
  ];

  const formDataChangeHandler = (newReviewData: ReviewFormData): void => {
    setReviewFormData({
      ...reviewFormData,
      ...newReviewData
    });
  };

  return (
    <form className="reviews__form form" action="#todo" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {
          ratings.map((ratingTitle, _, arr) => {
            const ratingValue = arr.length - arr.indexOf(ratingTitle);
            const inputId = `${ratingValue}-star${ratingValue > 1 ? 's' : ''}`;

            return (
              <StarInput
                key={ratingTitle}
                isChecked={rating === ratingValue}
                ratingTitle={ratingTitle}
                ratingValue={ratingValue}
                ratingId={inputId}
                starInputChange={formDataChangeHandler}
              />
            );
          })
        }
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        value={review}
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={({target}: ChangeEvent<HTMLTextAreaElement>) => {
          formDataChangeHandler({[target.name]: target.value});
        }}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
};

export default ReviewForm;
