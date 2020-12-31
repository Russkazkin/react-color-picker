import Star from "./Star/Star";

const StarRating = ({starsSelected = 0, totalStars = 5, onRate = f => f}) => (
  <div className="star-rating clear-both pb-7 mb-5">
    {[...Array(totalStars)].map((n, i) =>
      <Star key={i} selected={i < starsSelected} onClick={() => onRate(i + 1)}/>
    )}
    <p className="py-1 float-right">{starsSelected} of {totalStars} stars</p>
  </div>
);

export default StarRating;
