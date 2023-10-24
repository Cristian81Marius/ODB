import React from 'react';
import { ChakraProvider, Flex, Box, CSSReset } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Events from './components/Evenimente/Events';
import EmausProject from './components/Emaus/EmausProject';
function App() {
  return (
    <ChakraProvider>
      <CSSReset />
      <Router>
          <Flex direction="column" minH="100vh">
            <Navbar />
            <Box bg="#f5f2e1" flex="1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/events" element={<Events />} />
                <Route path="/emaus" element={<EmausProject />} />
                {/* <Route path="/about_us" element={<AboutUs />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact_us" element={<ContactUs />} />
                <Route path="/events" element={<Events />} />
                <Route path="/emaus" element={<EmausProject />} />
                <Route path="/box_of_blessing" element={<BoxOfBlessingProject />} />
                <Route path="/childran_with_god" element={<ChildranProject />} /> */}
              </Routes>
            </Box>
            <Footer />
          </Flex>
        </Router>
      </ChakraProvider>
  );
}

export default App;
