import { Card, CardBody, CardFooter, Text, Button } from "@chakra-ui/react";

export const Todo = (props) => {
  const { todoText } = props;
  return (
    <Card variant="outline">
      <CardBody>
        <Text>{todoText}</Text>
      </CardBody>
      <CardFooter>
        <Button variant="solid" colorScheme="red" onClick={() => {}}>
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
};
