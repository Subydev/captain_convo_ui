import { ButtonGroup, Container, Flex, IconButton, Stack, Text,useColorModeValue as mode } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import FooterLogo from './img/FooterLogo'

export const Footer = (props) => {
  return (
    <Flex
      as="footer"
      bg="tomato"
      role="contentinfo"
      px={{
        base: '12',
        md: '16',
      }}
      py={{
        base: '1',
        md: '10',
      }}
    >
      <Stack
        flex={1}
        spacing={{
          base: '1',
          md: '2',
        }}
      >
        <Stack justify="space-between" direction="row" align="center">
          <FooterLogo />
          <ButtonGroup variant="ghost">
            <IconButton
              as="a"
              href="#"
              color={mode('white', 'gray.100')}
              aria-label="LinkedIn"
              icon={<FaLinkedin fontSize="2.25rem" />}
            />
            <IconButton px="5" as="a" href="#" 
              color={mode('white', 'gray.100')}
            
            aria-label="GitHub" icon={<FaGithub fontSize="2.25rem" />} />
            <IconButton
              as="a"
              href="#"
              aria-label="Twitter"
              color={mode('white', 'gray.100')}

              icon={<FaTwitter fontSize="2.25rem" />}
            />
          </ButtonGroup>
        </Stack>
        <Text fontSize="sm" color="white">
          &copy; {new Date().getFullYear()} Captain Convo LLC. All rights reserved.
        </Text>
      </Stack>
    </Flex>
  )
}

