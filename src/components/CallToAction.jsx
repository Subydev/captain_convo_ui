import {
  Box,
  Button,
  Container,
  Heading,
  Stack,
  Hide,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaExternalLinkAlt, FaChevronCircleRight } from 'react-icons/fa';

export const CallToAction = () => (
  <Container
    as="section"
    maxW="container.xl"
    centerContent
    py="10"
  >
    <Box
      mx="auto"
      boxShadow={"md"}
      borderRadius="3xl"
      bg={mode('white', 'gray.800')}
      px={{
        base: '6',
        lg: '16',
      }}
      py={{
        base: '10',
        lg: '16',
      }}
    >
      <Stack
        spacing="8"
        direction={{
          sm: 'column',
          lg: 'row',
        }}
        justify="space-between"
      >
        <Stack align="center" spacing="6" maxW="2xl">
          <Heading as="h1" size="xl" mt="4" fontWeight="semibold">
            Need some reading material?
          </Heading>
          <Text
            color="muted"
            fontSize={{
              base: 'lg',
              lg: 'lg',
            }}
          >
            Reading the documentation is a great way to get the most out of our
            product. It can help you understand how to use all of the features
            and functionalities, as well as troubleshoot any issues you might
            encounter.{' '}
          </Text>
        </Stack>
        <Hide below='md'>
          <Stack>
            <Link to="/docs">
              <Button
                mt="12"
                p="4"
                bg="tomato"
                height="14"
                fontSize="md"
                fontWeight="medium"
                _hover={{ bg: "#a44431" }}
                rightIcon={<FaExternalLinkAlt />}
                size={{
                  base: 'md',
                  md: 'lg',
                }}
              >
                View Documentation
              </Button>
            </Link>
          </Stack>
        </Hide>
      </Stack>
    </Box>
  </Container>
);
