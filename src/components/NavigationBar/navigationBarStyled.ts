import styled from 'styled-components';

export const Style_NavigationBar = styled.div`
  display: flex;
  justify-content: flex-start;
  position: absolute;
  font-size: 18px;
  font-weight: 600;
  z-index: 1;
  top: 62px;
  width: 100%;
  background-color: ${props => props.theme.colors.mainColor};
  height: 65px;

  .background-navigation-menu {
    width: 100vw;
    height: 50px;
    z-index: 100;
  }

  & .navigation-btn-wrapper {
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: 600;
    margin: 0;
    padding-top: 10px;
  }

  & .back-start-btn{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid #ff6f43;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
  }

  & .back-start-btn:hover{
    background-color: #ff6f43;
  }

  & .back-start-btn > svg > path {
    fill: ${props => props.theme.colors.fontColor};
  }

  & .back-start-btn:hover > svg > path {
    fill: #fff;
    transition: all 0.3s;
  }

  & button {
    text-decoration: underline;
    border: none;
    background: none;
    font-size: 18px;
    font-weight: 600;
    padding: 0;
  }

  & button:disabled {
    color: #000;
    text-decoration: none;
    cursor: auto ;
  }

  & .btn {
    cursor: pointer;
  }
`;

