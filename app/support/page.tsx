"use client"
import { 
    Box, 
    Heading, 
    Text, 
    Input, 
    Button, 
    VStack, 
    HStack, 
    Icon, 
    SimpleGrid, 
    Link, 
    FormControl, 
    FormLabel, 
    Textarea,
    useToast,
    useColorModeValue 
  } from "@chakra-ui/react";
  import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
  
  export default function SupportPage() {
    const toast = useToast();
    const bg = useColorModeValue("gray.50", "gray.800");
    const iconColor = useColorModeValue("teal.500", "teal.300");

    const handleSubmit = (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      toast({
        title: "Message Sent.",
        description: "We have received your message and will get back to you shortly.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    };
  
    return (
      <Box p={8} maxW="1200px" mx="auto" bg={bg} borderRadius="lg" shadow="md">
        <Heading as="h1" mb={8} textAlign="center">
          Support
        </Heading>
        
        <Text mb={4} textAlign="center" fontSize="lg">
          Need help? We&apos;re here to support you. Check out our FAQ or reach out to us.
        </Text>
  
        {/* Contact Information */}
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} my={8}>
          <Box textAlign="center">
            <Icon as={FaPhone} w={12} h={12} color={iconColor} mb={4} />
            <Text fontSize="xl" fontWeight="bold">Call Us</Text>
            <Text mt={2}>+1 234 567 890</Text>
          </Box>
          
          <Box textAlign="center">
            <Icon as={FaEnvelope} w={12} h={12} color={iconColor} mb={4} />
            <Text fontSize="xl" fontWeight="bold">Email Us</Text>
            <Text mt={2}>support@pharmacyapp.com</Text>
          </Box>
          
          <Box textAlign="center">
            <Icon as={FaMapMarkerAlt} w={12} h={12} color={iconColor} mb={4} />
            <Text fontSize="xl" fontWeight="bold">Visit Us</Text>
            <Text mt={2}>123 Pharmacy St, City, Country</Text>
          </Box>
        </SimpleGrid>
  
        {/* FAQ Section */}
        <Heading as="h2" size="lg" mb={6}>
          Frequently Asked Questions
        </Heading>
        <VStack spacing={6} align="start">
          <Box>
            <Text fontWeight="bold" fontSize="lg">How do I order prescription drugs?</Text>
            <Text mt={2}>You can order prescription drugs by...</Text>
          </Box>
          <Box>
            <Text fontWeight="bold" fontSize="lg">How do I track my order?</Text>
            <Text mt={2}>You can track your order by...</Text>
          </Box>
          <Box>
            <Text fontWeight="bold" fontSize="lg">What payment methods are accepted?</Text>
            <Text mt={2}>We accept various payment methods including...</Text>
          </Box>
        </VStack>
  
        {/* Contact Form */}
        <Box mt={12} p={8} borderWidth={1} borderRadius="lg" bg="white" shadow="sm">
          <Heading as="h2" size="lg" mb={6}>
            Contact Us
          </Heading>
          <form onSubmit={handleSubmit}>
            <VStack spacing={6}>
              <FormControl id="name">
                <FormLabel>Your Name</FormLabel>
                <Input type="text" required />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Your Email</FormLabel>
                <Input type="email" required />
              </FormControl>
              <FormControl id="message">
                <FormLabel>Your Message</FormLabel>
                <Textarea required />
              </FormControl>
              <Button type="submit" colorScheme="teal" size="lg" width="full" _hover={{ bg: "teal.600" }}>
                Send Message
              </Button>
            </VStack>
          </form>
        </Box>
  
        {/* Additional Support Links */}
        <HStack mt={12} spacing={8} justify="center">
          <Link href="/faq" color="teal.500" fontWeight="bold">FAQ</Link>
          <Link href="/shipping-info" color="teal.500" fontWeight="bold">Shipping Information</Link>
          <Link href="/returns" color="teal.500" fontWeight="bold">Returns Policy</Link>
        </HStack>
      </Box>
    );
  }
