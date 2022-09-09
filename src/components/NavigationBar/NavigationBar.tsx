import React from "react";
import {Style_NavigationBar} from './navigationBarStyled';
import {NavigationBarProps} from "../../types/types";
import arrowIcon from '../../assets/images/arrow-forward.svg';
import OrgChart from '@balkangraph/orgchart.js';

function NavigationTopBar(props: NavigationBarProps) {
  const {chartTreeInstance, setIsActiveBackBtn, isActiveBackBtn} = props;
  const centered = () => chartTreeInstance?.center(1);

  const collapseAllHandler = () => {
      const mainNodeID = '1';
      chartTreeInstance?.center(mainNodeID, {
        parentState: OrgChart.COLLAPSE_PARENT_NEIGHBORS,
        childrenState: OrgChart.COLLAPSE_SUB_CHILDRENS,
        rippleId: mainNodeID,
        vertical: false,
        horizontal: true
      });
      return false;
  }

  const backClickHandler = () =>{
    collapseAllHandler();
    setIsActiveBackBtn(false);
    centered();
  };

  return (
          <Style_NavigationBar>
            <div className='navigation-btns-wrapper container'>
              { isActiveBackBtn && <button title='Back to the start'  onClick={backClickHandler} className="back-start-btn btn">
                  <img src={arrowIcon} alt="arrow icon" />
                </button> }
            </div>
          </Style_NavigationBar>
  );
}

export default NavigationTopBar;