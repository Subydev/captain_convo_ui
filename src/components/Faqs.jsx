import {
    Box,
    Container,
    Divider,
    Heading,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Stack,
    Text,
useColorModeValue as mode,

} from '@chakra-ui/react';

export const Faq = () => (
  <Container
    maxW="container.xl"
    py={{
      base: '4',
      md: '8',
    }}
  >
    <Stack spacing="5">
      <Stack
        py={{
          base: '10',
          md: '16',
        }}
     
        //  bg={mode("#4298e1", 'gray.900')}

        spacing="4"
        direction={{
          base: 'column',
          sm: 'row',
        }}
        justify="space-between"
      >
        <Box flex={1}>
          <Heading
            as="h1"
            py={2}
            size={{
              base: 'md',
              sm: 'lg',
              md: 'xl',
            }}
            textAlign={{ sm: 'left' }}
          >
            FAQs
          </Heading>
          <Text fontSize="lg" fontWeight="small">
            Everything you need to know about the product and billing. For
            questions about licensing, please see our licensing page.{' '}
          </Text>
        </Box>
        <Box flex={2}>
          <Accordion defaultIndex={[0]} allowMultiple py={2}>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    fontSize="xl"
                    fontWeight="medium"
                    textAlign="left"
                  >
                    Is there a free trial available before I commit to a paid
                    subscription?{' '}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                There is currently not a free subscription at this time.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    fontSize="xl"
                    fontWeight="medium"
                    textAlign="left"
                  >
                    How many API calls am I allowed to make per month?{' '}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                The specific number of API calls allowed per month will depend
                on the pricing tier you choose and the terms of service for the
                service you are using. Typically, subscription plans will offer
                a set number of API calls per month, with higher-priced plans
                providing a higher limit.{' '}
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    fontSize="xl"
                    fontWeight="medium"
                    textAlign="left"
                  >
                    Are there any restrictions on how I can use the API?{' '}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                The service provider may have restrictions on how you can use
                the API, such as prohibiting commercial use or limiting the
                number of requests per second. Be sure to read the terms of
                service carefully to understand any restrictions that may apply.{' '}
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    fontSize="xl"
                    fontWeight="medium"
                    textAlign="left"
                  >
                    Is there a developer community or support team available to
                    help with API integration questions?{' '}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Many service providers offer developer communities or support
                teams to help with API integration questions. This may include
                documentation, tutorials, and forums where you can ask questions
                and get support from other developers. Additionally, some
                providers may offer dedicated support teams for enterprise-level
                customers. Be sure to check the service provider's website or
                documentation for more information.{' '}
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    fontSize="xl"
                    fontWeight="medium"
                    textAlign="left"
                  >
                    What are some best practices for training and fine-tuning my
                    Discord bot?{' '}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Some best practices for training and fine-tuning your Discord
                bot include: Starting with a small set of training data and
                gradually adding more to avoid overfitting Using diverse
                training data to improve the bot's ability to handle a range of
                inputs and contexts Regularly reviewing and updating the bot's
                training data to ensure it remains accurate and up-to-date
                Testing the bot with real users to identify areas for
                improvement and refine its responses over time{' '}
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    fontSize="xl"
                    fontWeight="medium"
                    textAlign="left"
                  >
                    Is there a developer community or support team available to
                    help with API integration questions?{' '}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Many service providers offer developer communities or support
                teams to help with API integration questions. This may include
                documentation, tutorials, and forums where you can ask questions
                and get support from other developers. Additionally, some
                providers may offer dedicated support teams for enterprise-level
                customers. Be sure to check the service provider's website or
                documentation for more information.{' '}
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    fontSize="xl"
                    fontWeight="medium"
                    textAlign="left"
                  >
                    How can I ensure my Discord bot provides accurate and
                    helpful responses to users?{' '}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                To ensure your Discord bot provides accurate and helpful
                responses, you can: Train the bot with high-quality, relevant
                data that covers a range of topics Monitor the bot's performance
                and user feedback to identify and address issues quickly
                Continuously review and update the bot's training data to ensure
                it remains accurate and relevant Provide users with clear
                instructions and guidance on how to interact with the bot
                effectively{' '}
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    fontSize="xl"
                    fontWeight="medium"
                    textAlign="left"
                  >
                    Are there any common mistakes to avoid when using Discord
                    bots?{' '}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Some common mistakes to avoid when using Discord bots include:
                Over-reliance on bots for customer support or engagement,
                without providing human support as needed Lack of testing or
                quality assurance, leading to inaccurate or unhelpful responses
                Inconsistent or confusing user experience, leading to
                frustration or disengagement Insufficient training data or
                training data that is not diverse or relevant{' '}
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Stack>
      <Divider />
    </Stack>
  </Container>
);

