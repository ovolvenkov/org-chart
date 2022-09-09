import styled from 'styled-components';

export const Style_App = styled.div`
  position: relative;
  font-size: var(--global-fontSize-13);
  
  #tree > svg {
    background-color: #F5F5F5;
  }

  //search styles
  & .boc-search {
    top: 11px !important;
    z-index: 2;
    max-width: 320px;

  }

  & .boc-input input {
    max-height: 41px;
    border-radius: 0;
  }

  & .boc-light .boc-search .boc-input > input {
    border: none;
    background-color: #fff;
    transition-duration: 1s;
  }

  & .boc-light .boc-search .boc-input > input:focus {
    border: none;
    background-color: #fff;
  }

  & .boc-search .boc-input > label {
    top: 6px;
    font-size: 18px;
    font-weight: 600;
  }

  & .boc-search .boc-input > .focused {
    color: #4a4a4a;
    font-size: 14px;
    top: -2px;
  }

  //the hovered search result
  & .boc-light .boc-search [data-search-item-id]:hover, .boc-light .boc-search [data-selected=yes] {
    background-color: #ff6f43;
  }
  
  //toolbar styles
  && .boc-toolbar-container {
    top: 12px;
    right: 415px !important;
    bottom: initial !important;
    display: flex;
    justify-content: space-between;
    min-width: 196px;
    z-index: 2;
  }

  & [data-tlbr] {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
  }

  && [data-tlbr] svg path {
    stroke: none !important;
    transition: all 0.3s;
  }

  & [data-tlbr]:hover {
    cursor: pointer;
  }

  & [data-tlbr]:hover svg path {
    fill: #ff6f43;
    transition: all 0.3s;
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
