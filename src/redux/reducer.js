import { combineReducers } from "redux";
import {
  ADD_TODO,
  TOGGLE_TODO,
  CLEAR_ALL_COMPLETED,
  EDIT_TODO
} from "./actions";

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false,
          index: action.index
        }
      ];
    case TOGGLE_TODO:
      return state.map(todo => {
        if (todo.index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          });
        }
        return todo;
      });

    case CLEAR_ALL_COMPLETED:
      return state.filter(todo => {
        if (!todo.completed) {
          return todo;
        }
      });

    case EDIT_TODO:
      return state.map(todo => {
        if (todo.index === action.index) {
          console.log(todo);
          return Object.assign({}, todo, {
            text: action.text
          });
        }
        return todo;
      });

    default:
      return state;
  }
}

const todoApp = combineReducers({
  todos
});

export default todoApp;
