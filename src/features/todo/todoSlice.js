// import { createSlice ,nanoid } from '@reduxjs/toolkit'

// const initialState = {
//   todos: [{
//     id: "abc",
//     task: 'demo task',
//     isdone: false
//   }],
// };

// export const todoSlice = createSlice({
//   name: 'todo',
//   initialState,
//     reducers: {
//         addTodo: (state, action) => {
//            const addtodo = ({
//                 id: nanoid(),
//                 task: action.payload,
//                 isdone: false
//             })
//             state.todos.push(addtodo);
//         },
//         deleteTodo: (state, action) => {
//             state.todos = state.todos.filter(todo => todo.id !== action.payload);
//         },
//         markasDone: (state, action) => {
//             state.todos = state.todos.map(todo => {
//                 if(todo.id === action.payload){
//                     todo.isdone = true;
            
//                 }
//     });
//      },
//       },
// });
// export const { addTodo, deleteTodo, markasDone } = todoSlice.actions;
// export default todoSlice.reducer;

import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: "abc",
      task: "demo task",
      isdone: false,
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const addtodo = {
        id: nanoid(),
        task: action.payload,
        isdone: false,
      };

      state.todos.push(addtodo);
    },

    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
    },

    markasDone: (state, action) => {
      const todo = state.todos.find(
        (todo) => todo.id === action.payload
      );

      if (todo) {
        todo.isdone = true;
      }
    },
  },
});

export const { addTodo, deleteTodo, markasDone } =
  todoSlice.actions;

export default todoSlice.reducer;
