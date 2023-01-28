import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { useApp } from "../../context";

const Experiences: React.FC = () => {
  const { experiences }: any = useApp();
  return (
    <Flex>
      {experiences && (
        <Text fontSize={"1.5rem"} color="#d5ccff">
          Professional Experiences
        </Text>
      )}
    </Flex>
  );
};

export default Experiences;
