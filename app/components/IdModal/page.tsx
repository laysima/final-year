// SignInModal.tsx
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
  } from "@chakra-ui/react";
  import NextLink from "next/link";
  
  interface SignInModalProps {
    isOpen: boolean;
    onClose: () => void;
  }
  
  const IdModal = ({ isOpen, onClose }: SignInModalProps) => {
    return (
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Sign In Required</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          You need to sign in to add items to your cart.
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <NextLink href="/login" passHref>
            <Button variant="outline">Sign In</Button>
          </NextLink>
        </ModalFooter>
      </ModalContent>
    </Modal>
    );
  };
  
  export default IdModal;
  