import { Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import { RepoCard } from "../../components";
import { useApp } from "../../context";
import { useDevice } from "../../hooks/useDevice";

const AllProjects: React.FC = () => {
  const { repos }: any = useApp();
  const { mobile } = useDevice();

  return (
    <Flex gap="24px" direction="column" >
      {repos && (
        <>
          <Flex>
            <Text fontSize={"1.5rem"} color="#d5ccff">
              All Projects ({repos.length})
            </Text>
          </Flex>
          <Grid
            templateColumns={mobile ? "repeat(1, 1fr)" : "repeat(2, 1fr)"}
            gap={6}
          >
            {repos.map((item: any, index: number) => {
              return (
                <GridItem key={index}>
                  <RepoCard
                    link={item.clone_url}
                    title={item.name}
                    description={item.description}
                  />
                </GridItem>
              );
            })}
          </Grid>
        </>
      )}
    </Flex>
  );
};

export default AllProjects;
