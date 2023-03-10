import React, { useState } from "react";
import { Flex, Grid, GridItem, Text } from "@chakra-ui/react";

import RepoCard from "../RepoCard";
import { useDevice } from "../../hooks/useDevice";

interface LoadMoreProps {
  repos: {
    link: string;
    name: string;
    description: string;
    stats?: {
      text: string;
    };
    obs?: {
      text: string;
    };
  }[];
}

const LoadMore: React.FC<LoadMoreProps> = ({ repos }) => {
  const { mobile } = useDevice();
  const [qtd, setQtd] = useState(6);
  const [loading, setLoading] = useState(false);

  const handleMore = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setQtd(qtd + 6);
    }, 1000);
  };

  return (
    <>
      <Grid
        templateColumns={mobile ? "repeat(1, 1fr)" : "repeat(2, 1fr)"}
        gap={6}
      >
        {repos.slice(0, qtd).map((repo, index) => {
          return (
            <GridItem key={index}>
              <RepoCard
                link={repo.link}
                title={repo.name}
                description={repo.description}
              />
            </GridItem>
          );
        })}
      </Grid>
      <Flex w="100%" justify="center">
        <Text
          fontWeight={800}
          onClick={() => {
            if (!loading) handleMore();
          }}
          cursor={loading ? "default" : "pointer"}
        >
          {loading ? "Loading..." : "Load More"}
        </Text>
      </Flex>
    </>
  );
};

export default LoadMore;
