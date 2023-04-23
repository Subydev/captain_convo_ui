import {
    Box,
    Button,
    createIcon,
    Flex,
    List,
    ListItem,
    Text,
    useColorModeValue as mode,
} from '@chakra-ui/react'
import React, { useState } from 'react';

const CheckIcon = createIcon({
    viewBox: '0 0 17 12',
    d: 'M0 5.82857L1.64571 4.11429L5.48571 7.2L14.8114 0L16.4571 1.71429L5.48571 12L0 5.82857Z',
})
const PricingDetail = (props) => {
    const { children, ...rest } = props
    return (
        <ListItem display="flex" alignItems="flex-start" fontWeight="medium" maxW="260px" {...rest}>
            <CheckIcon mr="4" mt="1" color='tomato' />
            <Text as="span" display="inline-block">
                {children}
            </Text>
        </ListItem>
    )
}
const PopularBadge = (props) => (
    <Box
        whiteSpace="nowrap"
        top="-4"
        left="50%"
        transform="translateX(-50%)"
        pos="absolute"
        rounded="md"
        fontWeight="bold"
        fontSize="sm"
        px="4"
        py="1"
        textTransform="uppercase"
        bg="tomato"
        color="white"
        {...props}
    />
)
const PriceDisplay = (props) => {
    const { currency, price } = props
    return (
        <Flex w="100%" align="center" justify="center" my="5" fontWeight="extrabold">
            <Text fontSize="4xl" mr="2">
                {currency}
            </Text>
            <Text fontSize="72px" lineHeight="1" letterSpacing="tight">
                {price}
            </Text>
        </Flex>
    )
}
const PricingWrapper = (props) => {
    const { highlight, ...rest } = props
    const popularStyles = {
        borderWidth: '3px',
        borderColor: 'tomato',
        zIndex: 1,
        px: '8',
        pt: '12',
        pb: '10',
        top: {
            lg: '-8',
        },
    }
    const styles = highlight ? popularStyles : null
    return (
        <Box
            w="full"
            maxW="md"
            mx="auto"
            px="10"
            pt="8"
            pb="8"
            rounded="xl"
            boxShadow="md"
            borderRadius="3xl"
            position="relative"
            {...styles}
            {...rest}
        />
    )
}

export const PricingCard = (props) => {
    const {
        onClick,
        features,
        name,
        description,
        price,
        popular,
        isYearly,
        setIsYearly, // Add this line
        ...rest
      } = props;

      const yearlyPrice = price * 12 * 0.7;
      const displayPrice = isYearly ? yearlyPrice : price;
      const switchText = isYearly ? "Switch to monthly billing" : "Switch to yearly billing";
    
      const handleBillingToggle = () => {
        setIsYearly(!isYearly); // Update this line
      };
    return (
        <PricingWrapper highlight={popular} {...rest}>
            {popular && <PopularBadge>Most Value</PopularBadge>}

            <Flex direction="column" justify="center">
                <Text align="center" fontSize="2xl" fontWeight="bold">
                    {name}
                </Text>
                <Text align="center" mt="2"  maxW="16rem" mx="auto">
                    {description}
                </Text>
                <PriceDisplay currency="$" price={displayPrice.toFixed(2)} />
                <Box
                 as="button"
                 display="inline-flex"
                 mx="auto"
                 color={mode('tomato', 'tomato')}
                 fontWeight="semibold"
                 onClick={() => setIsYearly(!isYearly)}
                 >
        {switchText}
                </Box>
            </Flex>

            <List stylePosition="outside" mt="8" spacing={4}>
                {features.map((feature, idx) => (
                    <PricingDetail key={idx}>{feature}</PricingDetail>
                ))}
            </List>

            <Button
                minH="3.5rem"
                rounded="lg"
                fontWeight="bold"
                bg="tomato"
                mt="8"
              _hover={{ bg: "#a44431" }}
                
                w="100%"
                onClick={onClick}

            >
                Get Started
            </Button>
        </PricingWrapper>
    )
}