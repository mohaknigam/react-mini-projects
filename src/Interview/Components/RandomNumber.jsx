import { useState } from "react";
const RandomNumber = () => {
  const [number, setNumber] = useState("0000");

  const sleep = (milliseconds) => {
    return new Promise((resolve) => {
      setInterval(resolve, milliseconds);
    });
  };

  const createRandomNumber = async () => {
    await sleep(10);

    const date = new Date();
    const currTime = date.getTime().toString();

    const fourDigNumber = currTime.slice(-4);

    const rearrangedNumber = (parseInt(fourDigNumber) % 9000) + 1000;

    return rearrangedNumber.toString();
  };

  const handleClick = () => {
    createRandomNumber().then((result) => {
      setNumber(result);
    });
  };
  return (
    <div>
      <p>{"Number : " + number}</p>
      <button onClick={handleClick}>Generate new number</button>
    </div>
  );
};

export default RandomNumber;
