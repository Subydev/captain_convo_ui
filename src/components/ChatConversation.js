import React, { useState, useEffect, useRef } from 'react'; // Add useRef
import {
  Box,
  Flex,
  VStack,
  HStack,
  Text,
  Avatar,
  Icon,
} from '@chakra-ui/react';
import { FaHashtag } from 'react-icons/fa';
import { initialMessages } from './ChatHistory';
import { IoIosSettings } from 'react-icons/io';
import ChatHeader from './ChatHeader';
import { motion } from "framer-motion";
import AnimText from './AnimText';


const MotionBox = motion(Box);
const ChannelMenuItem = ({ channelName }) => (
  <HStack
  w="100%" // add this line
    px={3}
    py={1}
    borderRadius="5px"
    cursor="pointer"
    _hover={{ backgroundColor: '#46494D' }}
    bg={channelName === 'Linguine-Memes' ? '#5A5D61' : '#2f3136'} // add this line
    justifyContent="space-between" // added

  >
    
  <HStack spacing={2}>
    <Icon as={FaHashtag} color={channelName === 'Linguine-Memes' ? '#fff' : '#72767d'} />
    <Text color={channelName === 'Linguine-Memes' ? '#fff' : '#72767d'} fontSize="sm">
      {channelName}
    </Text>
    </HStack>

    {channelName === 'Linguine-Memes' && <Icon as={IoIosSettings} color="#fff" />}

  </HStack>
);

const ChatMessage = ({ message }) => {
  const { text, sender, time, isNew } = message;
  const senderIsBot = message.sender === 'Captain Convo';
  const messageTimestamp = new Date(message.timestamp).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });
  return (
    <HStack mb="10px" alignSelf={senderIsBot ? 'flex-start' : 'flex-end'}>
      {senderIsBot && (
        <Avatar
          size="sm"
          name="Captain Convo"
          src="https://th.bing.com/th/id/OIP.koMx7YvLt1uIcy4ExCiAIwAAAA?w=164&h=180&c=7&r=0&o=5&pid=1.7"
        />
      )}
      <VStack spacing={1} alignItems={senderIsBot ? 'flex-start' : 'flex-end'}>
        <MotionBox
          p="8px 12px"
          borderRadius="16px"
          bg={senderIsBot ? '#40444b' : '#7289da'}
          maxWidth="70%"
          initial={isNew ? { opacity: 0, y: 50 } : {}}
          animate={isNew ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Text color={senderIsBot ? '#dcddde' : '#fff'} lineHeight="1.4">
            {message.text}
          </Text>
        </MotionBox>
      </VStack>
      {!senderIsBot && (
        <Avatar
          size="md"
          name="Subydev"
          border="1px solid #7289da"
          src="https://cdn3.emoji.gg/emojis/8748_gigachad.png"
        />
      )}
    </HStack>
  );
};

const ChatConversation = () => {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef(null); // Add this line

  useEffect(() => {
    let timeout;
    const displayMessages = (messages, index) => {
      if (index < messages.length) {
        setIsTyping(messages[index].sender === 'Captain Convo');
        timeout = setTimeout(() => {
          setMessages((prevMessages) => {
            const isNew = messages[index].sender === 'Captain Convo' && index === messages.length - 1;
            return [...prevMessages, { ...messages[index], isNew }];
          });          setIsTyping(false);
          displayMessages(messages, index + 1);
        }, Math.random() * (5000 - 1000) + 1000);
      }
    };
    
    displayMessages(initialMessages, 0);

    return () => {
      clearTimeout(timeout);
    };
  }, []);
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);
  

  const randomAvatars = [
    // Add 8 avatar URLs here
    "https://th.bing.com/th/id/OIP.6p68g7Jak29zg2lvRTFNPAHaHa?pid=ImgDet&rs=1",
    "https://th.bing.com/th/id/OIP.S1nECYwVmV3H_91pYDMbGAHaI1?w=149&h=192&c=7&r=0&o=5&pid=1.7",
    "https://th.bing.com/th/id/OIP.kOLuUNw7H5V3EzBLfbGNCQHaHa?w=177&h=192&c=7&r=0&o=5&pid=1.7",
    "https://th.bing.com/th/id/OIP.EWDObedOTelsQidns1jowQHaGz?w=196&h=180&c=7&r=0&o=5&pid=1.7",
    "https://th.bing.com/th/id/OIP.GLSyJpQBG_tgcJfKa1G3nAHaFs?w=213&h=180&c=7&r=0&o=5&pid=1.7",
    "https://th.bing.com/th/id/OIP.QwgKEs5tLonRfn7dS6OWzQAAAA?w=128&h=128&c=7&r=0&o=5&pid=1.7",
    "https://th.bing.com/th/id/OIP.Rvy3KnmXujtjKc0oEQbpQAHaG5?w=180&h=180&c=7&r=0&o=5&pid=1.7",
    "https://th.bing.com/th/id/OIP.DDVz0R-4ecoQJZTQdsK7SgHaEK?w=321&h=180&c=7&r=0&o=5&pid=1.7"

  ];

  return (
    <Flex borderRadius="2xl" h="800px" w="auto" bg="#36393f" direction="column">
      <ChatHeader />
      <Flex flex="1" overflowY="hidden">

      <VStack
        w="60px"
        flexShrink={0}
        pt={6}
        pb={2}
        spacing={4}
        overflowY="auto"
        bg="#202225"
        css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {randomAvatars.map((avatarUrl, index) => (
          <Avatar key={index} size="sm" src={avatarUrl} />
        ))}
      </VStack>
      <VStack
        w="180px"
        flexShrink={0}
        pt={6}
        pb={2}
        spacing={2}
        overflowY="auto"
        bg="#2f3136"
        css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
        alignItems="flex-start" // add this line

      >
        <ChannelMenuItem channelName="Linguine-Memes" />
        <ChannelMenuItem channelName="random" />
        <ChannelMenuItem channelName="Pics" />
        <ChannelMenuItem channelName="warcraft-stuff" />

        {/* Add more channels as desired */}
      </VStack>
      <Box
        flex="1"
        display="flex"
        flexDirection="column" // Change to "column"
        pt="40px"
        pl="20px"
        pr="20px"
        overflowY="hidden"
        position="relative" // add this line
        pb="30px" // add this line
        maxWidth="100%" // add this line
        ref={chatContainerRef} // Add this line

        css={{
          '&::-webkit-scrollbar': {
            width: '4px',
          },
    
        }}
      >
  {messages.map((message, index) => (
    <ChatMessage key={index} message={message} />
))}



  <Box
    position="absolute"
    bottom="0"
    width="100%"
    px="20px"
    pb="10px"
    display={isTyping ? "block" : "none"} // hide when isTyping is false
  >
    <Text color="#72767d" fontSize="sm">
      Captain Convo is typing...
    </Text>
      </Box>
    </Box>
        </Flex>
        </Flex>

  );
};

export default ChatConversation;
