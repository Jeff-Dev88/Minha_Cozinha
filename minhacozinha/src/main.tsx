import { Box, ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home";
import Revenues from "./pages/Revenues";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <Box
        bgGradient="linear(to-b, purple.500, yellow.400, yellow.200)"
        w="100%"
        h="100%"
      >
        <Nav />
        <Home />
        <Revenues />
        <Footer />
      </Box>
    </ChakraProvider>
  </React.StrictMode>
);
