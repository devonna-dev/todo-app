import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";

export const TodoInput = (props) => {
  const { todo, addTodo, onChange } = props;

  return (
    <div>
      <InputGroup>
        <Input placeholder="Add a task" value={todo} onChange={onChange} />;
        <InputRightElement>
          <Button colorScheme="green" onClick={addTodo}>
            Add
          </Button>
        </InputRightElement>
      </InputGroup>
    </div>
  );
};
