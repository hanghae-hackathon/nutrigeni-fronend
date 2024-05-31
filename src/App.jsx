
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { Reset } from "styled-reset";
import GlobalStyle from "./styles/GlobalStyle";
import routes from "./routes";
import DefaultTheme from "./styles/defaultTheme";

const router = createBrowserRouter(routes);

function App() {

  return (
    <ThemeProvider theme={DefaultTheme}>
      <Reset/>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
