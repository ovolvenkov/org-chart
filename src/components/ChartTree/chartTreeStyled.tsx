import styled from 'styled-components';

export const Style_MainTree = styled.div`
  height: calc(100vh - 123px);
  margin: 0 auto;
  max-width: 2080px;
  
  & .top-background-rect {
    position: absolute;
    width: 264px;
    height: 32px;
    fill: #ff6f43;
  }
  
  & .collective-level-name {
    font-size: 16px; 
    font-weight: bold; 
    fill: ${props => props.theme.colors.silverColor || '#000'};
    text-anchor: middle;
  }

  & .structure-name {
    font-size: 12px;
    font-weight: bold;
    fill: #fff;
  }
  
  & .name-field {
    font-size: 16px; 
    font-weight: bold;
    fill: ${props => props.theme.colors.silverColor || '#000'};
  }
  
  & .job-title {
    font-size: 12px;
    fill: ${props => props.theme.colors.silverColor4 || '#606060'};
  }
  
  & [data-n-id="85"] .collective-level-name {
    transform: translateX(-165px);
  }

  //focused node
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
    fill: ${props => props.theme.colors.blackSecondColor || '#fff'};
  }

  //style for node without structure name
  && [data-n-id]:not(:has(.structure-name)) .top-background-rect {
    height: 4px;
  }

  && [data-ctrl-ec-id] circle{
    fill: ${props => props.theme.colors.blackSecondColor};
  }

  && [data-ctrl-ec-id]:hover circle, && [data-ctrl-ec-id]:hover line {
    stroke: #ff6f43;
  }
  
  //detail popup
  
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
  
  && .boc-edit-form {
    border-radius: 2px;
    box-shadow: none;
    z-index: 2;
    background-color: ${props => props.theme.colors.blackSecondColor};
    
    & .boc-edit-form-close {
      top: 24px;
    }
    
    & .boc-edit-form-avatar {
      box-shadow: none;
      width: 116px;
      height: 116px;
      top: 85px;
      border: 4px solid ${props => props.theme.colors.blackSecondColor || '#fff'};
    }

    & .boc-edit-form-avatar svg {
      width: 116px;
      height: 116px;
    }
    
    & .boc-edit-form-title {
      font-size: 20px;
      font-weight: bold;
      padding-top: 28px;
    }

    & .boc-edit-form-header {
      border-radius: 2px;
      height: 149px;
    }

    & .boc-edit-form-instruments {
      margin-top: 80px;
      
      & .boc-img-button {
        margin-right: 6px;
        margin-left: 6px;
      }
    }
    
    & [data-edit-from-btn="email"] > svg {
      transform: translateY(-2px);
    }
    
    & .boc-input label {
      font-size: 14px;
      color: ${props => props.theme.colors.silverColor5 || '#898989'};
    }
    
    & .boc-input>input {
      font-family: 'Manrope', sans-serif;
      padding-top: 25px;
      font-weight: 500;
      color: ${props => props.theme.colors.silverColor || '#171717'};
      background-color: ${props => props.theme.colors.blackSecondColor};
    }

    & .hierarchy-wrapper {
      padding-left: 13px;
      padding-bottom: 4px;
      overflow-y: hidden;
      min-width: 280px;
      transform: translateY(-3px);
      
      & .hierarchy-label {
        font-size: 14px;
        color: #898989;
      }
      
      & .hierarchy-item {
        color: ${props => props.theme.colors.silverColor || '#171717'};
        font-size: 16px;
        line-height: 1.2;
      }
      
      & .hierarchy-item:nth-child(3) {
        padding-left: 15px;
      }

      & .hierarchy-item:nth-child(4) {
        padding-left: 30px;
      }

      & .hierarchy-item:nth-child(5) {
        padding-left: 45px;
      }

      & .hierarchy-item:nth-child(6) {
        padding-left: 60px;
      }

      & .hierarchy-item:not(.first-item):before {
        content: "\\00AC";
        font-size: 24px;
        display: inline-block;
        padding-left: 4px;
        transform: rotate(180deg) translateY(-3px);
      }
    }
  }
  
  & .status-icon {
    position: absolute;
    top: 182px;
    right: 146px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: solid 2px ${props => props.theme.colors.blackSecondColor || '#fff'};
  }

  & .status-icon-work {
    background-color: #17EE3A;
  }

  & .status-icon-vacation {
    background-color: #FFBA00;
  }

  & .boc-input>label.focused, .boc-input>label.hasval {
    top: -6px;
  }
`;
