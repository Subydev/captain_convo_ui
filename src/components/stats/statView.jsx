import { Heading, Stack, Text,  useColorModeValue as mode} from '@chakra-ui/react'

export const StatView = (props) => {
  const { label, value, ...stackProps } = props
  return (
    <Stack spacing="3" textAlign="center" {...stackProps}>
      <Heading
        size={{
          base: 'lg',
          md: '3xl',
        }}
        color="tomato"
        fontWeight="medium"
      >
        {value}
      </Heading>
      <Text fontSize="lg" fontWeight="medium" color={mode('gray.800', 'gray.200')}>
        {label}
      </Text>
    </Stack>
  )
}