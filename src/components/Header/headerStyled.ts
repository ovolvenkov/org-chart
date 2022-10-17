import styled from 'styled-components';

export const Style_Header = styled.header`
  border-bottom: 1px solid ${props => props.theme.colors.blackSecondColor || '#d0d0d0'};
  background-color: ${props => props.theme.colors.blackSecondColor};
`;

export const Style_ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 13px;
  padding-bottom: 13px;
  margin: 0 auto;
  max-height: 35px;
  
  & .header-content-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;
    margin: 0 auto;
  }
  
  & .logo-link {
    max-height: 35px;
  }
}
  
  & .logo {
    max-width: 176px;
    max-height: 35px;
  }
  
  & .about-us-link {
    margin-left: auto;
    margin-right: 45px;
    text-decoration: none;
    color: ${props => props.theme.colors.fontColor};
    font-size: 16px;
    font-weight: bold;
    padding-left: 5px;
    transition: color 0.3s;
  }
  
  & .about-us-link:hover {
    color: #ff6f43 !important;
  }
  
  & .language-btn {
    color: #949494;
    font-size: 18px;
    font-weight: bold;
`;
