import React, { useReducer } from "react";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { ...state, text: state.text + 1 };
    case ACTIONS.DECREMENT:
      return { ...state, text: state.text - 1 };

    default:
      return state;
  }
};

function UseReducerBasic() {
  const [finalState, dispatch] = useReducer(reducer, { text: 0 });
  return (
    <div>
      <button onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>-</button>
      <span style={{ margin: "10px", padding: "10px" }}>{finalState.text}</span>
      <button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>+</button>
    </div>
  );
}

export default UseReducerBasic;
