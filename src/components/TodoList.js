import React from "react";
import { addTodo, editTodo } from "../redux/actions";

import Todo from "./Todo";
import { connect } from "react-redux";

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.input = React.createRef();
    this.editing = -1;
  }

  editTodo = (index, text) => {
    // set edit flag
    this.editing = index;

    this.input.current.value = text;
    this.input.current.focus();
  };

  render() {
    console.log(this.props.todos);
    return (
      <div>
        <h2>My todo list</h2>
        <form
          onSubmit={e => {
            e.preventDefault();
            let todoText = this.input.current.value;
            if (todoText == "") {
              return false;
            }

            if (this.editing !== -1) {
              console.log("editing");
              //  dispatch editTodo action
              this.props.dispatch(editTodo(this.editing, todoText));
              // clear edit flag
              this.editing = -1;
            } else {
              //  dispatch addTodo action
              this.props.dispatch(addTodo(todoText, this.props.todos.length));
            }

            this.input.current.value = "";
          }}
        >
          <input ref={this.input} />
          <button>Sumbit</button>
        </form>
        {/* display non completed todos */}
        <Todo
          editTodo={this.editTodo}
          completed={false}
          dispatch={this.props.dispatch}
          todos={this.props.todos.filter(todo => {
            if (!todo.completed) {
              return todo;
            }
          })}
        />
        <br />

        {/* Display completed todos */}
        <Todo
          editTodo={editTodo}
          completed={true}
          dispatch={this.props.dispatch}
          todos={this.props.todos.filter(todo => {
            if (todo.completed) {
              return todo;
            }
          })}
        />
        <br />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

const TheTodoList = connect(mapStateToProps)(TodoList);

export default TheTodoList;
