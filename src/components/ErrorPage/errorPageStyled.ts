import styled from 'styled-components';

export const Style_ErrorPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 123px);
  
  & .info-block, & .img-block {
    width: 50%;
  }
  
  & .main-text {
    font-weight: bold;
    font-size: 76px;
    line-height: 103.82px;
  }
  
  & .description-text {
    color: #949494;
    padding-top: 24px;
    padding-bottom: 24px;
    font-size: 18px;
    font-weight: 500;
  }
  
  & img {
    max-width: 50vw;
    height: calc(100vh - 183px);
  }

  & .btn-try {
    border: 2px solid #ff6f43;
    background-color: transparent;
    padding: 12px 32px;
    border-radius: 3px;
    font-size: 18px;
    font-weight: 700;
  }

  & .btn-try:hover {
    transition: all 0.3s;
    background-color: #ff6f43;
    color: #fff;
  }
`;
