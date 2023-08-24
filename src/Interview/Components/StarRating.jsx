import { useState } from "react";
import emptyStar from "../../images/empty-star.png";
import filledStar from "../../images/filled-star.png";
const StarRating = () => {
  const [count, setCount] = useState(0);
  const handleClick = (idx) => {
    console.log(idx);
    setCount(idx + 1);
  };
  return (
    <div className="rating-container">
      <h1>Rating - {count}</h1>
      <div className="stars-container">
        {Array(10)
          .fill("")
          .map((_, idx) => (
            <img
              src={count > idx ? filledStar : emptyStar}
              alt="img"
              key={idx}
              className="star"
              onClick={() => handleClick(idx)}
            />
          ))}
      </div>
    </div>
  );
};

export default StarRating;
