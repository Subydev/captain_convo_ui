import {
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    HStack,
    useDisclosure,
    ButtonGroup,
    Skeleton,
    Container,
    Avatar,
    Flex,
    IconButton,
    useBreakpointValue,
    Spacer,
    Text,
    Image,
    Heading,
    Tag,
    Icon,
    Divider,
    FormLabel,
    Select,
    Stack,
    useColorModeValue,
    useColorMode,
    useToast,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    InputRightAddon,
    DrawerCloseButton,
    LinkBox,
    LinkOverlay,
    LinkProps,
    DrawerFooter,

  } from "@chakra-ui/react";
  import { useRef } from "react";
  import { data } from "./data";
  import { FiMenu } from "react-icons/fi";
  import { NavbarLogo } from "../img/NavbarLogo";
  import { FiHelpCircle, FiSearch, FiSettings, FiDownloadCloud, FiCloudLightning } from 'react-icons/fi'
  import {AiOutlineStar} from 'react-icons/ai'
import { ColorModeSwitcher } from "../../ColorModeSwitcher";
import {useState, React} from 'react'
import LoginButton from '../../auth/LoginButton'
import LogoutButton from '../../auth/LogoutButton'
import {SignupButton} from '../../auth/SignupButton'
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


export const Navbar = () => {
  const { isAuthenticated } = useAuth0();
    const isDesktop = useBreakpointValue({
      base: false,
      lg: true,
    })
    return (
      <Box
        as="section"
        pb={{
          base: '12',
          md: '24',
        }}
      >
        <Box as="nav" bg="bg-surface" boxShadow="md">
            <Container py={{ base: '3', lg: '4' }} width="80%" maxW="container.xl">
            <Flex justify="space-between">
            <LinkBox>
              <LinkOverlay >
                <Box spacing="6">
                {isAuthenticated ? (
                      <Link to="/dashboard">
                        <NavbarLogo />
                      </Link>)
                      :
                      (<Link to="/">
                        <NavbarLogo />
                      </Link>)
                    }
                </Box>
                </LinkOverlay>
              </LinkBox>
                <HStack >
                {isDesktop && (
                  <ButtonGroup variant="ghost" spacing="1">
                    <Link to="/stats">
                        <Button>Server Status</Button>
                    </Link>
                    <Link to="/docs">
                        <Button>Docs</Button>
                    </Link>
                    <Link to="/contact">
                        <Button>Support</Button>
                    </Link>
                  </ButtonGroup>
                )}
              </HStack>
              {isDesktop ? (
                <HStack spacing="3">
                  <ButtonGroup variant="ghost" spacing="4">
                  {!isAuthenticated && (
                        <>
                            <SignupButton/>
                            <LoginButton/>
                        </>
                        )}
                              {isAuthenticated && (
                        <>
                            {null}
                        </>
                        )}
                    <LeftDrawer />
                  </ButtonGroup>
                </HStack>
                
              ) : (
                <LeftDrawer
                
                />
              )}
            </Flex>
          </Container>
        </Box>
      </Box>
    )
  }

  function LeftDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { user, isAuthenticated, isLoading } = useAuth0();

  
    return (
      <>
      <IconButton
        variant="ghost"
        icon={<FiMenu fontSize="1.25rem" />}
        aria-label="Open Menu"
        onClick={onOpen}
      />
        <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth='1px'>
            My Account
            <ColorModeSwitcher fontSize = "1.25rem" />
          </DrawerHeader>
          <Box>
            <Image
              objectFit='fill'
              src='https://i.imgur.com/1EhLugu.png'
            />
          </Box>
          <Skeleton isLoaded={isAuthenticated}>
          <Box paddingLeft={4}>
          <Avatar
              position="absolute"
              top="90"
              border="2px solid white"
              alt="Profile"
              size="xl"
              src={(user && user.picture) || "https://cdn.siasat.com/wp-content/uploads/2021/05/Discord.jpg"}
            />
          </Box>
          </Skeleton>

          <DrawerBody paddingTop={12} >
            <Stack spacing='6'  >
          <Skeleton isLoaded={isAuthenticated}>
              <Box>
                <Heading fontSize="xl">
                  {(user && user.name) || "John Smith" }
                  </Heading>
                <HStack pt="14px" spacing={2}>
                  <Tag borderRadius='full'>Beta Access </Tag>
                  <Tag borderRadius='full'>Developer </Tag>
                  <Tag borderRadius='full'>Elite
                  <Icon ml="1" as={AiOutlineStar} color='yellow.300' />
                  </Tag>
                </HStack>
              </Box>
              </Skeleton>
              <Divider />
<Skeleton isLoaded={isAuthenticated}>
              <Box pt={4}>
                <FormLabel>Select Bot</FormLabel>
                <Select id='owner' defaultValue='paybot' >
                  <option value='paybot'>Paybot</option>
                  <option value='paybot_test'>Paybot_test</option>
                </Select>
              </Box>
              </Skeleton>
<Skeleton isLoaded={isAuthenticated}>
           
              <Box pt={2} >
              <FormLabel>My Downloads</FormLabel>
              <LinkBox _hover={{ bg: "gray.50" }} p='3' borderWidth='1px' rounded='md'>
                  <Flex justify="space-between">
                      <Box fontSize="sm">
                          <LinkOverlay href='#'>
                              <Text color="empahsized" fontWeight="medium">
                                  paybot_model_001
                              </Text>
                          </LinkOverlay>
                          <Text color="muted">128.2GB</Text>
                      </Box>
                      <Box alignSelf={"flex-end"}>
                          <Icon as={FiDownloadCloud} boxSize="8"/>
                      </Box>
                  </Flex>
              </LinkBox>
              </Box>
              </Skeleton>
            </Stack>
            <Box pt={4}>
          <Skeleton isLoaded={isAuthenticated}>
            <Box py="14px">
              <FormLabel>
                Need moar Captain Convo?</FormLabel>
              <Text fontSize="sm" color="muted">
                Upgrade to the Elite tier to unlock direct API capabilities</Text>
            </Box>
            </Skeleton>

            <Box>
          <Skeleton isLoaded={isAuthenticated}>

              <Button leftIcon={<FiCloudLightning />} variant='outline'>
                Upgrade Now
              </Button>
              </Skeleton>
              </Box>
            </Box>
            <Skeleton isLoaded={isAuthenticated}>
            <Box pt={4}>

            <Box py="14px">
              <FormLabel>
                Support</FormLabel>
                <Text>
                We're here to help. If you have any questions or issues, please don't hesitate to
                      <Tag color="tomato">
                        <Link to='contact'>
                        create a support ticket.
                        </Link>
                      </Tag>
                  </Text>
            </Box>
            </Box>
            </Skeleton>

          </DrawerBody>
          <DrawerFooter borderTopWidth='1px'>
            <HStack spacing = '6'>
            {!isAuthenticated && (
                <>
                  <SignupButton />
                  <LoginButton />
                </>
              )}
              {isAuthenticated && (
                <>
                  <LogoutButton />
                </>
              )}
            </HStack>
          </DrawerFooter>
        </DrawerContent>
        </Drawer>
      </>
    )
  }