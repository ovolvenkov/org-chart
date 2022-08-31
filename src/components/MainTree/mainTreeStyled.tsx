import styled from 'styled-components';

export const Style_MainTree = styled.div`
  height: calc(100vh - 162px);
  margin: 0 auto;
  max-width: 2080px;

  & form {
    z-index: 2;
  }

  & g[data-n-id="85"] {
    & text {
      transform: translate(-162px);
    }
  }
`;
