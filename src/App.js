import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";

import { ChakraProvider, Heading } from "@chakra-ui/react";
import { useState } from "react";

import "./App.css";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const onChange = (e) => {
    setTodo(e.target.value);
  };

  const addTodo = () => {
    if (todo !== "") {
      setTodoList([...todoList, todo]);
      setTodo("");
    }
  };

  const deleteTodo = (todoText) => {
    const newTodoList = todoList.filter((todo) => todo !== todoText);
    setTodoList(newTodoList);
  };

  return (
    <ChakraProvider>
      <div className="App">
        <Heading className="todo-header">To-Do App</Heading>
        <div className="todo-container">
          <TodoList list={todoList} deleteTodo={deleteTodo} />
        </div>
        <div className="todo-input-container">
          <TodoInput todo={todo} addTodo={addTodo} onChange={onChange} />
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;
