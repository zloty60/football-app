import { ThemeProvider } from "styled-components";
import { HashRouter, Route, Switch } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "normalize.css";
// eslint-disable-next-line no-unused-vars
import { css } from "styled-components/macro";

import { mainTheme } from "./theme/mainTheme";
import { GlobalStyle } from "./theme/globalStyle";
import { GlobalStateProvider } from "./context/globalState";
import { Navbar } from "./components/navbar";
import { Container } from "./components/lib/grid";
import { Root } from "./views/Root";
import { LeagueWrapper } from "./views/league";
import { EventDetails } from "./views/eventDetails";
import { Team } from "./views/team";

const queryClient = new QueryClient();

function AppProvider() {
  return (
    <div>
      <ThemeProvider theme={mainTheme}>
        <GlobalStyle />
        <QueryClientProvider client={queryClient}>
          <GlobalStateProvider>
            <HashRouter>
              <Navbar />
              <main
                css={`
                  padding-top: 64px;
                  padding-bottom: 30px;
                `}
              >
                <Container
                  css={`
                    margin-top: 50px;
                  `}
                >
                  <Switch>
                    <Route exact path="/" component={Root} />
                    <Route path="/liga/:leagueId" component={LeagueWrapper} />
                    <Route path="/mecz/:eventId" component={EventDetails} />
                    <Route path="/klub/:teamId" component={Team} />
                  </Switch>
                </Container>
              </main>
            </HashRouter>
          </GlobalStateProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ThemeProvider>
    </div>
  );
}

export default AppProvider;
