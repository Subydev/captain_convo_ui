import React from 'react';
import {
  ChakraProvider,
  Grid,
  theme,
} from '@chakra-ui/react';
import {Navbar} from './components/navbar/Navbar'
import { Route, Routes } from "react-router-dom"
import { Documents} from './pages/docs'
import { Stats} from './pages/stats'
import Contact from './pages/contact'
import { CallbackPage} from './auth/callBackPage'
import { NotFoundPage } from './auth/notFound'
import { Dashboard } from './pages/dashboard'
import { Home } from './pages/Home'
import
 { Analytics } 
from
 
'@vercel/analytics/react'
;
function App(Component, pageProps) {
  return (
    <>
      <Analytics />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/callback" element={<CallbackPage />} />
        <Route path="/docs" element={<Documents />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;