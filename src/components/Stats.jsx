import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  VStack,
  Stack,
  StackDivider,
  HStack,
  Select,
  Skeleton,
  SimpleGrid,
  TagRightIcon,
  TagLeftIcon,
  Tag,
  TagLabel,
  Text,
  Spinner,
} from '@chakra-ui/react';
import { IoIosWarning } from 'react-icons/io';
import {FiPauseCircle, FiBell, FiAlertTriangle, FiCircle} from 'react-icons/fi'
import { statsData } from './data/statsdata';
import { keyframes } from "@emotion/react";

export const Stats = () => {
  const [loading, setLoading] = useState(true);

const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.5;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const ActiveIndicator = () => (
    <Box
      w="30px"
      h="30px"
      bg={loading ? "red.500" : "green.500"}
      borderRadius="full"
      animation={`${pulse} 1s ease-in-out infinite`}
    />
  );

  useEffect(() => {
    const randomDelay = Math.random() * (5000 - 1000) + 1000;
    const timer = setTimeout(() => {
      setLoading(false);
    }, randomDelay);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box as="section" py={{ base: '4', md: '8' }}>
      <Container maxW="7xl">
        <Box
          bg="bg-surface"
          boxShadow="sm"
          borderRadius="lg"
          p={{ base: '4', md: '6' }}
        >
            <Box py={12} >
                <Stack direction="row" spacing="2" >
                    <Box alignSelf="center" px={4}>
                        <ActiveIndicator />
                    </Box>
                    <Box>
                        <Text color="gray.200" fontSize="4xl"> localhost:300/api-pay</Text>
                        <Text color="gray.300" fontSize="md"> Up - Refreshing every 30 seconds...</Text>
                    </Box>
                </Stack>
            </Box>
            <Stack direction="row" spacing="12">
                <HStack _hover={{ cursor: 'pointer', bg: 'gray.700' }}>
                    <FiAlertTriangle/>
                    <Text color="gray.300">Send a test alert</Text>
                </HStack>
                <HStack _hover={{ cursor: 'pointer', bg: 'gray.700' }}>
                    <FiBell/>
                    <Text color="gray.300">Incidents</Text>
                </HStack>
                <HStack _hover={{ cursor: 'pointer', bg: 'gray.700' }}>
                    <FiPauseCircle/>
                    <Text color="gray.300">Pause Monitor</Text>
                </HStack>
            </Stack>

      
            
          <SimpleGrid py="4" minChildWidth="240px" spacing="40px">
            <Skeleton isLoaded={!loading}>
                <Box px={4} py={4} bg="gray.700" borderRadius="lg" boxShadow="md" height="120px">
                    <Text color="gray.300" fontSize="lg">
                        Monitor is up for
                    </Text>
                    <Text color="emphasized" fontSize="2xl" fontWeight="medium">
                        2 days 1 hour 10 minutes
                    </Text>
                </Box>
            </Skeleton>
 
            <Skeleton isLoaded={!loading}>
                <Box px={4} py={4} bg="gray.700" borderRadius="lg" boxShadow="md" height="120px">
                    <Text color="gray.300" fontSize="lg">
                        Total Incidents
                    </Text>
                    <Text color="emphasized" fontSize="2xl" fontWeight="medium">
                        44
                    </Text>
                </Box>
            </Skeleton>
            <Skeleton isLoaded={!loading}>
                <Box px={4} py={4} bg="gray.700" borderRadius="lg" boxShadow="md" height="120px">
                    <Text color="gray.300" fontSize="lg">
                       Last Check
                    </Text>
                    <Text color="emphasized" fontSize="2xl" fontWeight="medium">
                        42 minutes ago
                    </Text>
                </Box>
            </Skeleton>
          </SimpleGrid>
          <Stack spacing="5" divider={<StackDivider />}>
            <HStack justify={'space-between'}>
              <Stack spacing="1">
                <Text fontSize="lg" fontWeight="medium">
                    Simulation Data *
                </Text>
              </Stack>
              <Stack>
                <Select defaultValue="option1">
                  <option value="option1">Paybot</option>
                  <option value="option2">Paybot_test</option>
                </Select>
              </Stack>
            </HStack>

            {statsData.map(data => (
              <Stack
                key={data.id}
                justify="space-between"
                direction="row"
                spacing="4"
              >
                <Stack
                  spacing="0.5"
                  fontSize="sm"
                  alignItems="center"
                  direction="row"
                >
                  <Box
                    // bg="green.400"
                    w="10"
                    h="10"
                    borderRadius="full"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    mr="2"
                  >
                    {loading ? (
                      <Spinner
                        thickness="2px"
                        speed="0.65s"
                        emptyColor="gray.200"
                        color="white"
                        size="md"
                      />
                    ) : (
                      <Text fontSize="md" color="white" fontWeight="bold">
                        &#10003;
                      </Text>
                    )}
                  </Box>
                  <Box>
                    <Text color="emphasized" fontSize="md" fontWeight="medium">
                      {data.header}
                    </Text>
                    <Text color="gray.300">{data.description}</Text>
                  </Box>
                </Stack>
                <Box display="flex" alignItems="center">
                  <Tag size="md" variant="outline" colorScheme="green">
                    <TagLabel>SSL </TagLabel>
                  </Tag>
                </Box>
              </Stack>
            ))}
            <Box
              bg="gray.800"
              p={4}
              rounded="md"
              mb={4}
              display="flex"
              alignItems="center"
              _hover={{ cursor: 'pointer', bg: 'gray.700' }}
            >
              <Text fontSize="xl" fontWeight="bold">
                + New Monitor
              </Text>
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Stats;
