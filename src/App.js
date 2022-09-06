import React from "react";
import Body from "./components/Body/Body";
import Header from "./components/Header/Header";
import { ChakraProvider } from "@chakra-ui/react";
const App = () => {
  return (
    <ChakraProvider>
      <Header />
      <Body />
    </ChakraProvider>
  );
};

export default App;
