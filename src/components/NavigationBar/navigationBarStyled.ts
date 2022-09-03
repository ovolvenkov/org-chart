import styled from 'styled-components';

export const Style_NavigationBar = styled.div`
  display: flex;
  justify-content: flex-start;
  position: absolute;
  font-size: 18px;
  font-weight: 600;
  z-index: 1;
  top: 70px;
  width: calc(100%);
  background-color: #fff;
  height: 60px;
  
  @media (min-width: 2080px) {
    max-width: 1580px;
    left: 80px;
  }

  .background-navigation-menu {
    width: 100vw;
    height: 50px;
    z-index: 100;
  }


  & .navigation-btns-wrapper {
    display: flex;
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

