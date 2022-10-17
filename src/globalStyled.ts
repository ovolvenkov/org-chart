import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Manrope', sans-serif;
  }

  html, body {
    margin: 0;
  }

  & .container {
    max-width: 2080px;
    padding: 0 80px;
    margin: 0 auto;
  }

  @media (max-width: 780px) {
    & .container {
      padding: 0 15px;
    }
  }
`;

export default GlobalStyle;
