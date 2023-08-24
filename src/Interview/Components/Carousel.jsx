import { useEffect, useState } from "react";
import { items } from "../Constants";

const Carousel = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => (prevCount + 1) % 3);
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handlePrevious = () => {
    setCount((count - 1 + 3) % 3);
  };
  const handleNext = () => {
    setCount((count + 1) % 3);
  };
  return (
    <div className="rating-container">
      <button onClick={handlePrevious}>Prev</button>
      <img src={items[count].imageUrl} alt="image" className="img" />
      <h3>{items[count].title}</h3>
      <h4>{items[count].description}</h4>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Carousel;
