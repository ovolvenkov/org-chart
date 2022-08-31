import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Manrope', sans-serif;
  }

  html, body {
    margin: 0;
  }

  .container {
    max-width: 2080px;
    padding: 0 80px;
    margin: 0 auto;
  }
`;

export default GlobalStyle;
