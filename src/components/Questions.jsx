import {
  Avatar,
  Box,
  Container,
  Heading,
  Button,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import { FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
export const Question = () => (
  <Box
    as="section"
    py={{
      base: '16',
      md: '24',
    }}
  >
    <Container width="60%" maxW="container.xl">
      <Stack spacing="3" align="center" textAlign="center">
        <Heading
          as="h1"

          size={{
            base: 'md',
            sm: 'lg',
            md: 'xl',
          }}
          textAlign={{ sm: 'left' }}
        >
          Still have questions?{' '}
        </Heading>
        {/* <Logo /> */}
        <Text

          textStyle={{
            base: '3xl',
            md: '4xl',
          }}
          fontWeight="medium"
        >
          Can't find the answer you're looking for? Our team is happy to answer
          your questions.
        </Text>
        <Stack spacing="4" align="center">
          <Avatar
            src="https://i.redd.it/hq9b3gfyuqa61.jpg"
            size="2xl"
            name="Sarah Johnson"
          />
          <Stack spacing="1">
            <Text fontWeight="semibold" textStyle="lg" color={mode('gray.100', 'gray.100')} >
              Subydev
            </Text>
        
            <Text           
 >Software Engineer</Text>
          </Stack>
          <Stack spacing="1">
            <Link to="/support">
            <Button
              size="lg"
              leftIcon={<FaEnvelope />}
              bg="tomato"
              _hover={{ bg: "#a44431" }}
              variant="solid"
              color={mode('gray.100', 'gray.100')}
            >
              Send us an email{' '}
            </Button>
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  </Box>
);
