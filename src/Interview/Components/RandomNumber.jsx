import { useState } from "react";
const RandomNumber = () => {
  const [number, setNumber] = useState("0000");

  const sleep = (milliseconds) => {
    return new Promise((resolve) => {
      setTimeout(resolve, milliseconds);
    });
  };

  const createRandomNumber = async () => {
    await sleep(10);

    const date = new Date();
    const currTime = date.getTime().toString();

    const fourDigNumber = currTime.slice(-4);

    /* to convert 0937 or 0023 or 0003 type of numbers into proper 4 digit numbers with no zeroes at starting */
    const rearrangedNumber = (parseInt(fourDigNumber) % 9000) + 1000;

    return rearrangedNumber.toString();
  };

  const handleClick = async () => {
    const result = await createRandomNumber();
    setNumber(result);
  };
  return (
    <div>
      <p>{"Number : " + number}</p>
      <button onClick={handleClick}>Generate new number</button>
    </div>
  );
};

export default RandomNumber;
