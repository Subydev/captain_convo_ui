import {
  Box,
  Button,
  ButtonGroup,
  Icon,
  Container,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
} from '@chakra-ui/react';
import { NavbarLogo } from './img/NavbarLogo';
import { useNavbar } from './useNavbar'
import { FiMenu, FiSun } from 'react-icons/fi'

export const Navbar = props => {
  
  const { rootProps } = useNavbar()
  const { onClickMenu, onToggleMode, isMenuOpen, menuButtonRef } = props

  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,

  });
  return (
      <Box as="nav" role="navigation" bg="tomato" boxShadow="md" zIndex="docked" position="sticky" top="0" p="1" 
   {...rootProps}>
          <HStack spacing="4" justify="space-between" >
            <NavbarLogo px="7"/>
            {isDesktop ? (
              <Flex  >
                        <IconButton
              variant="ghost"
              icon={<Icon as={FiSun} fontSize="1.6rem" />}
              aria-label="Toggle color mode"
              onClick={onToggleMode}
            />
                {/* <ButtonGroup color="white" variant="link" spacing="8">
                  {['Product', 'Pricing', 'Resources', 'Support'].map(item => (
                    <Button key={item}>{item}</Button>
                  ))}
                </ButtonGroup> */}
                <HStack >

                  <Button mx="4" variant="primary" bg="#FC9658" color="white">Login</Button>
                </HStack>
              </Flex>
            ) : (
              <IconButton
              
                variant="ghost"
                color="gray.100"
                icon={<FiMenu fontSize="1.5rem" />}
                aria-label="Open Menu"
              />
            )}
          </HStack>
      </Box>
  );
};
