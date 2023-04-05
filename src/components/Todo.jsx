import { CardBody, Text } from "@chakra-ui/react";

export const Todo = (props) => {
  const { todoText } = props;
  return (
    <CardBody>
      <Text>{todoText}</Text>
    </CardBody>
  );
};
