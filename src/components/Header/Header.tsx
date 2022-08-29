import logo from '../../assets/images/logo-aimprosoft-black@3x.png';
import {Style_Header, Style_ContentWrapper} from './HeaderStyled';
import {FC} from "react";

const Header:FC = () => {
  return (
    <Style_Header className="container">
      <Style_ContentWrapper>
        <a href="https://www.aimprosoft.com" target="_blank">
          <img src={logo} alt="logo" className="logo" />
        </a>
        <a className="about-us-link" href="https://www.aimprosoft.com/company/" target="_blank">
          About Us
        </a>
        <div className="language-btn">EN</div>
      </Style_ContentWrapper>
    </Style_Header>
  );
};

export default Header;
