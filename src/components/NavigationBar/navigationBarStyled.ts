import styled from 'styled-components';

export const Style_NavigationBar = styled.div`
  display: flex;
  justify-content: end;
  position: absolute;
  font-size: 18px;
  font-weight: 600;
  z-index: 1;
  top: 90px;
  right: 420px;
  width: calc(100% - 500px);
  
  @media (min-width: 2080px) {
    max-width: 1580px;
    left: 80px;
  }


  & .navigation-btns-wrapper {
    display: flex;
    font-size: 18px;
    font-weight: 600;
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
  
  @media screen and (max-width: 768px) {
    top: 150px;
    right: 80px;
    width: calc(100% - 160px);
  }
`;

