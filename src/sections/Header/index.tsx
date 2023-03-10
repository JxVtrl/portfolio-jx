import { Flex, Text, Image } from "@chakra-ui/react";
import React from "react";
import { useApp } from "../../context";

// import { Container } from './styles';

const Header: React.FC = () => {
  const { user, username }: any = useApp();
  return (
    <Flex direction="column" justify="center" gap="24px">
      {user && (
        <>
          <Flex gap="24px">
            <Flex
              w="128px"
              h="128px"
              align="center"
              justify="center"
              borderRadius="50%"
              overflow="hidden"
            >
              <Image src={user.avatar_url} alt={user.name} />
            </Flex>
            <Flex direction="column">
              {[
                {
                  id: 0,
                  text: "π§π» " + user.name,
                },
                {
                  id: 1,
                  text: "π 22 Years old",
                },
                {
                  id: 2,
                  text: "π§π»βπ» Front-end Developer",
                },
                {
                  id: 3,
                  text: "π Computer Engineering Student",
                },
                {
                  id: 4,
                  text: "π΄ in " + user.location,
                },
              ].map((item, index) => (
                <Flex key={index}>
                  <Text color="#d5ccff">{item.text}</Text>
                </Flex>
              ))}
            </Flex>
          </Flex>
          <Text color="#d5ccff">
            {/* TODO: TransiΓ§Γ£o entre bio do GH e personalizada */}
            {user.bio}
          </Text>
        </>
      )}
    </Flex>
  );
};

export default Header;
