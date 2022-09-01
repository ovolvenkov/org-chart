import styled from 'styled-components';

export const Style_Header = styled.header`
  border-bottom: 1px solid #d0d0d0;
`;

export const Style_ContentWrapper = styled.div`{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 17px;
  padding-bottom: 17px;
  margin: 0 auto;
  
  & .header-content-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;
    margin: 0 auto;
  }
  
  & .logo {
    max-width: 176px;
    max-height: 35px;
  }
  
  & .about-us-link {
    margin-left: auto;
    margin-right: 50px;
    text-decoration: none;
    color: #000;
    font-size: 18px;
    font-weight: bold;
    padding-left: 5px;
  }
  
  & .language-btn {
    color: #949494;
    font-size: 18px;
    font-weight: bold;
}`;
