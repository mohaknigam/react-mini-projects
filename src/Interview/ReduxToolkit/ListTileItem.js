import React from "react";
import { deleteTodo } from "./features/todo/todoSlice";
import { useDispatch } from "react-redux";

const ListTileItem = ({ title, id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteTodo({ id }));
  };
  return (
    <div class="flex flex-row gap-5 justify-center items-center">
      <h3 class="w-2/5 bg-red-600 text-white max-w-40 whitespace-pre-wrap">
        {title}
      </h3>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default ListTileItem;
