import styled from 'styled-components';

export const UsefulLinksWrapper = styled.div`
  & .useful-links-button {
    margin-right: 80px;
    color: ${props => props.theme.colors.fontColor};
    font-size: 16px;
    font-weight: bold;
    transition: color 0.3s;
  }

  & .useful-arrow-icon {
    display: inline-block;
    margin-left: 17px;
    margin-bottom: 2px;
    transition: transform .3s;
  }

  & .useful-links-button:hover {
    cursor: pointer;
    color: #ff6f43 !important;
  }

  & .useful-links-popup {
    border: 1px solid ${props => props.theme.colors.silverColor2 || '#e6e6e6'};
    border-radius: 3px;
    background-color: ${props => props.theme.colors.blackSecondColor || '#fff'};
    position: absolute;
    z-index: 3;
    margin: 16px 0 0 0;
    min-width: 144px;
    right: 163px;
  }

  & .useful-links-ul {
    list-style:none;
    padding: 8px;
    margin: 0;
  }

  & .useful-link-li a {
    color: ${props => props.theme.colors.fontColor};
    text-decoration: none;
    transition: color 0.3s;
  }

  & .useful-link-li a:hover {
    color: #ff6f43 !important;
  }

  & .useful-link-li {
    padding-bottom: 4px;
    transition: color 0.3s;
  }
`;