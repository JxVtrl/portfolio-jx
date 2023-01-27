import { Divider, Flex } from "@chakra-ui/react";
import { useDevice } from "./hooks/useDevice";
import Extra from "./sections/Extra";
import Header from "./sections/Header";
import FavoriteProjects from "./sections/FavoriteProjects";
import AllProjects from "./sections/AllProjects";

function App() {
  const { mobile } = useDevice();
  return (
    <Flex>
      <Flex
        direction="column"
        maxW={mobile ? "100%" : "50%"}
        margin="0 auto"
      >
        <Header />
        <Divider color="#e5e7eb" my="16px" />
        <FavoriteProjects />
        <Divider color="#e5e7eb" my="16px" />
        <AllProjects />
        <Divider color="#e5e7eb" my="16px" />
        <Extra />
      </Flex>
    </Flex>
  );
}

export default App;
