import {
    Badge,
    Box,
    Button,
    Heading,
    HStack,
    Img,
    Stack,
    Text,
    useColorModeValue as mode,
  } from '@chakra-ui/react'
  import { Link } from "react-router-dom"
  import { HomeStat } from '../components/HomeStats';

  import { HiArrowRight } from 'react-icons/hi'
  import ChatConversation from "../components/ChatConversation";
  export const Landing = () => {
    return (
      <Box
        as="section"
        pb="24"
        pos="relative"
        px={{
          base: '6',
          lg: '12',
        }}
      >
        <Box maxW="7xl" mx="auto">
          <Box
            maxW={{
              lg: 'md',
              xl: 'xl',
            }}
            pt={{
              base: '20',
              lg: '40',
            }}
            pb={{
              base: '16',
              lg: '24',
            }}
          >
          <Link to ="/stats">
            <HStack
              className="group"
              as="a"
              href="#"
              px="2"
              py="1"
              rounded="full"
              fontSize="sm"
              mb="8"
              display="inline-flex"
              minW="18rem"
            >
              <Badge
                px="2"
                variant="solid"
                colorScheme="green"
                rounded="full"
                textTransform="capitalize"
              >
                New
              </Badge>
              <Box fontWeight="medium">Discord bot live server status</Box>
              <Box
                aria-hidden
                transition="0.2s all"
                _groupHover={{
                  transform: 'translateX(2px)',
                }}
                as={HiArrowRight}
                display="inline-block"
              />
            </HStack>
            </Link>

            <Heading as="h1" size="3xl" lineHeight="1" fontWeight="extrabold" letterSpacing="tight">
              Carefully crafted with the{' '}
              <Box as="mark" color="tomato" bg="transparent">
              latest in GPT tech

              </Box>
            </Heading>
            <Text mt={4} fontSize="xl" fontWeight="medium" color={mode('gray.600', 'gray.400')}>
            Our goal is to revolutionize the way people interact online by developing cutting-edge chat bots that are intuitive, efficient, and highly effective in meeting the needs of our clients.

            </Text>
            <Stack
              direction={{
                base: 'column',
                sm: 'row',
              }}
              spacing="4"
              mt="8"
            >
              <Link to="/support?subject=Requesting%20Beta%20Access">
              <Button size="lg" bg="tomato" height="14" px="8" fontSize="md">
            Early Access
              </Button>
              </Link>
  
            </Stack>
          </Box>
        </Box>
        <Box
          pos={{
            lg: 'absolute',
          }}
          insetY={{
            lg: '0',
          }}
          insetEnd={{
            lg: '0',
          }}
      
          w={{
            base: 'full',
            lg: '50%',
          }}
          height={{
            base: '96',
            lg: 'full',
          }}
          sx={{
            clipPath: {
              lg: 'polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%)',
            },
          }}
        >
   <ChatConversation />
        </Box>
      </Box>
    )
  }
