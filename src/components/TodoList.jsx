import { Text } from "@chakra-ui/react";
import { Todo } from "./Todo";

export const TodoList = (props) => {
  const { list } = props;

  return (
    <>
      {list?.length > 0 ? (
        <div className="todo-list">
          {list.map((todoText, index) => (
            <Todo todoText={todoText} key={index} />
          ))}
        </div>
      ) : (
        <div>
          <Text>No tasks</Text>
        </div>
      )}
    </>
  );
};
