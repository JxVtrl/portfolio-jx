import { Divider, Flex } from "@chakra-ui/react";
import { useDevice } from "./hooks/useDevice";
import Extra from "./sections/Extra";
import Header from "./sections/Header";
import FavoriteProjects from "./sections/FavoriteProjects";

function App() {
  const { mobile } = useDevice();
  return (
    <Flex >
      <Flex
        direction="column"
        maxW={mobile ? "100%" : "48%"}
        margin="0 auto"
        w="100%"
      >
        <Header />
        <Divider color="#e5e7eb" my="16px" />
        <FavoriteProjects />
        <Divider color="#e5e7eb" my="16px" />
        <Extra />
      </Flex>
    </Flex>
  );
}

export default App;
