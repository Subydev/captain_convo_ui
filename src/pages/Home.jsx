import { Newsletter } from '../components/Newsletter';
import { HomeStat } from '../components/HomeStats';
import { Feature } from '../components/Features';
import { Pricing } from '../components/Pricing';
import { Faq } from '../components/Faqs';
import { Question } from '../components/Questions';
import { CallToAction } from '../components/CallToAction'
import { LogoGrid } from '../components/LogoGrids'
// import { Main } from './Main';
import { Footer } from '../components/Footer';
import { Landing } from './landing';
import { Container } from '@chakra-ui/react';
export const Home = () => {
    return (
        <>

        {/* <Navbar /> */}
        <Landing />
        <HomeStat />
        <LogoGrid />
        <Feature />
        <CallToAction />
        <Pricing />
        <Faq />
        <Question />
        <Newsletter />
        <Footer />

        </>
  
    )
}