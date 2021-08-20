import React from "react";
import ReactDOM from "react-dom";
import TheTodoList from "./components/TodoList";
import { Provider } from "react-redux";
import { createStore } from "redux";

import todoApp from "./redux/reducer";

const store = createStore(todoApp);

export default class TodoReactReduxApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <TheTodoList />
      </Provider>
    )
  }
}

ReactDOM.render(<TodoReactReduxApp />, document.getElementById('container'))


