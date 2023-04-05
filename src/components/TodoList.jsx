import { Text, Button, CardFooter, Card } from "@chakra-ui/react";
import { Todo } from "./Todo";

export const TodoList = (props) => {
  const { list, deleteTodo } = props;

  return (
    <>
      {list?.length > 0 ? (
        <div className="todo-list">
          {list.map((todoText, index) => (
            <div className="todo" key={`todo-${index}`}>
              <Card key={`card-${index}`}>
                <Todo todoText={todoText} key={`todo-${index}`} />
                <CardFooter key={`card-footer-${index}`}>
                  <Button
                    variant="solid"
                    colorScheme="red"
                    key={`button-${index}`}
                    onClick={() => {
                      deleteTodo(todoText);
                    }}
                  >
                    Delete
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-todo">
          <Text>No tasks. Add some below!</Text>
        </div>
      )}
    </>
  );
};
