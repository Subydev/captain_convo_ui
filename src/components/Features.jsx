import {
  Box,
  Container,
  Heading,
  Icon,
  SimpleGrid,
  Square,
  Stack,
useColorModeValue as mode,
  Text,
} from '@chakra-ui/react';
import { features } from './data/featureData';

export const Feature = () => (
  <Box
  as="section"
  py={{base: '12',md: '16',}}>
    {/* <Container width="80%" maxW="container.xl" py={{ base: '16', md: '24', }} mt={-8}> */}
      <Stack spacing={{ base: '12', md: '16', }}>
        <Stack spacing={{ base: '4', md: '5', }} align="center" textAlign="center">
          <Stack spacing="3">
          <Text fontSize={{ base: 'md', md: 'xl', }} fontWeight="semibold" 
          >
              Features
            </Text>
            <Heading as="h1" size="2xl" mt="8" fontWeight="semibold"

            >

              What can you expect?
            </Heading>
          </Stack>
          <Text fontSize={
                                {
                                    base: 'lg',
                                    md: 'xl'
                                }
                            }
                            maxW="3xl">
            Our bots are fine-tuned to provide seamless integration with your
            favorite social media apps like discord and telegram.
          </Text>
        </Stack>
        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3,
          }}
          columnGap={8}
          rowGap={{
            base: 10,
            md: 16,
          }}
        >
          {features.map(feature => (
            <Stack
              key={feature.name}
              spacing={{
                base: '4',
                md: '5',
              }}
              align="center"
              textAlign="center"
            >
              <Square
                size={{
                  base: '10',
                  md: '14',
                }}
                bg="tomato"
                color="inverted"
                borderRadius="lg"
                boxShadow="sm"
              >
                <Icon
                  as={feature.icon}

                  boxSize={{
                    base: '6',
                    md: '8',
                  }}
                />
              </Square>
              <Stack
                spacing={{
                  base: '1',
                  md: '2',
                }}
                flex="1"

              >
              <Text
                  fontSize={{
                    base: 'lg',
                    md: 'xl',
                  }}

                  fontWeight="medium"
                >
                  {feature.name}{' '}
                </Text>
                <Text fontSize={
                                {
                                    base: 'lg',
                                    md: 'lg'
                                }
                            }

                            maxW="3xl">{feature.description}</Text>
              </Stack>
            </Stack>
          ))}{' '}
        </SimpleGrid>
      </Stack>
    {/* </Container> */}
  </Box>
);
