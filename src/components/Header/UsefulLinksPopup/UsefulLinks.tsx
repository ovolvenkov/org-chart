import arrowBlack from '../../../assets/images/arrow-black.svg';
import arrowWhite from '../../../assets/images/arrow-white.svg';
import {UsefulLinksWrapper} from './usefulLinksStyled';
import {useEffect} from 'react';

const UsefulLinks = (props: {isBlackTheme: boolean}) => {
  useEffect(()=> {
    const usefulButton = document.querySelector('.useful-links-button');
    const usefulArrowIcon = document.querySelector('.useful-arrow-icon');
    const usefulPopup = document.querySelector('.useful-links-popup');

    const clickButtonHandler = () => {
      usefulPopup?.classList.toggle('hide-element');
      usefulArrowIcon?.classList.toggle('rotate');
    }

    const documentClickHandler = (e: MouseEvent) => {
      const element = e.target as HTMLElement;
      if (!element?.closest('.useful-links-button') && !element?.closest('.useful-links-wrapper')) {
        usefulPopup?.classList.add('hide-element');
        usefulArrowIcon?.classList.remove('rotate');
      }
    }

    usefulButton?.addEventListener('click', clickButtonHandler);
    //close popup when clicking out
    document.addEventListener('click', documentClickHandler);

    return () => {
      usefulButton?.removeEventListener('click', clickButtonHandler);
      document.removeEventListener('click', documentClickHandler);
    }
  })


  return (
        <UsefulLinksWrapper>
          <div className="useful-links-button">
            Useful links
            <img className="useful-arrow-icon" src={!props.isBlackTheme ? arrowBlack : arrowWhite} alt='arrow'/>
          </div>
          <div className="useful-links-popup hide-element">
            <ul className="useful-links-ul">
              <li className="useful-link-li">
                <a href="https://chat.aimprosoft.com" target="_blank">AimChat</a>
              </li>
              <li className="useful-link-li">
                <a href="https://alfresco.aimprosoft.com" target="_blank">Alfresco</a>
              </li>
              <li className="useful-link-li">
                <a href="https://bookstack.aimprosoft.com" target="_blank">BookStack</a>
              </li>
              <li className="useful-link-li">
                <a href="https://cvbuilder.aimprosoft.com" target="_blank">CV Builder</a>
              </li>
              <li className="useful-link-li">
                <a href="https://local.aimprosoft.com" target="_blank">Handbook</a>
              </li>
              <li className="useful-link-li">
                <a href="https://redmine.aimprosoft.com" target="_blank">Redmine</a>
              </li>
              <li className="useful-link-li">
                <a href="https://mail.aimprosoft.com" target="_blank">Zimbra</a>
              </li>
            </ul>
          </div>
        </UsefulLinksWrapper>
  );
};

export default UsefulLinks;
