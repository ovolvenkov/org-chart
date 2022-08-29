import styled from 'styled-components';

export const Style_App = styled.div`
  position: relative;
  font-size: var(--global-fontSize-13);

  //styles for focused node
  rect:focus{
    stroke: #ff6f43;
    stroke-width: 2px;
    outline: none;
  }
  
   && [data-n-id] rect:hover {
     stroke: #ff6f43;
     stroke-width: 2px;
     transition: all 0.3s;
   }

  //search styles
  & .boc-search {
    top: 0 !important;
  }

  & .boc-light .boc-search .boc-input > input {
    border: none;
    border-radius: 0;
    border-bottom: 1px solid #000;
    font-size: 18px;
    padding-left: 0;
  }

  & .boc-light .boc-search .boc-input > input:focus {
    border: none;
    border-radius: 0;
    border-bottom: 1px solid #4a4a4a;
    padding-left: 0;
  }

  & .boc-search .boc-input > label {
    color: #4a4a4a;
    padding-left: 0;
    font-size: 18px;
    font-weight: 600;
  }

  & .boc-search .boc-input > .focused {
    color: #4a4a4a;
    font-size: 14px;
    font-weight: normal;
    background-color: transparent;
  }

  //the hovered search result
  .boc-light .boc-search [data-search-item-id]:hover, .boc-light .boc-search [data-selected=yes] {
    background-color: #ff6f43;
  }

  @media screen and (max-width: 768px) {
    && .boc-search {
      width: calc(100% - 150px)!important;
    }
  }

  @media screen and (max-width: 1000px) {
    && .boc-search {
      width: auto;
    }
  }

`;
