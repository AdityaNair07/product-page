import { useState } from "react";
import { useProductStore } from "../store/product";
import { FiEdit, FiTrash } from "react-icons/fi";
import {
  useDisclosure,
  useToast,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  // Divider,
  Heading,
  Image,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  VStack,
  Input,
  Text,
} from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
const ProductCard = ({ product }) => {
  const { deleteProduct, updateProduct } = useProductStore();

  const [updatedProduct, setUpdatedProduct] = useState(product);

  const toast = useToast();

  const handleDelete = async (pid) => {
    const { success, message } = await deleteProduct(pid);

    toast({
      title: success ? "Success" : "Error",
      description: message,
      status: success ? "success" : "error",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleUpdateProduct = async (pid, updatedProduct) => {
    const { success, message } = await updateProduct(pid, updatedProduct);

    onClose();

    console.log("success: ", success);
    console.log("message: ", message);

    toast({
      title: success ? "Success" : "Error",
      description: message,
      status: success ? "success" : "error",
      duration: 3000,
      isClosable: true,
    });
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Card variant={"elevated"} maxW="1xs" maxH={"container.md"}>
        <CardBody>
          <Image
            width={"full"}
            maxW={"1xs"}
            aspectRatio={1}
            // eslint-disable-next-line react/prop-types
            src={updatedProduct.image}
            // eslint-disable-next-line react/prop-types
            alt={product.name}
            borderRadius="lg"
            objectFit={"cover"}
            bgPosition={"center"}
          />
          <Stack mt="4" spacing="3">
            <Heading size="md" textTransform={"uppercase"}>
              {updatedProduct.name}
            </Heading>
            {/* <Text>
                      This sofa is perfect for modern tropical spaces, baroque
                      inspired spaces, earthy toned spaces and for people who
                      love a chic design with a sprinkle of vintage design.
                    </Text> */}
            <Text color="blue.600" fontSize="2xl">
              ₹{updatedProduct.price}
            </Text>
          </Stack>
        </CardBody>
        {/* <Divider /> */}
        <CardFooter mt={-5}>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue" onClick={onOpen}>
              <FiEdit color="black" title="Update" />
            </Button>
            <Button
              variant="solid"
              colorScheme="red"
              // eslint-disable-next-line react/prop-types
              onClick={() => handleDelete(updatedProduct._id)}
            >
              <FiTrash color="black" title="Delete" />
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Update Product</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <VStack spacing={4}>
                    <Input
                      placeholder="Update product name"
                      // eslint-disable-next-line react/prop-types
                      value={updatedProduct.name}
                      onChange={(e) =>
                        setUpdatedProduct({
                          ...updatedProduct,
                          name: e.target.value,
                        })
                      }
                    />
                    <Input
                      type="number"
                      placeholder="Update product price"
                      // eslint-disable-next-line react/prop-types
                      value={updatedProduct.price}
                      onChange={(e) =>
                        setUpdatedProduct({
                          ...updatedProduct,
                          price: e.target.value,
                        })
                      }
                    />
                    <Input
                      placeholder="Update product image"
                      // eslint-disable-next-line react/prop-types
                      value={updatedProduct.image}
                      onChange={(e) =>
                        setUpdatedProduct({
                          ...updatedProduct,
                          image: e.target.value,
                        })
                      }
                    />
                  </VStack>
                </ModalBody>
                <ModalFooter>
                  <Button
                    colorScheme={"blue"}
                    mr={3}
                    onClick={() =>
                      // eslint-disable-next-line react/prop-types
                      handleUpdateProduct(updatedProduct._id, updatedProduct)
                    }
                  >
                    Update
                  </Button>
                  <Button variant={"link"} onClick={onClose}>
                    Cancel
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  );
};

export default ProductCard;
