import { Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import { RepoCard } from "../../components";
import { useApp } from "../../context";
import { useDevice } from "../../hooks/useDevice";
import { GithubRepo } from "../../interface/gh.interface";

const FavoriteProjects: React.FC = () => {
  const { favorites }: any = useApp();
  const { mobile } = useDevice();
  return (
    <Flex gap="24px" direction="column">
      {favorites && (
        <>
          <Flex>
            <Text fontSize={"1.5rem"} color="#d5ccff">
              Favorite Projects ({favorites.length})
            </Text>
          </Flex>
          <Grid
            templateColumns={mobile ? "repeat(1, 1fr)" : "repeat(2, 1fr)"}
            gap={6}
          >
            {favorites.map((item: any, index: number) => {
              console.log(item);
              return (
                <GridItem key={index}>
                  <RepoCard
                    link={item.link}
                    title={item.repo}
                    description={item.description}
                    obs={
                      {
                        color: item.languageColor,
                        text: item.language
                      }
                    }
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

export default FavoriteProjects;
