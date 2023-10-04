import React from "react";

function Child2({ name }) {
  console.log(`child2 renders ---> ${name}`);

  return <div>Child2</div>;
}

// React.memo avoiding child2 component to re render
export default React.memo(Child2);
