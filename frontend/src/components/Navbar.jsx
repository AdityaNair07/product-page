import {
  Button,
  Container,
  Flex,
  HStack,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { FiPlusCircle } from "react-icons/fi";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container
      width={"100vw"}
      maxWidth={"100vw"}
      padding={5}
      bgColor={useColorModeValue("gray.100", "gray.900")}
    >
      <Flex
        flexDirection={{
          base: "column",
          sm: "row",
        }}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Link to={"/"}>
          <Text
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontSize="4xl"
            fontWeight="extrabold"
          >
            Product Page
          </Text>
        </Link>
        <HStack spacing={10}>
          <Link to="/create">
            <FiPlusCircle title="+" size={30} color="" />
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? (
              <SunIcon fontSize={20} />
            ) : (
              <MoonIcon fontSize={20} />
            )}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
