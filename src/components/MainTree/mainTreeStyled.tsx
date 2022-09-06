import styled from 'styled-components';

export const Style_MainTree = styled.div`
  height: calc(100vh - 144px);
  margin: 0 auto;
  max-width: 2080px;

  /**styles for nodes**/
  //top background
  & .top-background-rect {
    position: absolute;
    width: 264px;
    height: 32px;
    fill: #ff6f43;
  }
  
  & .collective-level-name {
    font-size: 16px; 
    font-weight: bold; 
    fill: #000;
    text-anchor: middle;
  }

  //styles for focused node
  & rect:focus{
    stroke: #ff6f43;
    stroke-width: 2px;
    outline: none;
  }

  && [data-n-id]:hover rect:first-child {
    stroke: #ff6f43;
    stroke-width: 2px;
    transition: all 0.3s;
  }

  && [data-n-id] rect:first-child {
    fill: #fff;
  }

  && [data-ctrl-ec-id]:hover circle, && [data-ctrl-ec-id]:hover line {
    stroke: #ff6f43;
  }
  
  /**styles for detail popup**/
  & form {
    z-index: 2;
  }
  
  & .link-wrapper {
    padding-left: 9px;
    display: flex;
    flex-direction: column;
  }

  && .boc-img-button {
    width: 40px;
    height: 40px;

    & svg {
      top: 10px;
    }
  }
`;
