import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    font-family: ${({ theme }) => theme.font.main};
    background-color: ${({ theme }) => theme.color.bodyBg};
  }
 
  ul {
    padding-inline-start: 0px;
  }
  li {
    list-style-type: none;
  }
  img {
  //  max-width: 100%;
  }
`;
