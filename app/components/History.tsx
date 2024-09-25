
'use client'
import React, { useRef, useState } from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Icon,
  VStack,
  HStack,
  Text,
  Badge,
  Image,
  Box,
  Divider,
  Input,
  Select,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useToast,
  InputGroup,
  InputLeftElement,
  Spinner,
} from '@chakra-ui/react'
import { GoClock, GoSearch } from "react-icons/go";
import { useQuery } from '@tanstack/react-query';
import { orderHistory } from '../api';
import { getCookie } from 'cookies-next';

interface Order {
  id: string;
  date: string;
  status: 'pending' | 'succeeded' | 'cancelled';
  productName: string;
  productImage: string;
  totalCost: number;
  fulfilmentStatus: string;
}


const OrderStatus: React.FC<{ status: Order['status'] }> = ({ status }) => {
  const colorScheme = {
    pending: 'yellow',
    succeeded: 'green',
    cancelled: 'red',
  }[status];

  return <Badge colorScheme={colorScheme} fontSize="sm" px={2} py={1}>{status.toUpperCase()}</Badge>;
};

const History: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [sortBy, setSortBy] = useState('date');
  const toast = useToast();
  const btnRef = useRef<HTMLButtonElement>(null);

  const user = getCookie("user");
  const nUser = user && JSON.parse(user);

  const handleOrderDetails = (order: Order) => {
    setSelectedOrder(order);
  };

  const handleReorder = (order: Order) => {
    // Implement reorder logic here
    toast({
      title: "Reorder Successful",
      description: `You have reordered ${order.productName}`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const { data: orders, isPending, isRefetching } = useQuery({
    queryKey: ['getOrderHistory'], 
    queryFn: () => orderHistory({
      customerEmail: nUser.email
    })
  })

  const filteredOrders = orders?.filter((order:any) => 
      (filterStatus === 'all' || order.fulfilmentStatus === filterStatus) &&
      order?.products?.map(p => p.productName.toLowerCase().includes(searchTerm.toLowerCase()))
    )

    function formatString(name: string): string {
      return name.replace(
        /\w\S*/g,
        (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      ).replace(/_/g, ' ');
    }
    

  return (
    <>
      <Icon as={GoClock} onClick={onOpen} fontSize="26px" cursor="pointer" />

      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size="lg"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader bg="blue.500" color="white" fontSize="2xl">Order History</DrawerHeader>

          <DrawerBody>
            {(isPending || isRefetching) && (
              <Spinner />
            )}
            {(orders && orders?.length > 0) && (
              <VStack spacing={4} align="stretch" py={4}>
              <HStack>
                <InputGroup>
                <InputLeftElement pointerEvents='none'>
                  <GoSearch color='gray.300' />
                </InputLeftElement>
                <Input 
                  placeholder="Search orders" 
                  value={searchTerm} 
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                </InputGroup>
                <Select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
                  <option value="all">All Status</option>
                  <option value="pending">pending</option>
                  <option value="succeeded">Succeeded</option>
                  <option value="cancelled">Cancelled</option>
                </Select>
                <Select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                  <option value="date">Sort by Date</option>
                  <option value="price">Sort by Price</option>
                </Select>
              </HStack>

              {filteredOrders.map((order:any) => (
                <Box key={order.id} borderWidth={1} borderRadius="lg" overflow="hidden" boxShadow="md">
                  <VStack spacing={10} px={8} py={4}>
                    {order?.products?.map((prod: any, index:any) => (
                      <HStack w='full' alignItems={'center'} justifyContent={'space-between'} key={index}>
                        <Image 
                      src={prod.image} 
                      alt={prod.productName} 
                      boxSize="100px"
                      objectFit="cover"
                      borderRadius="md"
                    />
                    <VStack align="start" spacing={2} flex={1}>
                      <Text fontWeight="bold" fontSize="lg">{formatString(prod.productName)}</Text>
                      <Text fontSize="sm">{new Date(prod.createdAt).toLocaleDateString()}</Text>
                    </VStack>
                    <p>x {prod.quantity}</p>
                      </HStack>
                    ))}
                    <VStack>
                      <p>Date: {new Date(order?.products?.[0].createdAt).toLocaleDateString()}</p>
                      <p>Total: GHS {order.totalCost.toFixed(2)}</p>
                    <HStack align="end">
                      <OrderStatus status={order.fulfilmentStatus} />
                      <Button size="sm" onClick={() => handleOrderDetails(order)}>Details</Button>
                    </HStack>
                    </VStack>
                  </VStack>
                </Box>
              ))}
            </VStack>
            )}
            {!isPending && !isRefetching && orders?.length === 0 && (
              <div>no orders.</div>
            )}
          </DrawerBody>

          <Divider />

          <DrawerFooter>
            <Button colorScheme='blue' onClick={onClose}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <Modal isOpen={!!selectedOrder} onClose={() => setSelectedOrder(null)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Order Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {selectedOrder && (
              <VStack align="start" spacing={3}>
                <Text><strong>Order ID:</strong> {selectedOrder.id}</Text>
                <Text><strong>Product:</strong> {selectedOrder.productName}</Text>
                {/* <Text><strong>Date:</strong> {new Date(selectedOrder.date).toLocaleDateString()}</Text> */}
                <Text><strong>Status:</strong> {selectedOrder.fulfilmentStatus}</Text>
                <Text><strong>Total:</strong> ${(selectedOrder.totalCost.toFixed(2))}</Text>
              </VStack>
            )}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={() => setSelectedOrder(null)}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default History
