import React, {FC, useEffect, useRef} from 'react';
import createTree from '../orgChartTreeSettings/createTree';
import {Style_MainTree} from './mainTreeStyled';
import NavigationTopBar from "../NavigationBar/NavigationBar";
import {TreeProps} from "../../types/types";

const MainTree:FC<TreeProps> = (props) => {
  const { nodes, setChartTreeInstance, nodeData, setNodeData, chartTreeInstance } = props;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chartTreeInstance = createTree({nodes, ref});
    chartTreeInstance?.on('init', () => {
      setChartTreeInstance(chartTreeInstance);
    });
  }, []);

  return <>
    <NavigationTopBar chartTreeInstance={chartTreeInstance}
                      setNodeData={setNodeData}
                      nodeData={nodeData} />
    <Style_MainTree id="tree"
                    className="container-tree"
                    ref={ref} />
  </>;
};

export default MainTree;
