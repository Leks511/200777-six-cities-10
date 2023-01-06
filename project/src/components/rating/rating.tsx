type RatingProps = {
  rating: number,
}

const Rating = ({rating} : RatingProps): JSX.Element => <span style={{ width: `${rating / 5 * 100}%` }} />;

export default Rating;
