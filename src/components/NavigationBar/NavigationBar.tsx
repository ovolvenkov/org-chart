import React, {useEffect, useState} from "react";
import {Style_NavigationBar} from './navigationBarStyled';
import {NavigationBarProps} from "../../types/types";
import arrowIcon from '../../assets/images/arrow-forward.svg';
import OrgChart from '@balkangraph/orgchart.js';

function NavigationTopBar(props: NavigationBarProps) {
  const {chartTreeInstance} = props;
  const [isTouchedTree, setIsTouchedTree] = useState(false);

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
    setIsTouchedTree(false);
    centered();
  };

  useEffect(()=>{
    chartTreeInstance?.on('expcollclick', function (sender, collapse, id) {
      const nodeData = sender.getNode(id);
      const level = nodeData.level || '';

      if (!collapse && level >= 2) {
        setIsTouchedTree(true);
      }
    });

    chartTreeInstance?.on('searchclick', function (sender, nodeId) {
      const nodeData = sender.getNode(nodeId);
      const level = nodeData?.level || '';

      if (level >= 2) {
        setIsTouchedTree(true);
      }
    });
  }, [chartTreeInstance])

  return (
          <Style_NavigationBar>
            <div className='navigation-btns-wrapper container'>
              { isTouchedTree && <button title='Back to the start'  onClick={backClickHandler} className="back-start-btn btn">
                  <img src={arrowIcon} alt="arrow icon" />
                </button> }
            </div>
          </Style_NavigationBar>
  );
}

export default NavigationTopBar;