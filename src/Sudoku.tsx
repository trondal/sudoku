import { createTheme, Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import { Provider } from "react-redux";
import { store } from "./Store/configureStore";

let theme = createTheme({
  palette: {},
  typography: {
    fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"].join(","),
  },
});

theme = {
  ...theme,
  /* overrides: {
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
          margin: "0",
        },
      },
    },
  }, */
};

function Sudoku() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Container className="container" maxWidth={false}>
          <Header />
          <Content />
          <Footer />
        </Container>
      </ThemeProvider>
    </Provider>
  );
}

export default Sudoku;
