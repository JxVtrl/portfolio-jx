import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useDevice } from "../../hooks/useDevice";

// import { Container } from './styles';

interface RepoCardProps {
  title: string;
  description: string;
  stats?: {
    text: string;
  };
  obs?: {
    text: string;
  };
}

const RepoCard: React.FC<RepoCardProps> = ({
  title,
  description,
  obs,
  stats,
}) => {
  const { mobile } = useDevice();
  return (
    <Flex
      pos="relative"
      direction="column"
      bgColor="#22212C"
      borderRadius="12px"
      h={mobile ? "108px" : "128px"}
      color="#d5ccff"
      padding="16px"
    >
      {stats && (
        <Flex pos="absolute">
          <Text>{stats.text}</Text>
        </Flex>
      )}
      <Flex>
        <Text fontWeight={800}>{title}</Text>
      </Flex>
      <Flex>
        <Text opacity={80} fontSize={14} lineHeight={"20px"}>
          {description}
        </Text>
        {obs && (
          <Flex opacity={80}>
            <Text>{obs.text}</Text>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

export default RepoCard;
