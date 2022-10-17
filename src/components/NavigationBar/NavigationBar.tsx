import React from "react";
import {Style_NavigationBar} from './navigationBarStyled';
import {NavigationBarProps} from "../../types/types";
import {ReactComponent as ArrowIcon} from "../../assets/images/arrow-forward.svg";

function NavigationTopBar(props: NavigationBarProps) {
  const {chartTreeInstance, setIsActiveBackBtn, isActiveBackBtn, nodeId} = props;

  const backHandler = (id: string | number) => {
    const nodeData = chartTreeInstance?.getNode(id);
    const parentId = nodeData?.parent?.id || '';
    const parentData = chartTreeInstance?.getNode(parentId);
    chartTreeInstance?.expand(parentData?.parent?.id || '', parentData?.parent?.childrenIds || []);
    if (chartTreeInstance) chartTreeInstance._keyNavigationActiveNodeId = id;

    chartTreeInstance?.center(id);
    return false;
  }

  const backClickHandler = () =>{
    backHandler(nodeId);
    setIsActiveBackBtn(false);
  };

  return (
          <Style_NavigationBar>
            <div className='navigation-btn-wrapper container'>
              { isActiveBackBtn && <button title='Back'  onClick={backClickHandler} className="back-start-btn btn">
                  <ArrowIcon/>
                </button> }
            </div>
          </Style_NavigationBar>
  );
}

export default NavigationTopBar;