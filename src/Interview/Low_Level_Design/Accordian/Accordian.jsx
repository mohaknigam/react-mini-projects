import React, { useState } from "react";
import AccordianItem from "./AccordianItem";
import { accordianData } from "../../Constants";

const Accordian = () => {
  const [activeTile, setActiveTile] = useState(0);
  console.log(accordianData);

  return (
    <div>
      {accordianData.map(({ id, title, description }, idx) => {
        return (
          <AccordianItem
            key={id}
            title={title}
            description={description}
            isOpen={idx === activeTile}
            handleTitleClick={() =>
              setActiveTile(idx === activeTile ? null : idx)
            }
          />
        );
      })}
    </div>
  );
};

export default Accordian;
