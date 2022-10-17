import styled from 'styled-components';

export const Style_App = styled.div`
  position: relative;
  font-size: var(--global-fontSize-13);
  
  #tree > svg {
    background-color: ${props => props.theme.colors.mainColor};
  }
  
  #tree > div:not([class]) {
    z-index: 2;
  }

  //search styles
  & .boc-search {
    top: 11px !important;
    z-index: 2;
    max-width: 320px;

    & table {
      color: ${props => props.theme.colors.fontColor};
      background-color: ${props => props.theme.colors.blackSecondColor};
    }
  }
  
  & .search-icon {
    position: absolute;
    top: 12px;
    right: 12px;
  }

  & .boc-input input {
    border: none;
    max-height: 45px;
    border-radius: 0;
    background-color: ${props => props.theme.colors.blackSecondColor || '#fff'};
    color: ${props => props.theme.colors.fontColor};
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

  & .boc-light .boc-input > label.focused {
    color: #acacac;
  }

  & .boc-search .boc-input > .focused {
    color: #4a4a4a;
    font-size: 14px;
    top: -2px;
  }

  & .boc-light .boc-search [data-search-item-id]:hover, .boc-light .boc-search [data-selected=yes] {
    background-color: #ff6f43;
  }

  & .boc-search .boc-form-field + div {
    max-height: 506px;
    overflow-y: scroll;
    border-radius: 7px;
  }
  
  //toolbar styles
  && .boc-toolbar-container {
    top: 12px;
    right: 415px !important;
    bottom: initial !important;
    display: flex;
    justify-content: space-between;
    z-index: 2;
  }

  & [data-tlbr] {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.blackSecondColor || '#fff'};
    border-radius: 2px;
  }

  & [data-tlbr]:not([data-tlbr]:nth-child(5), [data-tlbr]:nth-child(6)) {
    margin-right: 12px;
  }

  & [data-tlbr]:nth-child(5) {
    position: relative;
  }

  & [data-tlbr]:nth-child(5):after {
    content: '';
    position: absolute;
    right: 0;
    height: 100%;
    width: 1px;
    background-color: ${props => props.theme.colors.silverColor2 || '#f1f1f1'};
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

  & [data-tlbr] svg path {
    fill: ${props => props.theme.colors.silverColor}
  }

  & .active-icon {
    fill: #ff6f43;
    transition: all 0.3s;
  }
  
  & .minimap-text {
    font-size: 16px;
    position: absolute;
    left: -118px;
    top: -4px;
  }

  & .theme-text {
    font-size: 16px;
    position: absolute;
    left: -118px;
    top: -4px;
  }

  & .settings-popup {
    position: absolute;
    top: 55px;
    right: 251px;
    min-height: 75px;
    width: 172px;
    background-color: ${props => props.theme.colors.blackSecondColor || '#fff'};
    display: flex;
    flex-direction: column;
    
    & .minimap-text, .theme-text {
      color: ${props => props.theme.colors.fontColor};
    }
    
    & .switch:nth-child(2) {
      margin-top: 10px;
    }

    /* Rounded settings toggle */
    & .slider.round {
      border-radius: 34px;
    }

    & .slider.round:before {
      border-radius: 50%;
    }

    & .switch {
      position: relative;
      display: inline-block;
      width: 36px;
      left: 128px;
      top: 12px;
      height: 20px;
    }

    & .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    & .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      -webkit-transition: .4s;
      transition: .4s;
    }

    & .slider:before {
      position: absolute;
      content: "";
      height: 16px;
      width: 16px;
      left: 3px;
      bottom: 2px;
      background-color: white;
      -webkit-transition: .4s;
      transition: .4s;
    }

    & input:checked + .slider {
      background-color: #ff6f43;
    }

    & input:focus + .slider {
      box-shadow: 0 0 1px #ff6f43;
    }

    & input:checked + .slider:before {
      -webkit-transform: translateX(14px);
      -ms-transform: translateX(14px);
      transform: translateX(14px);
    }

  }

  & .hide-element {
    display: none;
  }

  & .rotate {
    transform: rotate(180deg);
    transition: transform .3s;
  }

  & .boc-light ::-webkit-scrollbar-track {
    background: none;
    border-left: none;
  }
  
  && .mini-map {
    margin: 10px !important;
    background-color: ${props => props.theme.colors.blackSecondColor};
  }
  
  & .mini-map canvas {
    height: 80px;
    width: 170px;
    background-color: ${props => props.theme.colors.blackSecondColor};
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
