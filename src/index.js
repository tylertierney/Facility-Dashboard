import * as React from "react";
import { render } from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import { extendTheme } from "@chakra-ui/react";

const rootElement = document.getElementById("root");

const theme = extendTheme({
  shadows: {
    outline: "none",
  },
});

render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>,
  rootElement
);
