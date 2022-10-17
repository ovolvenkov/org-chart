import styled from 'styled-components';

export const Style_Footer = styled.footer`
  border-top: 1px solid ${props => props.theme.colors.blackSecondColor || '#d0d0d0'};
  align-items: center;
  background-color: ${props => props.theme.colors.blackSecondColor};

  & .footer-content-wrapper {
    display: flex;
    justify-content: space-between;
    padding-top: 12px;
    padding-bottom: 12px;
  }

  & .rights-text {
    font-size: 14px;
    color: ${props => props.theme.colors.silverColor || '#4a4a4a'};
    line-height: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & ul {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
  }

  & li {
    list-style-type: none;
    width: 36px;
    height: 36px;
    background-color: #e9e9e9;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 27px;
  }

  & li:hover {
    transition: all 0.3s;
    background-color: #d0d0d0;
  }

  & .link-item {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 678px) {
    & .footer-content-wrapper {
      flex-direction: column;
      justify-content: flex-start;
    }
  }
  
  @media (max-width: 768px) {
    & .rights-text {
      padding-bottom: 15px;
    }

    & .footer-links {
      max-width: 400px;
      margin: 0 auto;
      flex-wrap: wrap;
    }
    
    & .footer-link-item {
      margin-right: 14px;
      margin-left: 14px;
    }
  }
`;
