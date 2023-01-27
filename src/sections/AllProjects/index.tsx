import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import LoadMore from "../../components/LoadMore";
import { useApp } from "../../context";

const AllProjects: React.FC = () => {
  const { repos }: any = useApp();

  return (
    <Flex gap="24px" direction="column">
      {repos && (
        <>
          <Flex>
            <Text fontSize={"1.5rem"} color="#d5ccff">
              All Projects ({repos.length})
            </Text>
          </Flex>
          <LoadMore repos={repos} />
        </>
      )}
    </Flex>
  );
};

export default AllProjects;
