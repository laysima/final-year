import React, { useRef, useState } from 'react';
import {
  Flex,
  Button,
  Image,
  Text,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Checkbox,
  Stack,
  Box,
  Link,
  ListIcon,
  List,
  ListItem,
  UnorderedList,
  Icon,
  Input,
  LinkOverlay
} from '@chakra-ui/react';
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';
import { MdCheckCircle } from 'react-icons/md';
import { IoIosFemale,IoIosMale } from "react-icons/io";
import TermsOfService from './TermsOfService';

const Chatbot = () => {
  const [step, setStep] = useState(0);
  
  const [termsAccepted, setTermsAccepted] = useState({
    termsOfService: false,
    privacyPolicy: false,
  });

  const [age, setAge] = useState("");
  
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { isOpen: isModalOpen, onOpen: openModal, onClose: closeModal } = useDisclosure();

  const btnRef = useRef<HTMLButtonElement>(null);

  const pages = [
    {
      content: (
        <Box bg={'#edf2f3'}>
          <Flex direction={'column'} pb={10}>
            <Text fontWeight={'500'} fontSize={'lg'}>Chat with a bot🤖.</Text>
            <Text pt={5} fontWeight={'500'} fontSize={'lg'}>
              Get Quick and swift health care by implementing this chatbot!!!
            </Text>
          </Flex>
          <Flex boxShadow='lg' p='7' bg={'white'} h={'70dvh'}>
            <Flex direction={'column'}>
              <Text fontSize={'30px'} fontWeight={'500'}>Check your symptoms</Text>
              <Text pt={3}>
                Take a short symptom assessment. The information you give is safe and won’t be shared. Your results will include:
              </Text>
              <Box pt={6} >
                About this tool
                <List>
                  <ListItem>
                    <ListIcon as={MdCheckCircle} color='green.500' />Created and validated by doctors
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdCheckCircle} color='green.500' />Clinically validated with patient cases
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdCheckCircle} color='green.500' />Class I medical device in the EU
                  </ListItem>
                </List>

                <Text pt={7} color={'red'} fontSize={'20px'}>Disclaimer:</Text>
                <UnorderedList color={'red'}>
                  <ListItem>
                    The AI chatbot is for informational purposes only
                  </ListItem>
                  <ListItem>
                    It does not replace professional medical advice
                  </ListItem>
                  <ListItem>
                    Users should consult a qualified healthcare provider for any medical decisions
                  </ListItem>
                </UnorderedList>

                



              </Box>
            </Flex>
            <Flex p={6} justify={'center'} align={'center'}>
              <Image src="ai.jpg" alt='reach' boxSize={'300px'} />
            </Flex>
          </Flex>
        </Box>
      ),
    },
    {
      content: (
        <Flex boxShadow='lg' p='7' bg={'white'} h={'80dvh'}>
          <Flex direction={'column'}>
            <Text fontWeight={300} fontSize={'30px'}>Terms of Service</Text>
            <Text pt={4}>
              Before using the symptom assessment, please accept the Terms of Service and Privacy Policy. Please note:
            </Text>
            <Flex direction={'column'} pt={4}>
              <UnorderedList>
                <ListItem pt={2}><strong>The result is not a diagnosis.</strong> It’s only for your information and not a qualified medical opinion.</ListItem>
                <ListItem pt={2}><strong>Do not use it in case of an emergency.</strong> Call your local emergency number right away when there’s a health emergency.</ListItem>
                <ListItem pt={2}><strong>Your data is safe.</strong> The information you give won’t be shared or used to identify you.</ListItem>
              </UnorderedList>
            </Flex>
            <Stack spacing={5} direction='column' pt={10}>
              <Checkbox
                size='lg'
                colorScheme='green'
                isChecked={termsAccepted.termsOfService}
                onChange={(e) => setTermsAccepted(prev => ({ ...prev, termsOfService: e.target.checked }))}
              >
                I have read and accept the 
             <Button onClick={() => {openModal()}} colorScheme='teal' variant='link'> Terms of Service</Button>
                <TermsOfService  isOpen={isModalOpen} onClose={closeModal}/>
              </Checkbox>
              <Checkbox
                size='lg'
                colorScheme='green'
                isChecked={termsAccepted.privacyPolicy}
                onChange={(e) => setTermsAccepted(prev => ({ ...prev, privacyPolicy: e.target.checked }))}
              >
                I agree for my health information to be used for the interview. More information in the <Link color={'teal.500'}>Privacy Policy</Link>
              </Checkbox>
            </Stack>
          </Flex>
          <Flex p={6}>
            <Image src="policy.png" alt='reach' boxSize={'300px'} />
          </Flex>
        </Flex>
      ),
    },
    {
      content: (
        <Box>
            <Text fontWeight={300} fontSize={'30px'}>What is your Sex</Text>

            <Flex gap={10} justify={'center'} align={'center'} pt={100} >
                <Flex cursor={'pointer'} border={'1px solid grey'} justify={'center'} align={'center'} boxSize={'200px'} _hover={{
                    border: '2px solid teal',bgColor: '#cfd1d1', transform: '0.2s linear', transition:'0.5s'
                }}>
                    <Flex direction={'column'} justify={'center'} align={'center'}>
                        <Icon fontSize={'70px'} as={IoIosMale} />
                        <Text fontWeight={300} fontSize={'20px'}>Male</Text>
                    </Flex>
                </Flex>

                <Flex cursor={'pointer'} border={'1px solid grey'} justify={'center'} align={'center'} boxSize={'200px'} _hover={{
                    border: '2px solid teal',bgColor: '#cfd1d1', transform: '0.2s linear', transition:'0.5s'
                }}>
                    <Flex direction={'column'} justify={'center'} align={'center'}>
                        <Icon fontSize={'70px'} as={IoIosFemale} />
                        <Text fontWeight={300} fontSize={'20px'}>Female</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
      ),
    },

    {
        content: (
        <Box maxW={'250px'}>
         <Text pb={10} fontWeight={300} fontSize={'30px'}>How old are you?</Text>
         <Text fontWeight={300} fontSize={'20px'}>Type your age</Text>
         <Text pb={5} fontWeight={300} fontSize={'10px'}>Age must be between 18 and 120</Text>
         <Input type='number' border={'1px solid black'} borderRadius={0} placeholder='Enter Age' size='md' />

        </Box>),
    }
  ];

  const handleNext = () => {
    if (step === 1) {
      if (!termsAccepted.termsOfService || !termsAccepted.privacyPolicy) {
        alert('Please accept all checkboxes before proceeding.');
        return;
      }
    }
    setStep(prevStep => Math.min(prevStep + 1, pages.length - 1));
  };

  const handleBack = () => {
    setStep(prevStep => Math.max(prevStep - 1, 0));
  };

  return (
    <>
        <Button ref={btnRef} onClick={onOpen} colorScheme="blue" variant="outline" borderRadius={5}>
        Chat With A Bot
        </Button>
      <Flex position="fixed" bottom="80px" right="20px" zIndex="50">
        <IconButton
          aria-label="Open Chatbot"
          icon={<HiOutlineChatBubbleLeftRight />}
          ref={btnRef}
          colorScheme='blue'
          outline={'white'}
          onClick={onOpen}
          borderRadius={"50%"}
          size={"lg"}
        >
        </IconButton>
        <Drawer
          size={'lg'}
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent bg={'#edf2f3'}>
            <DrawerCloseButton />
            <DrawerHeader>Chatbot</DrawerHeader>
            <DrawerBody>
              <Box>{pages[step].content}</Box>
            </DrawerBody>
            <DrawerFooter>
                <Link mr={10} href='https://infermedica.com/' isExternal>
                    Powered by 2024 Infermedica
                </Link>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>

              <Button
                colorScheme="teal"
                onClick={handleBack}
                isDisabled={step === 0}
              >
                Back
              </Button>
              <Button
                colorScheme="teal"
                onClick={handleNext}
                ml={3}
                isDisabled={step === pages.length - 1 && step !== 1} // Disable Next on the last page except the checkbox page
              >
                Next
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Flex>
    </>
  );
};

export default Chatbot;
