import { Divider, Flex } from "@chakra-ui/react";
import { useDevice } from "./hooks/useDevice";
import Extra from "./sections/Extra";
import Header from "./sections/Header";
import FavoriteProjects from "./sections/FavoriteProjects";
import AllProjects from "./sections/AllProjects";
import Experiences from "./sections/Experiences";
import LastUpdated from "./sections/LastUpdated";

function App() {
  const { mobile } = useDevice();
  return (
    <Flex>
      <Flex
        direction="column"
        maxW={mobile ? "100%" : "50%"}
        margin="0 auto"
        color="#e5e7eb"
      >
        <Header />
        <Divider my="16px" />
        <Experiences />
        <Divider my="16px" />
        <FavoriteProjects />
        <Divider my="16px" />
        <LastUpdated />
        <Divider my="16px" />
        <AllProjects />
        <Divider my="16px" />
        <Extra />
      </Flex>
    </Flex>
  );
}

export default App;
