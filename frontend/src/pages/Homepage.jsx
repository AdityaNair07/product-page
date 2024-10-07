import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Container,
  Divider,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useProductStore } from "../store/product";
import { Link } from "react-router-dom";
import { FiEdit, FiTrash } from "react-icons/fi";
import { useEffect } from "react";

const Homepage = () => {
  const { products, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  console.log("====================================");
  console.log(products);
  console.log("====================================");
  return (
    <Container px={5} py={10} maxWidth={"100vw"}>
      <Text fontSize={"3xl"} textAlign={"center"} fontWeight={"bold"}>
        Current Products
      </Text>
      {products.length > 0 ? (
        <SimpleGrid columns={[2, null, 4]} spacing="30px" py={10}>
          {products.map((product) => {
            return (
              <Card maxW="1xs" maxH={"container.md"} key={product.id}>
                <CardBody>
                  <Image
                    width={"full"}
                    maxW={"1xs"}
                    aspectRatio={1}
                    src={product.image}
                    alt={product.name}
                    borderRadius="lg"
                    objectFit={"cover"}
                    bgPosition={"center"}
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md" textTransform={"uppercase"}>
                      {product.name}
                    </Heading>
                    {/* <Text>
                      This sofa is perfect for modern tropical spaces, baroque
                      inspired spaces, earthy toned spaces and for people who
                      love a chic design with a sprinkle of vintage design.
                    </Text> */}
                    <Text color="blue.600" fontSize="2xl">
                      ₹{product.price}
                    </Text>
                  </Stack>
                </CardBody>
                {/* <Divider /> */}
                <CardFooter>
                  <ButtonGroup spacing="2">
                    <Button variant="solid" colorScheme="blue">
                      <FiEdit color="black" title="Update" />
                    </Button>
                    <Button variant="solid" colorScheme="red">
                      <FiTrash color="black" title="Delete" />
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            );
          })}
        </SimpleGrid>
      ) : (
        <HStack
          textAlign={"center"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Text fontSize={"xl"} fontWeight={"semibold"} textAlign={"center"}>
            No products found
          </Text>
          <Text fontSize={"xl"} fontWeight={"bold"} color={"blue.400"}>
            <Link to={"/create"}>Create Product</Link>
          </Text>
        </HStack>
      )}
    </Container>
  );
};

export default Homepage;
