// SignInModal.tsx
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  DrawerFooter,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Flex,
  DrawerContent,
  DrawerBody,
  Text,
  Drawer,
} from "@chakra-ui/react";
import NextLink from "next/link";

interface ServiceInModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsOfService = ({ isOpen, onClose }: ServiceInModalProps) => {
  return (
    <Drawer isOpen={isOpen} onClose={onClose} size={'lg'}>
    <ModalOverlay />
    <DrawerContent>
      <Flex bg={'#edf2f3'} direction={"column"} p={10}>
      <Text fontWeight={500} fontSize={'30px'}>Terms of Service</Text>
      <Text>Last Updated:24th August, 2024 </Text>
      </Flex>
      <DrawerCloseButton />
      <DrawerBody>

    <Text pb={5}>Welcome to PharmaInc. By accessing or using our web app, you agree to comply with and be bound by the following Terms of Service ("Terms"). Please read them carefully.</Text>

    <Text fontSize={'20px'} fontWeight={500}>1. Acceptance of Terms</Text>
    <Text pb={2} >By using our web app, you agree to these Terms. If you do not agree, you may not use our services. We may modify these Terms at any time, and such modifications will be effective immediately upon posting.</Text>

    <Text fontSize={'20px'} fontWeight={500}>2. Services Provided</Text>
    <Text >PharmaInc provides online pharmacy services, including but not limited to:</Text>

    <Text>AI-driven health recommendations using the Infermedica API based on user-reported symptoms.</Text>
    <Text pb={2} >Online consultations with healthcare professionals. Access to pharmaceutical products and services.
        24/7 virtual assistance for health-related inquiries.</Text>

    <Text fontSize={'20px'} fontWeight={500}>3. Use of Infermedica API</Text>
    <Text>Our web app utilizes the Infermedica API to offer AI-driven health recommendations. By using our services, you acknowledge and agree that:</Text>
    <Text pb={2} >The recommendations provided by the AI are based on the information you input and are intended to offer general health advice, not a diagnosis.
    The AI-generated recommendations should not replace professional medical advice, diagnosis, or treatment.
    You should always seek the advice of a qualified healthcare professional with any questions you may have regarding a medical condition.
    We do not guarantee the accuracy, completeness, or usefulness of the AI-driven recommendations.</Text>

    <Text fontSize={'20px'} fontWeight={500}>4. User Responsibilities</Text>
    <Text >As a user of our web app, you agree to:</Text>
    <Text pb={2} >Provide accurate and complete information when using our services.
    Use the app for lawful purposes and not engage in any activity that would harm us or others.
    Acknowledge that the services provided are subject to the limitations and disclaimers outlined in these Terms.</Text>

    <Text fontSize={'20px'} fontWeight={500}>5. Privacy Policy</Text>
    <Text pb={2} >Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your information.</Text>

    <Text fontSize={'20px'} fontWeight={500}>6. Intellectual Property</Text>
    <Text pb={2} >All content and materials available on our web app, including but not limited to text, graphics, logos, and software, are the property of PharmaInc or its licensors and are protected by intellectual property laws.</Text>

    <Text fontSize={'20px'} fontWeight={500}>7. Limitation of Liability</Text>
    <Text pb={2} >To the maximum extent permitted by law:</Text>

    Phaarmainc shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our services.
    We do not assume any liability for the actions or inactions of healthcare professionals or the accuracy of the AI-driven recommendations.
    Our total liability for any claim arising out of or relating to our services shall not exceed the amount paid by you for the service in question.

    <Text fontSize={'20px'} fontWeight={500}>8. Dispute Resolution</Text>
    <Text pb={2} >Any disputes arising from or relating to these Terms or your use of our services will be resolved through binding arbitration in accordance with the rules of Medicine.</Text>

    <Text fontSize={'20px'} fontWeight={500}>9. Governing Law</Text>
    <Text pb={2} >These Terms shall be governed by and construed in accordance with the laws of Ghana, without regard to its conflict of law principles.</Text>

    <Text fontSize={'20px'} fontWeight={500}>10. Termination</Text>
    <Text pb={2}>We reserve the right to terminate your access to our web app for any reason, including but not limited to a breach of these Terms.</Text>

    <Text>11. Contact Us</Text>
    If you have any questions about these Terms, please contact us at 0509246726

      </DrawerBody>
      <DrawerFooter>
        <Button colorScheme="blue" mr={3} onClick={onClose}>
          Close
        </Button>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
  );
};

export default TermsOfService;
