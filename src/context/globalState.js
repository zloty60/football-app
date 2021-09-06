import { createContext, useState, useContext } from "react";

import { leagues } from "./../data";

const GlobalStateContext = createContext();

function GlobalStateProvider(props) {
  const [currentLeague, setCurrentLeague] = useState(null);
  return (
    <GlobalStateContext.Provider
      value={[currentLeague, setCurrentLeague]}
      {...props}
    />
  );
}

function useGlobalState() {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error("useGlobalState must be used within a GlobalStateProvider");
  }
  return context;
}

function filterCurrentLeague(id) {
  const league = leagues.filter((el) => el.id === id);
  return league[0];
}

export { GlobalStateProvider, useGlobalState, filterCurrentLeague };
