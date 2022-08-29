import facebookIcon from '../../assets/images/icons-facebook.svg';
import instagramIcon from '../../assets/images/instagram.svg';
import twitterIcon from '../../assets/images/icons-twitter.svg';
import linkedinIcon from '../../assets/images/icons-linked-in.svg';
import behanceIcon from '../../assets/images/icons-behance.svg';
import {Style_Footer} from './FooterStyled';
import {FC} from "react";

const Footer:FC = () => {
  return (
    <Style_Footer className="container">
      <div className="footer-content-wrapper">
        <div className="rights-text">© Aimprosoft 2005 - 2022 | All rights reserved</div>
        <ul className="footer-links">
          <li className="footer-link-item">
            <a className="link-item" href="https://www.facebook.com/aimprosoft/" target="_blank">
              <img src={facebookIcon} alt="facebook icon" />
            </a>
          </li>
          <li className="footer-link-item">
            <a className="link-item" href="https://www.instagram.com/aimpro.soft/" target="_blank">
              <img src={instagramIcon} alt="instagram icon" />
            </a>
          </li>
          <li className="footer-link-item">
            <a className="link-item" href="https://twitter.com/Aimprosoft" target="_blank">
              <img src={twitterIcon} alt="twitter icon" />
            </a>
          </li>
          <li className="footer-link-item">
            <a className="link-item" href="https://www.linkedin.com/company/aimprosoft/" target="_blank">
              <img src={linkedinIcon} alt="linkedin icon" />
            </a>
          </li>
          <li className="footer-link-item">
            <a className="link-item" href="https://www.behance.net/aimprosoft" target="_blank">
              <img src={behanceIcon} alt="behance icon" />
            </a>
          </li>
        </ul>
      </div>
    </Style_Footer>
  );
};

export default Footer;
