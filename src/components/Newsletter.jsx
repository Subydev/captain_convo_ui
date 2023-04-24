import {
    Button,
    Container,
    FormControl,
    FormHelperText,
    Heading,
    Input,
    Box,
    Stack,
    Text,
    useColorModeValue as mode,

} from '@chakra-ui/react'

export const Newsletter = () => (
  <Box
    as="section"
    py={{
      base: '16',
      md: '24',
    }}
  >
            
        <Box
      // bg={mode('gray.50', 'tomato')}

      maxW={{ base: 'xl', md: '7xl' }}
      mx="auto"
      py={{ base: '10', md: '16' }}
        px={{ base: '6', md: '16' }}
        borderRadius="xl"
        boxShadow="lg"
      >
        <Stack
          spacing={{ base: '8', md: '8' }}
          direction={{ base: 'column', lg: 'row' }}
          justify="space-between"
        >
          <Stack spacing={{ base: '4', md: '5' }}>
            <Heading 
            color={mode('black', 'gray.100')}
            size={{ base: 'md', md: 'xl' }}>Sign up for our newsletter</Heading>
            <Text 
            color={mode('black', 'gray.100')}
            fontSize={{ base: 'lg', md: 'xl' }} 
            >
                            Be the first to know when we connect with new services
                            </Text>
          </Stack>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing="4"
            width="full"
            maxW={{ base: 'md', xl: 'lg' }}
          >
                        <FormControl flex="1">
                            <Input
                                focusBorderColor='tomato'
                                type="email"
                                _placeholder={{ opacity: 1, color: 'gray.400' }}
                                size="lg"
                                color = {mode('black', 'gray.100')}
                                placeholder="Enter your email" />
                        </FormControl>
                        <Button variant="primary" bg="tomato" size="lg"
                           _hover={{ bg: "#a44431" }}
                        color={mode('gray.100', 'gray.100')}
                        >
                            Subscribe
                        </Button>
                    </Stack>
                </Stack>
        </Box>
        </Box>
)