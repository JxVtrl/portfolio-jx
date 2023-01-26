import { Flex, Text, Image } from "@chakra-ui/react";
import React from "react";
import { useApp } from "../../context";

// import { Container } from './styles';

const Header: React.FC = () => {
  const { user}: any = useApp();
  return (
    <Flex direction="column" justify="center" gap="24px">
      <Flex gap="24px">
        <Flex
          w="128px"
          h="128px"
          align="center"
          justify="center"
          borderRadius="50%"
          overflow='hidden'
        >
          <Image src={user?.avatar_url} />
        </Flex>
        <Flex direction="column">
          {[
            {
              id: 0,
              text: "1",
              emoji: "👨🏻‍💻",
            },
            {
              id: 1,
              text: "2",
              emoji: "👨🏻‍💻",
            },
          ].map((item, index) => (
            <Flex key={index}>
              {item.emoji}
              <Text color="#d5ccff">{item.text}</Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
      <Text color="#d5ccff">
        I was fired everywhere so I've decided to always work for myself (even
        Tai Lopez fired me). I love smiling & people who smile. I pursue
        freedom.
      </Text>
    </Flex>
  );
};

export default Header;
