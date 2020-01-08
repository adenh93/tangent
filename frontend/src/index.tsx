import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import App from "./pages/App";
import client from "./apolloClient";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </ThemeProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
