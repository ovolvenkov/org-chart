import React, {useEffect, useState} from "react";
import {Style_NavigationBar} from './navigationBarStyled';
import {NavigationBarProps} from "../../types/types";
import arrowIcon from '../../assets/images/arrow-forward.svg';

function NavigationTopBar(props: NavigationBarProps) {
  const {chartTreeInstance} = props;
  const [isTouchedTree, setIsTouchedTree] = useState(false);

  const centered = () => chartTreeInstance?.center(1);
  const backClickHandler = () =>{
    centered();
    setIsTouchedTree(false);
  };

  useEffect(()=>{
      const initialXScroll = chartTreeInstance?.xScrollUI?.pos;
      const initialYScroll = chartTreeInstance?.yScrollUI?.pos;

      chartTreeInstance?.on('redraw', ()=> {
        const isTouchedScroll = initialXScroll !== chartTreeInstance?.xScrollUI?.pos || initialYScroll !== chartTreeInstance?.yScrollUI?.pos;
        if (isTouchedScroll) setIsTouchedTree(true);
      });
  }, [chartTreeInstance])

  return (
          <Style_NavigationBar>
            <div className='navigation-btns-wrapper'>
              { isTouchedTree && <button title='Back to the start'  onClick={backClickHandler} className="back-start-btn btn">
                  <img src={arrowIcon} alt="arrow icon" />
                </button> }
            </div>
          </Style_NavigationBar>
  );
}

export default NavigationTopBar;