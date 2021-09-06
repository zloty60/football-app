import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import { mainTheme } from "./theme/mainTheme";
import { GlobalStateProvider } from "./context/globalState";

function AppProviders({ children }) {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStateProvider>
        <BrowserRouter>{children}</BrowserRouter>
      </GlobalStateProvider>
    </ThemeProvider>
  );
}

const customRender = (ui, options) =>
  render(ui, { wrapper: AppProviders, ...options });

export * from "@testing-library/react";

export { customRender as render };
