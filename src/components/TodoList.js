import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo, toggleTodo, deleteTodo } from "../actions/actions";

const TodoList = ({ todos, addTodo, toggleTodo, deleteTodo }) => {
  const [text, setText] = useState("");

  const handleAddTodo = () => {
    if (text.trim() !== "") {
      addTodo(text);
      setText("");
    }
  };

  const handleToggleTodo = (id) => {
    toggleTodo(id);
  };

  const handleDeleteTodo = (id) => {
    deleteTodo(id);
  };

  return (
    <div className="p-5">
      <h1>Todo List</h1>
      <div className="mb-3 d-flex justify-content-start align-items-center">
        <input
          className="me-2"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="btn btn-success" onClick={handleAddTodo}>Add</button>
      </div>
      <ul className="me-auto">
        {todos.map((todo) => (
          <li className="list-unstyled border border-2 mb-3 d-flex justify-content-between align-items-center p-2 rounded-pill w-50 fw-bold px-3"
            key={todo.id}
            onClick={() => handleToggleTodo(todo.id)}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
          >
            {todo.text}
            <button className="btn btn-danger p-1" onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

export default connect(mapStateToProps, { addTodo, toggleTodo, deleteTodo })(
  TodoList
);
