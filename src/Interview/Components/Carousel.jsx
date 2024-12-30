import { useEffect, useState } from "react";
import { images } from "../Constants";

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
      <img src={images[count].imageUrl} alt="image" className="img" />
      <h3>{images[count].title}</h3>
      <h4>{images[count].description}</h4>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Carousel;
