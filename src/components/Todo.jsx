

import { useSelector, useDispatch } from "react-redux";
import {
  deleteTodo,
  markasDone,
} from "../features/todo/todoSlice";
import Addform from "./Addform";
import "./Todo.css";

export default function Todo() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos ?? []);

  const clickHandler = (id) => {
    dispatch(deleteTodo(id));
  };

  const doneHandler = (id) => {
    dispatch(markasDone(id));
  };

  return (
    <>
      <h1>TO-DO App</h1>

      <Addform />

      <ul className="todo-list">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={todo.isdone ? "todo-item completed" : "todo-item"}
          >
            <span className="todo-text">
              {todo.task}
            </span>

            <button
              className="done-button"
              onClick={() => doneHandler(todo.id)}
              disabled={todo.isdone}
            >
              {todo.isdone ? "Done ✓" : "Done"}
            </button>

            <button
              className="delete-button"
              onClick={() => clickHandler(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
