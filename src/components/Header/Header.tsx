import logoBlack from '../../assets/images/logo-aimprosoft-black.svg';
import logoWhite from '../../assets/images/logo_aimprosoft-white.svg';
import {Style_Header, Style_ContentWrapper} from './headerStyled';
import UsefulLinks from './UsefulLinksPopup/UsefulLinks';

const Header = (props: {isBlackTheme: boolean}) => {
  return (
    <Style_Header className="container">
      <Style_ContentWrapper>
        <a className="logo-link" href="https://www.aimprosoft.com" target="_blank" title="Go to Aimprosoft website">
          <img src={!props.isBlackTheme ? logoBlack : logoWhite} alt="logo" className="logo" />
        </a>
        <a className="about-us-link" href="https://www.aimprosoft.com/company/" target="_blank">
          About Us
        </a>
        <UsefulLinks isBlackTheme={props.isBlackTheme}/>
        <div className="language-btn">EN</div>
      </Style_ContentWrapper>
    </Style_Header>
  );
};

export default Header;
