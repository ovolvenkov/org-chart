import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700&display=swap');

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
