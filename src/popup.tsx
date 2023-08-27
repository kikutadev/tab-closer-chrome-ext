import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

import chakraTheme from '@chakra-ui/theme'
import { ChakraBaseProvider, extendBaseTheme } from "@chakra-ui/react";

import App from "./components/App";

const { Accordion, Link,Checkbox} = chakraTheme.components;
const theme = extendBaseTheme({
  components: {
    Accordion,
    Link,
    Checkbox
  },
});

function Popup() {
  return (
    <ChakraBaseProvider>
      <App />
    </ChakraBaseProvider>
  );
}

const root = createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>
);
