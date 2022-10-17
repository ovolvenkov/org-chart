import searchIconBlack from '../../../assets/images/searchIcon.svg';
import searchIconWhite from '../../../assets/images/searchIconWhite.svg';
import {ExtendedOrgChart} from '../../../types/types';
import {collapseIcon} from '../../../utils/icons';
import {settingsIcon} from '../../../utils/icons';

const addInitHandlers = (
  orgChart: ExtendedOrgChart, setIsUpdateTree: (arg: boolean)=>void, isUpdateTree: boolean, isBlackTheme: boolean, setIsBlackTheme: (arg: boolean)=>void
) => {
  orgChart?.on('init', () => {
    //add tooltips for toolbar buttons
    const addTooltipsForButtons = () => {
      const expandBtn = document.querySelector('div[data-tlbr="expand"]');
      expandBtn?.setAttribute('title',  'Expand All');
      const fitBtn = document.querySelector('div[data-tlbr="fit"]');
      fitBtn?.setAttribute('title',  'Fit');
      const minusBtn = document.querySelector('div[data-tlbr="minus"]');
      minusBtn?.setAttribute('title',  'Zoom Out');
      const plusBtn = document.querySelector('div[data-tlbr="plus"]');
      plusBtn?.setAttribute('title',  'Zoom In');
    };
    addTooltipsForButtons();

    //add search icon
    const addSerchIcon = () => {
      const searchElement = document.querySelector('.boc-form-field .boc-input');
      const imageElement =  document.createElement('img');
      imageElement.classList.add('search-icon');
      imageElement.src = !isBlackTheme ? searchIconBlack : searchIconWhite;
      searchElement?.append(imageElement);
    };
    addSerchIcon();

    //add collapse all button in toolbar
    const addCollapseAllBtn = () => {
      const tollbarContainerElement = document.querySelector('.boc-toolbar-container');
      const collapseElement =  document.createElement('div');
      collapseElement.classList.add('collapse-all-button')
      collapseElement?.setAttribute('title', 'Collapse All');
      collapseElement?.setAttribute('data-tlbr', 'collapse');
      collapseElement.innerHTML = collapseIcon;
      tollbarContainerElement?.prepend(collapseElement);
      collapseElement.onclick = () => {
        setIsUpdateTree(!isUpdateTree);
      }
    };
    addCollapseAllBtn();

    //add collapse all button in toolbar
    const addSettingsBtn = () => {
      const tollbarContainerElement = document.querySelector('.boc-toolbar-container');
      const settingsElement =  document.createElement('div');

      settingsElement.classList.add('settings-button');
      settingsElement?.setAttribute('title', 'Settings');
      settingsElement?.setAttribute('data-tlbr', 'settings');
      settingsElement.innerHTML = settingsIcon;
      tollbarContainerElement?.prepend(settingsElement);

      const settingsPopup = document.createElement('div');
      settingsPopup.classList.add('settings-popup');
      settingsPopup.classList.add('hide-element');
      settingsPopup.innerHTML = `<label class="switch">
                                  <span class="minimap-text">Minimap</span>
                                  <input class="input-minimap" type="checkbox" checked>
                                  <span class="slider round"></span>
                                </label>
                                <label class="switch">
                                  <span class="theme-text">Dark theme</span>
                                  <input class="input-theme" type="checkbox" ${isBlackTheme && 'checked'}>
                                  <span class="slider round"></span>
                                </label>`;
      tollbarContainerElement?.append(settingsPopup);

      settingsElement.onclick = () => {
        const settingsPopup = document.querySelector('.settings-popup');
        const settingIconPath = settingsElement.querySelector('svg path');
        settingsPopup?.classList.toggle('hide-element');
        settingIconPath?.classList.toggle('active-icon');
      }

      const inputMiniMap = document.querySelector('.input-minimap');
      inputMiniMap?.addEventListener('change', () => {
        const minimapElement =  document.querySelector('.mini-map');
        minimapElement?.classList.toggle('hide-element');
      });

      const inputTheme = document.querySelector('.input-theme');
      inputTheme?.addEventListener('change', () => {
        if (!isBlackTheme) {
          setTimeout(()=>setIsBlackTheme(true), 250);
        }
        else if (isBlackTheme) {
          setTimeout(()=>setIsBlackTheme(false), 250);
        }
      })

      //close popup when clicking out
      document.onclick = function(e) {
        const settingIconPath = settingsElement.querySelector('svg path');
        const element = e.target as HTMLElement;

        if (!element?.closest('.settings-popup') && !element?.closest('.settings-button')) {
          settingsPopup?.classList.add('hide-element');
          settingIconPath?.classList.remove('active-icon');
        }
      }
    };
    addSettingsBtn();
  });
};

export default addInitHandlers;