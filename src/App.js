import React from "react";
import { Provider } from "react-redux";
import TodoList from "./components/TodoList";
import store from "./redux/store";


function App() {
  return (
    <Provider store={store}>
      <div className="App text-light bg-dark vh-100">
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
