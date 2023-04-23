import React from 'react';
import {
  Flex,
  HStack,
  Icon,
  Text,
  Input,
  Hide,
  IconButton,
} from '@chakra-ui/react';
import { FaHashtag } from 'react-icons/fa';
import { AiOutlineBell } from 'react-icons/ai';
import { FiUser, FiSearch, FiDownload, FiHelpCircle } from 'react-icons/fi';
import { BsFillGridFill } from 'react-icons/bs';
import { RiPushpin2Line } from 'react-icons/ri';

const ChatHeader = () => (
  <Flex
    align="center"
    justify="space-between"
    px={4}
    py={2}
    borderBottom="1px solid #202225"
    boxShadow="md"
  >
    <HStack spacing={4}>
      <HStack pl={12}>
        <Icon as={FaHashtag} color="#fff"/>
        <Text>Linguine-Memes</Text>
      </HStack>
      <Icon as={BsFillGridFill} color="#fff" />
      <Icon as={AiOutlineBell} color="#fff" />
      <Icon as={RiPushpin2Line} color="#fff" />
      <Icon as={FiUser} color="#fff" />

    </HStack>
    <Hide below='md'>

    <HStack>

    <Input
        type="text"
        placeholder="Search"
        size="sm"
        w="200px"
        bg="gray.700"
        color="#fff"
        borderColor="gray.500"
        borderRadius={"lg"}
        _focus={{
          borderColor: '#7289da',
        }}
      />
      <Icon as={FiDownload} color="#fff" />
      <Icon as={FiHelpCircle} color="#fff" />
   
      </HStack>
    </Hide>
  </Flex>
);

export default ChatHeader;