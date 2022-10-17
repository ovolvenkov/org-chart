import React, {FC, useEffect, useRef, useState} from 'react';
import createTree from '../orgChartTreeSettings/createTree';
import {Style_MainTree} from './chartTreeStyled';
import NavigationTopBar from "../NavigationBar/NavigationBar";
import {TreeProps} from "../../types/types";

const ChartTree:FC<TreeProps> = (props) => {
  const { nodes, setChartTreeInstance, chartTreeInstance, setIsActiveBackBtn, isActiveBackBtn, setIsBlackTheme, isBlackTheme } = props;
  const ref = useRef<HTMLDivElement>(null);
  const [nodeId, setNodeId] = useState<string | number>('');
  const [isUpdateTree, setIsUpdateTree] = useState(false);

  useEffect(() => {
    const chartTreeInstance = createTree({nodes, ref, setIsActiveBackBtn, setNodeId, isUpdateTree, setIsUpdateTree, setIsBlackTheme, isBlackTheme});
    chartTreeInstance?.on('init', () => {
      setChartTreeInstance(chartTreeInstance);
    });
  }, [isUpdateTree, isBlackTheme]);

  return <>
    <NavigationTopBar chartTreeInstance={chartTreeInstance}
                      setIsActiveBackBtn={setIsActiveBackBtn}
                      isActiveBackBtn={isActiveBackBtn}
                      nodeId={nodeId}/>
    <Style_MainTree id="tree"
                    className="container-tree"
                    ref={ref} />
  </>;
};

export default ChartTree;
