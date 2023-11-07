import React from "react";
import { useSelector } from "react-redux";
import ListTileItem from "./ListTileItem";

const Lists = () => {
  const todos = useSelector((state) => state.todo.todos);
  console.log(todos);
  return (
    <div class="flex flex-col gap-6">
      {todos.map((item) => {
        return <ListTileItem key={item.id} title={item.text} id={item.id} />;
      })}
    </div>
  );
};

export default Lists;
