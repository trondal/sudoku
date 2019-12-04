import React from "react";
import { createMuiTheme, Container } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import { red } from "@material-ui/core/colors";
import { Provider } from "react-redux";
import configureStore from "./Store/configureStore";

let theme = createMuiTheme({
  palette: {},
  typography: {
    fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"].join(",")
  }
});

theme = {
  ...theme,
  overrides: {
    MuiContainer: {
      root: {
        height: "100vh",
        padding: "0",
        margin: "0",
        display: "flex",
        flexFlow: "column",
        [theme.breakpoints.down("xl")]: {
          backgroundColor: red[900], // should no be seen
          padding: "0",
          margin: "0"
        }
      }
    }
  }
};

const store = configureStore();

function Sudoku() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Container className="container" maxWidth={false}>
          <Header></Header>
          <Content></Content>
          <Footer />
        </Container>
      </ThemeProvider>
    </Provider>
  );
}

export default Sudoku;
