import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    ModalCloseButton,
    Button,
    useDisclosure,
    Flex,
    Link,
  } from "@chakra-ui/react";
  import NextLink from "next/link";
  
  interface SignInModalProps {
    isOpen: boolean;
    onClose: () => void;
  }
  
  const IdModal = ({ isOpen, onClose }: SignInModalProps) => {
    return (
      <Modal isOpen={isOpen}  onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Authentication Required</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            You need to be logged in to add products to the cart.
          </ModalBody>

          <ModalFooter>
            <Flex gap={5}>
            <Button colorScheme="blue" onClick={onClose}>
              Close
            </Button>
            <Link as={NextLink} href="/login">
              <Button borderRadius={5} colorScheme="blue" variant={"outline"}>
                SignIn
              </Button>
            </Link>
            </Flex>
          </ModalFooter>
        </ModalContent>
        </Modal>
    );
  };
  
  export default IdModal;
  