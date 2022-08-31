import styled from 'styled-components';

export const Style_Footer = styled.footer`
  border-top: 1px solid #d0d0d0;
  align-items: center;

  & .footer-content-wrapper {
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  & .rights-text {
    font-size: 14px;
    color: #4a4a4a;
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
    width: 40px;
    height: 40px;
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

  @media (max-width: 768px) {
    & .footer-content-wrapper {
      flex-direction: column;
      justify-content: flex-start;
    }

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
