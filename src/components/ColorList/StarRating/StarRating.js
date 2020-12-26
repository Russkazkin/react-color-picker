const StarRating = ({starsSelected = 0, totalStars = 5, onRate = f => f}) => (
  <div className="star-rating">
    {[...Array(totalStars)].map((n, i) =>
      <Star key={i} selected={i < starsSelected} onClick={onRate}/>
    )}
    <p>{starsSelected} of {totalStars} stars</p>
  </div>
);

export default StarRating;
