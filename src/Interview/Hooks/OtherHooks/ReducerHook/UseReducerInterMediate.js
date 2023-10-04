import React, { useReducer, useState } from "react";

const ACTIONS = {
  ADD_TODO: "add-to",
  DELETE_TODO: "delete-todo",
  TOGGLE_TODO: "toggle-todo",
};

const reducer = (currState, { type, payload }) => {
  switch (type) {
    case ACTIONS.ADD_TODO:
      return [...currState, newTodo(payload.name)];
    case ACTIONS.DELETE_TODO:
      const newList = currState.filter((item) => item.id !== payload.id);
      return newList;
    case ACTIONS.TOGGLE_TODO:
      const updatedList = currState.map((item) => {
        if (item.id === payload.id) {
          return { ...item, complete: !item.complete };
        }
        return item;
      });

      return updatedList;
    default:
      return currState;
  }
};

const newTodo = (name) => {
  return { id: Date.now(), name: name, complete: false };
};

function UseReducerInterMediate() {
  const [finalState, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");
  console.log(finalState);
  const handleSubmit = (e) => {
    /* In a form submission context, e.preventDefault() is used to prevent the default behavior of the browser, which is to reload the page when a form is submitted. If you don't use e.preventDefault(), the browser will reload the page, which is usually not desired in modern single-page applications (SPAs) built with React or other JavaScript frameworks. */

    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName("");
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>

      <div>
        {finalState
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((item) => {
            return (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "15px",
                }}
              >
                <h3
                  key={item.id}
                  style={{
                    textDecoration:
                      item.complete === true ? "line-through" : "",
                  }}
                >
                  {item.name}
                </h3>
                <button
                  onClick={() =>
                    dispatch({
                      type: ACTIONS.TOGGLE_TODO,
                      payload: { id: item.id },
                    })
                  }
                >
                  Toggle
                </button>
                <button
                  onClick={() => {
                    dispatch({
                      type: ACTIONS.DELETE_TODO,
                      payload: { id: item.id },
                    });
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default UseReducerInterMediate;
