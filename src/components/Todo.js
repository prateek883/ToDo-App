import React from "react";
import {
  clearAllTodos,
  CLEAR_ALL_COMPLETED,
  toggleTodo
} from "../redux/actions";

export default function Todo({ todos, dispatch, completed, editTodo }) {
  return (
    <div>
      <br />
      {completed && todos.length ? (
        <label>completed todos are below</label>
      ) : (
        ""
      )}
      {todos.map(todo => {
        return (
          <div key={todo.index}>
            <input
              name={todo.text}
              checked={todo.completed}
              onChange={e => {
                console.log("triggered");
                e.preventDefault();

                // dispatch complete action
                dispatch(toggleTodo(todo.index));
              }}
              type="checkbox"
              value={todo.text}
            />
            <label
              onClick={e => {
                // edit triggered.

                editTodo(todo.index, e.target.innerHTML);
              }}
            >
              {todo.text}
            </label>
          </div>
        );
      })}
      <br />
      {completed && todos.length ? (
        <button
          onClick={e => {
            dispatch(clearAllTodos(CLEAR_ALL_COMPLETED));
          }}
        >
          Clear all completed
        </button>
      ) : (
        ""
      )}
    </div>
  );
}
