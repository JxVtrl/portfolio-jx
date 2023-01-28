import { Flex, Text, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { RepoCard } from "../../components";
import { useApp } from "../../context";
import { useDevice } from "../../hooks/useDevice";

const LastUpdated: React.FC = () => {
  const { lastRepos }: any = useApp();
  const { mobile } = useDevice();
  return (
    <Flex gap="24px" direction="column">
      {lastRepos && (
        <>
          <Flex>
            <Text fontSize={"1.5rem"} color="#d5ccff">
              Last Updated ({lastRepos.length})
            </Text>
          </Flex>
          <Grid
            templateColumns={mobile ? "repeat(1, 1fr)" : "repeat(2, 1fr)"}
            gap={6}
          >
            {lastRepos.map((item: any, index: number) => {
              return (
                <GridItem key={index}>
                  <RepoCard
                    link={item.link}
                    title={item.name}
                    description={item.description}
                    stats={{
                      text: "🧑🏻‍💻 Building...",
                      color: "#f5f57f",
                    }}
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

export default LastUpdated;
