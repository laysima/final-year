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
  InputGroup,
  InputRightElement,
  Divider,
  useToast,
  Spinner,
  RadioGroup,
  Radio,
  Heading,
  Progress,
} from '@chakra-ui/react';
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';
import { MdCheckCircle } from 'react-icons/md';
import { IoIosFemale, IoIosMale } from "react-icons/io";
import TermsOfService from './TermsOfService';
import { FaCircleArrowUp } from 'react-icons/fa6';
import axios from 'axios';

interface Evidence {
  id: string;
  choice_id: string;
}

interface Question {
  type: string;
  text: string;
  items: Array<{
    id: string;
    name: string;
    choices: Array<{
      id: string;
      label: string;
    }>;
  }>;
}

const Chatbot = () => {
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [evidence, setEvidence] = useState<Evidence[]>([]);
  const [question, setQuestion] = useState<Question | null>(null);
  const [loading, setLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState<string[]>([]);
  const [diagnosis, setDiagnosis] = useState<string | null>(null);
  const [step, setStep] = useState(0);
  const [termsAccepted, setTermsAccepted] = useState({
    termsOfService: false,
    privacyPolicy: false,
  });
  
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isModalOpen, onOpen: openModal, onClose: closeModal } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);
  const toast = useToast();

  const headers = {
    'App-Id': '5121be20',
    'App-Key': '19bec17ce7f699fc0ce1a4da40155808',
    'Content-Type': 'application/json',
  };

  function validateAge(age: string) {
    const ageInt = parseInt(age);
    return !isNaN(ageInt) && ageInt >= 18 && ageInt <= 120;
  }

  const startDiagnosis = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        'https://api.infermedica.com/v3/parse',
        { 
          text: symptoms,
          age: { value: parseInt(age) },
          sex: sex
        },
        { headers }
      );

      const initialEvidence = response.data.mentions.map((mention: any) => ({
        id: mention.id,
        choice_id: 'present',
        source: 'initial',
      }));

      setEvidence(initialEvidence);
      await getDiagnosis(initialEvidence);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to start diagnosis',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
    setLoading(false);
  };

  const getDiagnosis = async (currentEvidence: Evidence[]) => {
    setLoading(true);
    try {
      const response = await axios.post(
        'https://api.infermedica.com/v3/diagnosis',
        {
          sex,
          age: { value: parseInt(age) },
          evidence: currentEvidence,
        },
        { headers }
      );

      if (response.data.should_stop || (response.data.conditions && response.data.conditions[0].probability > 0.8)) {
        const topCondition = response.data.conditions[0];
        const diagnosisMessage = `Based on the information provided, the most likely condition is ${topCondition.name} (${(topCondition.probability * 100).toFixed(2)}% probability).`;
        setDiagnosis(diagnosisMessage);
        setChatHistory([...chatHistory, `Bot: ${diagnosisMessage}\n\nDisclaimer: This is not a substitute for professional medical advice. Please consult with a healthcare provider for an accurate diagnosis and appropriate treatment.`]);
        setQuestion(null);
        setStep(6); // Move to the final step
      } else if (response.data.question) {
        setQuestion(response.data.question);
        setChatHistory([...chatHistory, `Bot: ${response.data.question.text}`]);
        setStep(5); // Move to the interview step
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to get diagnosis',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
    setLoading(false);
  };

  const handleAnswer = async (itemId: string, choiceId: string) => {
    setLoading(true);
    const newEvidence = [...evidence, { id: itemId, choice_id: choiceId }];
    setEvidence(newEvidence);
    const question = chatHistory[chatHistory.length - 1].replace('Bot: ', '');
    setChatHistory([...chatHistory, `You: ${question} - ${choiceId === 'present' ? 'Yes' : choiceId === 'absent' ? 'No' : "Don't know"}`]);
    await getDiagnosis(newEvidence);
    setLoading(false);
  };

  const pages = [
    {
      content: (
        <Box bg={'#edf2f3'}>
          <Flex direction={'column'} pb={10}>
            <Text pt={5} fontWeight={'500'} fontSize={'lg'}>
              Get Quick and swift health care by implementing this chatbot!!!
            </Text>
          </Flex>
          <Flex boxShadow='lg' p='7' bg={'white'} h={'70dvh'}>
            <Flex direction={'column'}>
              <Text fontSize={'30px'} fontWeight={'500'}>Check your symptoms</Text>
              <Text pt={3}>
                Take a short symptom assessment. The information you give is safe and won&apos;t be shared. Your results will include:
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
                <Divider border={'1px solid red'}/>
                <UnorderedList >
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
              <Image src="/ai.jpg" alt='reach' boxSize={'300px'} />
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
                <ListItem pt={2}><strong>The result is not a diagnosis.</strong> It&apos;s only for your information and not a qualified medical opinion.</ListItem>
                <ListItem pt={2}><strong>Do not use it in case of an emergency.</strong> Call your local emergency number right away when there&apos;s a health emergency.</ListItem>
                <ListItem pt={2}><strong>Your data is safe.</strong> The information you give won&apos;t be shared or used to identify you.</ListItem>
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
            <Image src="/policy.png" alt='reach' boxSize={'300px'} />
          </Flex>
        </Flex>
      ),
    },
    {
      content: (
        <Box>
          <Flex justify={'center'} align={'center'} p={10}>
            <Text fontWeight={500} fontSize={'2xl'} mb={8}>Select your biological sex</Text>
          </Flex>

            <Flex gap={6} p={10} justify={'center'} align={'center'}>
                <Button 
                   onClick={() => setSex('male')}
                   bg={sex === 'male' ? 'blue.500' : 'gray.100'}
                   color={sex === 'male' ? 'white' : 'gray.800'}
                   _hover={{
                    bg: sex === 'male' ? 'blue.600' : 'gray.200',
                   }}
                   size="lg"
                   width="150px"
                   height="150px"
                   borderRadius="md"
                   transition="all 0.3s"
                >
                    <Flex direction={'column'} justify={'center'} align={'center'}>
                        <Icon fontSize={'50px'} as={IoIosMale} mb={2} />
                        <Text fontWeight={400} fontSize={'lg'}>Male</Text>
                    </Flex>
                </Button>

                <Button 
                  onClick={() => setSex('female')}
                  bg={sex === 'female' ? 'pink.500' : 'gray.100'}
                  color={sex === 'female' ? 'white' : 'gray.800'}
                  _hover={{
                    bg: sex === 'female' ? 'pink.600' : 'gray.200',
                  }}
                  size="lg"
                  width="150px"
                  height="150px"
                  borderRadius="md"
                  transition="all 0.3s"
                >
                    <Flex direction={'column'} justify={'center'} align={'center'}>
                        <Icon fontSize={'50px'} as={IoIosFemale} mb={2} />
                        <Text fontWeight={400} fontSize={'lg'}>Female</Text>
                    </Flex>
                </Button>
            </Flex>
        </Box>
      ),
    },

    {
        content: (
        <Box maxW={'300px'}>
         <Text pt={5} fontWeight={300} fontSize={'30px'}>How old are you?</Text>
         <Text pt={10} pb={4} fontWeight={300} fontSize={'20px'}>Age must be between 18 and 120</Text>
         <Input 
          type='number' 
          border={'1px solid black'} 
          borderRadius={0} 
          placeholder='Enter Age' 
          size='md'
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        </Box>),
    }, 
    {
      content: (
        <Box>
          <Flex justify={'center'} align={'center'} direction={'column'}>
            <Text fontWeight={300} fontSize={'30px'}>How are you feeling today?</Text>
            <Image pt={7} src="/chatbot-removed.png" alt='reach' boxSize={'300px'} />
          </Flex>

          <Flex direction={'column'} pt={5} justify={'center'} align={'center'}>
            <InputGroup>
              <Input 
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
                placeholder="Describe your symptoms"
              />
              <InputRightElement>
                <IconButton 
                  onClick={startDiagnosis} 
                  colorScheme={symptoms.trim() ? 'grey' : 'gray'} 
                  color={symptoms.trim() ? 'black' : 'gray.300'} 
                  aria-label='arrow up' 
                  icon={<FaCircleArrowUp/>}
                  isDisabled={!symptoms.trim()}
                />
              </InputRightElement>
            </InputGroup>         
          </Flex>
          {loading && <Spinner mt={5} />}
        </Box>
      )
    },
    
    {
      content: (
        <Box>
          <Text fontWeight={300} fontSize={'30px'}>INTERVIEW</Text>
          <Box p={5}>
            <Text><strong>Question</strong>: {question?.text}</Text>
            {question?.items.map((item) => (
              <Flex key={item.id} p={5} justifyContent={'space-between'} mt={10} border={'1px solid grey'} borderRadius={10}>
                <Text>{item.name}</Text>
                <RadioGroup onChange={(value) => handleAnswer(item.id, value)}>
                  <Stack direction='row'>
                    {item.choices.map((choice) => (
                      <Radio key={choice.id} value={choice.id}>
                        {choice.label}
                      </Radio>
                    ))}
                  </Stack>
                </RadioGroup>
              </Flex>
            ))}
          </Box>
          {loading && <Spinner mt={5} />}
        </Box>
      )
    },
    {
      content: (
        <Box mt={4}>
          <Heading as="h2" size="md" mb={2}>Diagnosis Result</Heading>
          <Text>{diagnosis}</Text>
          <Text mt={2} fontStyle="italic" fontSize="sm">
            Disclaimer: This is not a substitute for professional medical advice. Please consult with a healthcare provider for an accurate diagnosis and appropriate treatment.
          </Text>
        </Box>
      )
    }
  ];

  const totalSteps = pages.length;
  const progressPercentage = ((step + 1) / totalSteps) * 100;

  const handleNext = () => {
    if (step === 1 && (!termsAccepted.termsOfService || !termsAccepted.privacyPolicy)) {
      alert('Please accept all checkboxes before proceeding.');
      return;
    }
    if (step === 4 && symptoms.trim() !== '') {
      startDiagnosis();
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
        />
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
            <DrawerHeader bg={'blue.100'}>
              AI Heath Assistant
              <Progress 
                value={progressPercentage} 
                size="sm" 
                colorScheme="blue" 
                mt={2}
              />
            </DrawerHeader>
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
                colorScheme="blue"
                onClick={handleBack}
                isDisabled={step === 0}
              >
                Back
              </Button>
              <Button
                colorScheme="blue"
                onClick={handleNext}
                ml={3}
                isDisabled={step >= 5 || (step === 4 && symptoms.trim() === '')}
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
