import React, {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {Style_NavigationBar} from './NavigationBarStyled';
import Breadcrumbs from "./Breadcrumbs/Breadcrums";
import {NavigationBarProps} from "../../types/types";

function NavigationTopBar(props: NavigationBarProps) {
  const {chartTreeInstance, setNodeData, nodeData } = props;
  const navigate = useNavigate();
  const location = useLocation();
  const isDepartmentPage = location.pathname === '/department';
  const [isTouchedTree, setIsTouchedTree] = useState(false);
  const [isShowCollape, setIsShowCollapse] = useState(false);

  const centered = () => chartTreeInstance?.center(1);
  const backClickHandler = () =>{
    centered();
    setIsTouchedTree(false);
  };
  const expandAllHandler = () => {
    chartTreeInstance?.expand('', ['all'])
    setIsShowCollapse(true);
    centered();
  }

  const collapseAllHandler = () => {
      const id = "1";
      const level = 3;
      const expandIds = [];
      const collapseIds = [];
      let nodeLevel = -1;
      for (const i in chartTreeInstance?.nodes) {
        nodeLevel = !chartTreeInstance?.nodes[i].level ?  3 : chartTreeInstance.nodes[i].level || -1;
        if (nodeLevel === level && !String(chartTreeInstance?.nodes[i].id).includes("mirror") && !String(chartTreeInstance?.nodes[i].id).includes("split")){
          collapseIds.push(chartTreeInstance?.nodes[i].id || '');
        }
        else if (nodeLevel < level && !String(chartTreeInstance?.nodes[i].id).includes("mirror") && !String(chartTreeInstance?.nodes[i].id).includes("split")){
          expandIds.push(chartTreeInstance?.nodes[i].id || '');
        }
      }

    chartTreeInstance?.expandCollapse(id, expandIds, collapseIds);

      setIsShowCollapse(false);
      centered();
  }

  useEffect(()=>{
    const treeElement = document.querySelector('#tree');
    if ( treeElement ) {
      const setTouched = () => setIsTouchedTree(true);
      treeElement.addEventListener('mouseup', setTouched);

      return () => treeElement.removeEventListener('mouseup', setTouched);
    }
  }, [])

  return (
          <Style_NavigationBar>
            <Breadcrumbs setNodeData={setNodeData} nodeData={nodeData}/>
            { !isDepartmentPage && <div className='navigation-btns-wrapper'>
              { isTouchedTree && <button onClick={backClickHandler} className="back-start-btn btn">
                  Back to the start
                </button> }
              { isShowCollape ?
                <button onClick={collapseAllHandler} className="collapse-all-btn btn">Collapse All</button>
                :
                <button onClick={expandAllHandler} className="expand-all-btn btn">Expand All</button>
              }
            </div> }
            {isDepartmentPage && <button className="btn" onClick={() => navigate('/')}>Back</button>}
          </Style_NavigationBar>
  );
}

export default NavigationTopBar;