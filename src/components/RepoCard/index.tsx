import { Flex, Link, Text, Box } from "@chakra-ui/react";
import React from "react";
import { useDevice } from "../../hooks/useDevice";

// import { Container } from './styles';

interface RepoCardProps {
  link: string;
  title: string;
  description: string;
  stats?: {
    text: string;
    color: string;
  };
  obs?: {
    color?: string;
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
    <Link href={link} isExternal>
      <Flex
        pos="relative"
        direction="column"
        bgColor="#22212C"
        borderRadius="12px"
        h={mobile ? "fit-content" : "128px"}
        color="#d5ccff"
        padding="16px"
        gap="2px"
        transition="all 0.2s ease-in-out"
        _hover={{
          opacity: 0.8,
          transform: "scale(1.006)",
        }}
      >
        {stats && (
          <Flex
            w="100%"
            left={0}
            right={0}
            top={-3}
            justify="center"
            pos="absolute"
          >
            <Flex
              bgColor={stats.color}
              borderRadius="12px"
              px="4px"
              left={0}
              maxW="fit-content"
            >
              <Text>{stats.text}</Text>
            </Flex>
          </Flex>
        )}
        <Flex>
          <Text fontWeight={800}>{title}</Text>
        </Flex>
        <Flex direction="column" justify="space-between" h="100%">
          <Text opacity={80} fontSize={14} lineHeight={"20px"}>
            {description || "No description"}
          </Text>
          {obs && (
            <Flex opacity={80} align="center">
              {obs.color && (
                <Box
                  w="10px"
                  h="10px"
                  borderRadius="50%"
                  bgColor={obs.color}
                  mr="4px"
                />
              )}
              <Text>{obs.text}</Text>
            </Flex>
          )}
        </Flex>
      </Flex>
    </Link>
  );
};

export default RepoCard;
