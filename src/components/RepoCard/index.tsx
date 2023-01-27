import { Flex, Link, Text } from "@chakra-ui/react";
import React from "react";
import { useDevice } from "../../hooks/useDevice";

// import { Container } from './styles';

interface RepoCardProps {
  link: string;
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
  link,
}) => {
  const { mobile } = useDevice();
  return (
    <Link  href={link} isExternal>
      <Flex
        pos="relative"
        direction="column"
        bgColor="#22212C"
        borderRadius="12px"
        h={mobile ? "fit-content" : "128px"}
        color="#d5ccff"
        padding="16px"
        transition="all 0.2s ease-in-out"
        _hover={{
          opacity: 0.8,
          transform: "scale(1.006)",
        }}
      >
        {stats && (
          <Flex pos="absolute">
            <Text>{stats.text}</Text>
          </Flex>
        )}
        <Flex>
          <Text fontWeight={800}>{title}</Text>
        </Flex>
        <Flex direction='column'>
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
    </Link>
  );
};

export default RepoCard;
