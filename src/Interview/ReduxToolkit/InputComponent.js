import { useDispatch } from "react-redux";
import { addTodo } from "./features/todo/todoSlice";
import { useEffect, useRef, useState } from "react";

const InputComponent = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleAdd = () => {
    dispatch(addTodo({ text }));
    setText("");
  };

  return (
    <div class="flex flex-row justify-center items-center gap-6">
      <input
        type="text"
        ref={inputRef}
        placeholder="Enter Text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        class="rounded-md text-center m-2 p-2 focus:outline-none focus:bg-green-300 focus:text-amber-700"
      />
      <button
        onClick={handleAdd}
        class="bg-cyan-500 m-2 p-2 font-semibold rounded-md"
      >
        Add Todo
      </button>
    </div>
  );
};

export default InputComponent;
