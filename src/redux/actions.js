export const ADD_TODO = "ADD_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const CLEAR_ALL_COMPLETED = "CLEAR_ALL_COMPLETED";

export function addTodo(text, index) {
  return { type: ADD_TODO, text, index };
}

export function editTodo(index, text) {
  return {
    type: EDIT_TODO,
    index: index,
    text: text
  };
}

export function toggleTodo(index) {
  return { type: TOGGLE_TODO, index };
}

export function clearAllTodos() {
  return {
    type: CLEAR_ALL_COMPLETED
  };
}
