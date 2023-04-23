import { useState } from 'react'
import { useLocation } from "react-router-dom";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Divider,
  Textarea,
  VStack,
} from '@chakra-ui/react'
import { SectionHeader } from '../components/SectionHeader'
import { Dropzone } from '../components/Dropzone'

const Contact = () => {

const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: decodeURIComponent(
        new URLSearchParams(location.search).get("subject") || ""
      ),
    message: '',
    file: null,
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleFileChange = (file) => {
    setFormData({ ...formData, file })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    // Send form data to backend or API
  }
  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      px="8"
      maxW="3xl"
      mx="auto"
    >
      <SectionHeader >Support</SectionHeader>
      <VStack spacing="6">
        <FormControl isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </FormControl>
        <FormControl >
          <FormLabel>Subject</FormLabel>
          <Input
           type="text"
           name="subject"
           value={formData.subject}
           onChange={handleChange}
           placeholder="Enter the subject of your message"
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Message</FormLabel>
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
          />
        </FormControl>

        <Dropzone onFileChange={handleFileChange} />
        <Divider />

        <Button type="submit" bg="tomato" w="sm">
          Send Message
        </Button>

      </VStack>
    </Box>
  )
}

export default Contact;