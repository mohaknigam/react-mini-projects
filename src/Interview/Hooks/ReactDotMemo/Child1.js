import React from "react";

function Child1({ name }) {
  console.log(`child1 renders ---> ${name}`);
  return <div>Child1</div>;
}

export default Child1;
