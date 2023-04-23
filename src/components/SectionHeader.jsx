import { Box, Container, Divider, Heading, Stack, Text } from '@chakra-ui/react'

export const SectionHeader = () => (
  <Box
    as="section"
    bg="bg-surface"
    pt={{
      base: '4',
      md: '8',
    }}
    pb={{
      base: '8',
      md: '18',
    }}
  >
      <Stack spacing="5">
        <Box spacing="4">
          <Heading pb="2" fontWeight="medium">
           Contact Us
          </Heading>
          <Text color="muted">
            We will typically respond within 24 hours.
          </Text>
        </Box>
        <Divider />
      </Stack>
  </Box>
)