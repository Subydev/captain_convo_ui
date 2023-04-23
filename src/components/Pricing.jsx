import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import { DurationSwitcher } from './pricing/DurationSwitcher';
import { PricingCard } from './pricing/PricingCard';
import { useState } from 'react';

export const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <Box as="section"  py="20">
      <Box
        maxW={{
          base: 'xl',
          md: '7xl',
        }}
        align="center"
        mx="auto"
        px={{
          base: '6',
          md: '8',
        }}
      >
        <Heading
          as="h1"
          fontWeight="semibold"
          size={{
            base: 'md',
            sm: 'xl',
            md: '2xl',
          }}
          textAlign={{ sm: 'center' }}
        >
          Pricing Plans
        </Heading>
        <Text
          mt="4"
          maxW="xl"
          mx="auto"
          fontWeight="semibold"
          fontSize="xl"
          textAlign={{
            sm: 'center',
          }}
        >
          Our pricing tiers offer a range of features for different types of
          users and can help businesses or communities improve their chatbot
          capabilities and moderation.
        </Text>
        <DurationSwitcher
          mt="8"
          isYearly={isYearly}
          setIsYearly={setIsYearly}
        />
        <SimpleGrid
          alignItems="flex-start"
          mt={{
            base: '10',
            lg: '24',
          }}
          columns={{
            base: 1,
            lg: 3,
          }}
          spacing={{
            base: '12',
            lg: '8',
          }}
        >
          <PricingCard
            isYearly={isYearly}
            setIsYearly={setIsYearly}
            name="Basic Tier"
            description="For $14.99/month, 
                    The Basic tier offers standard responses to frequently asked questions and basic chatbot capabilities, making it a suitable option for small Discord communities or users who are just getting started with Discord bots."
            price={14.99}
            features={[
              'Standard responses to frequently asked questions',
              'Basic chatbot capabilities, fine tuned from your datasets',
              'Suitable for small Discord communities or users who are just getting started with Discord bots',
              'Eearly access to new model training and other social media integrations',
            ]}
          />
          <PricingCard
            isYearly={isYearly}
            setIsYearly={setIsYearly}
            popular
            name="Pro Tier"
            description="The Pro tier offers more advanced features, such as more nuanced responses to user input and the ability to create custom responses based on user data. It's suitable for medium-sized Discord communities or users who want more advanced chatbot capabilities. The Pro Tier also includes additional API acpabilities such as retreiving models and generating responses via CLI"
            price={24.99}
            features={[
              'Standard responses to frequently asked questions',
              'Ability to create custom responses based on user data',
              'Suitable for medium-sized Discord communities or users who want more advanced chatbot capabilities',
              'Full Captain Convo API Access',
              'Eearly access to new model training and other social media integrations',
            ]}
          />
          <PricingCard
            isYearly={isYearly}
            setIsYearly={setIsYearly}
            name="Elite Tier"
            description="The Elite tier offers the most advanced set of features, including AI-powered conversation flows and custom integrations with other software. It's suitable for larger communities or businesses that rely on chatbots to handle customer support or other critical functions."
            price={56.99}
            features={[
              'AI-powered conversation flows',
              'Custom integrations with other software tools',
              'Suitable for larger communities or businesses that rely on chatbots to handle support or other critical functions',
              'Eearly access to new model training and other social media integrations',
            ]}
          />
        </SimpleGrid>
      </Box>
    </Box>
  );
};
