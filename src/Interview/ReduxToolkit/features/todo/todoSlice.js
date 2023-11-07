import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello Worldy" }],
};

const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    // contains properties and functions
    addTodo: (state, action) => {
      const todo = { id: nanoid(), text: action.payload.text };
      state.todos.push(todo);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions; // exporting indivisual reducers for usage in components
export default todoSlice.reducer; // exporting whole reducer for store
