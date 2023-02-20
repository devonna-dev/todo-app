import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";

import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";

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
  return (
    <ChakraProvider>
      <div className="App">
        <div className="todo-container">
          <TodoList list={todoList} />
        </div>
        <div className="todo-input-container">
          <TodoInput todo={todo} addTodo={addTodo} onChange={onChange} />
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;
