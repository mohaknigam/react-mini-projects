import { useEffect, useRef, useState } from "react";
import { dummyList } from "../Constants";

const SearchFeature = () => {
  const [text, setText] = useState("");
  const [filteredList, setFilteredList] = useState(dummyList);
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleOnChnage = (e) => {
    const typedText = e.target.value;
    setText(typedText);

    // filtering on dummyList (i.e the constant list) and not on filtered List
    const filter = dummyList.filter((string) => {
      return string.startsWith(typedText);
    });
    setFilteredList(filter);
  };
  return (
    <div className="rating-container">
      <input
        type="text"
        ref={inputRef}
        value={text}
        placeholder="search"
        onChange={handleOnChnage}
      />
      <ul>
        {filteredList.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default SearchFeature;
