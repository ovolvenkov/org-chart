import React, {FC, useEffect, useRef} from 'react';
import createTree from '../orgChartTreeSettings/createTree';
import {Style_MainTree} from './mainTreeStyled';
import NavigationTopBar from "../NavigationBar/NavigationBar";
import {TreeProps} from "../../types/types";

const MainTree:FC<TreeProps> = (props) => {
  const { nodes, setChartTreeInstance, chartTreeInstance, setIsActiveBackBtn, isActiveBackBtn } = props;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chartTreeInstance = createTree({nodes, ref, setIsActiveBackBtn});
    chartTreeInstance?.on('init', () => {
      setChartTreeInstance(chartTreeInstance);
    });
  }, []);

  return <>
    <NavigationTopBar chartTreeInstance={chartTreeInstance}
                      setIsActiveBackBtn={setIsActiveBackBtn}
                      isActiveBackBtn={isActiveBackBtn} />
    <Style_MainTree id="tree"
                    className="container-tree"
                    ref={ref} />
  </>;
};

export default MainTree;
