import {
    Box,
    Container,
    Heading,
    Stack,
    StackDivider,
    Text,
    useBreakpointValue,
    useColorModeValue as mode
} from '@chakra-ui/react';
import { StatData } from './stats/data';
import { StatView } from './stats/statView';
import { useState, useEffect } from 'react';

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function formatNumber(number) {
    return number.toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
}

export const HomeStat = () => {
    const isMobile = useBreakpointValue({ base: true, md: false });

    const [statData, setStatData] = useState(() => {
        const storedData = localStorage.getItem('statData');
        return storedData ? JSON.parse(storedData) : StatData;
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setStatData(prevData => prevData.map(stat => ({
                ...stat,
                value: stat.value + stat.speed * getRandomInt(1, 25)
            })));
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        localStorage.setItem('statData', JSON.stringify(statData));
    }, [statData]);

    return (
      <Box >
        <Container
          width="80%"
          maxW="container.xl"
          py={{
            base: '2',
            md: '24',
          }}
        >
          <Stack
            spacing={{
              base: '12',
              md: '16',
            }}
            textAlign="center"
            align="center"
          >
            <Stack
              spacing={{
                base: '4',
                md: '8',
              }}
            >
              <Heading
                as="h1"
                fontWeight="semibold"
                size={{
                    base: '2xl',
                    lg: '4xl',
                  }}
              >
                Why you, Captain Convo?
              </Heading>
              <Text
                fontSize={{
                  base: 'lg',
                  md: 'xl',
                }}
                maxW="3xl"
              >
                Our AI-trained Discord bots are the best choice for anyone who
                wants to improve the functionality and efficiency of their
                Discord server. With our advanced customization options and
                intuitive user interface, our bots are designed to be easy to
                use and highly effective at automating tasks and streamlining
                moderation.
              </Text>
            </Stack>
            <Stack
              direction={{
                base: 'column',
                md: 'row',
              }}
              maxW="3xl"
              width="full"
              spacing={{
                base: '8',
                md: '4',
              }}
              {...(!isMobile
                ? {
                    divider: <StackDivider />,
                  }
                : {})}
            >
              {statData.map((stat, id) => (
                <StatView
                  key={id}
                  flex="1"
                  {...stat}
                  value={formatNumber(stat.value)}
                />
              ))}{' '}
            </Stack>
          </Stack>
        </Container>
      </Box>
    );
};
