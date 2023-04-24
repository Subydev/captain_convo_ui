import { Center, Container, Box, SimpleGrid, Stack, Text, useColorModeValue as mode, } from '@chakra-ui/react'
import * as logos from './img/Brands'

export const LogoGrid = () => (
  // <Container width="80%" maxW="container.xl" 
  <Box
    as="section"
    py={{base: '12',md: '16',}}>
    <Box
      maxW={{ base: 'xl', md: '7xl' }}
      mx="auto"
      px={{ base: '6', md: '8' }}
    >
    <Stack spacing="8">
      <Text
        fontSize={{
          base: 'md',
          md: 'lg',
        }}
        fontWeight="medium"
        textAlign="center"
      >
        Our tech stack      </Text>
    
<       SimpleGrid gap={{ base: '4', md: '6', }} columns={{ base: 2, md: 3, } }>
        {Object.entries(logos).map(([name, Logo]) => (
          <Center
            key={name}
            py={{
              base: '4',
              md: '8',
            }}
            boxShadow="md"
            borderRadius="lg"
            bg={mode('bg.400', 'gray.800')}
          >
            <Logo
              h={{
                base: '8',
                md: '10',
              }}
              maxW="180px"
               fill={mode('gray.600', 'gray.50')}
            />
          </Center>
        ))}
      </SimpleGrid>
    </Stack>
  </Box>

  {/* // </Container> */ }
  </Box >
)