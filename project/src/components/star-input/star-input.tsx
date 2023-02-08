import { ChangeEvent } from 'react';
import { Review } from '../../types/review';

type StarInputProps = {
  isChecked: boolean,
  ratingTitle: string,
  ratingValue: number,
  ratingId: string,
  starInputChange: (newReviewData: Review) => void,
};

const StarInput = ({isChecked, ratingTitle, ratingValue, ratingId, starInputChange}: StarInputProps): JSX.Element => (
  <>
    <input
      className="form__rating-input visually-hidden"
      checked={isChecked}
      value={ratingValue}
      name="rating"
      id={ratingId}
      type="radio"
      onChange={({target}: ChangeEvent<HTMLInputElement>) => starInputChange({[target.name]: Number(target.value)})}
    />
    <label
      htmlFor={ratingId}
      className="reviews__rating-label form__rating-label"
      title={ratingTitle}
    >
      <svg className="form__star-image" width={37} height={33}>
        <use xlinkHref="#icon-star" />
      </svg>
    </label>
  </>
);

export default StarInput;
