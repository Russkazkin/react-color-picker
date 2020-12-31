import StarRating from "../StarRating/StarRating";

const Color = ({ title, color, rating = 0, onRemove = f => f, onRate = f => f }) => (
  <section className="color w-1/3 mx-2">
    <div className="color h-60 relative"
         style={{ backgroundColor: color }}>
      <h1 className="absolute w-full text-center font-bold text-white text-2xl top-1/3">{title}</h1>
      <button className="right-2 top-1 p-1 absolute text-white text-2xl" onClick={onRemove}>x</button>
    </div>
    <div>
      <StarRating starsSelected={rating} onRate={onRate} />
    </div>
  </section>
);

export default Color;
