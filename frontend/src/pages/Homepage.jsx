import { Container, HStack, SimpleGrid, Text } from "@chakra-ui/react";
import { useProductStore } from "../store/product";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import ProductCard from "../components/ProductCard";

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
        <SimpleGrid
          columns={[2, null, 4]}
          spacing="30px"
          py={10}
          width={"100%"}
        >
          {products.map((product) => {
            return <ProductCard product={product} key={product._id} />;
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
