// import React from "react";

// const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
//   const handleToggleTodo = () => {
//     toggleTodo(todo.id);
//   };

//   const handleDeleteTodo = () => {
//     deleteTodo(todo.id);
//   };

//   const itemStyle = {
//     textDecoration: todo.completed ? "line-through" : "none",
//     cursor: "pointer",
//     marginBottom: "10px",
//     display: "flex",
//     alignItems: "center",
//   };

//   const deleteButtonStyle = {
//     marginLeft: "10px",
//     padding: "5px 10px",
//     background: "#ff0000",
//     color: "#fff",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//   };

//   return (
//     <li onClick={handleToggleTodo} style={itemStyle}>
//       {todo.text}
//       <button onClick={handleDeleteTodo} style={deleteButtonStyle}>
//         Delete
//       </button>
//     </li>
//   );
// };

// export default TodoItem;
