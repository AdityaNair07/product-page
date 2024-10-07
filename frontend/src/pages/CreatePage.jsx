import {
  Box,
  Button,
  Container,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useProductStore } from "../store/product";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const { createProduct } = useProductStore();

  const toast = useToast();

  const handleSubmit = async () => {
    const { success, message } = await createProduct(newProduct);

    toast({
      title: success ? "Success" : "Error",
      description: message,
      status: success ? "success" : "error",
      duration: 3000,
      isClosable: true,
    });

    setNewProduct({ name: "", price: "", image: "" });
  };

  return (
    <Container maxWidth={"100vw"} padding={5}>
      <Box
        display={"flex"}
        border={"2px"}
        flexDirection={"column"}
        borderColor={"gray.400"}
        borderRadius={5}
        height={"80vh"}
        gap={5}
      >
        <Input
          placeholder="Product name"
          type="text"
          value={newProduct.name}
          onChange={(e) =>
            setNewProduct({ ...newProduct, name: e.target.value })
          }
        />

        <NumberInput max={50000} min={10} value={newProduct.price}>
          <NumberInputField
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
          />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>

        <Input
          placeholder="Image URL"
          type="text"
          value={newProduct.image}
          onChange={(e) =>
            setNewProduct({ ...newProduct, image: e.target.value })
          }
        />

        <Button onClick={handleSubmit}>Create</Button>
      </Box>
    </Container>
  );
};

export default CreatePage;
