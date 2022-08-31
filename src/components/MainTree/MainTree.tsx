import React, {FC, useEffect, useRef} from 'react';
import createTree from '../orgChartTreeSettings/createTree';
import {useNavigate} from 'react-router-dom';
import {Style_MainTree} from './mainTreeStyled';
import NavigationTopBar from "../NavigationBar/NavigationBar";
import {TreeProps} from "../../types/types";

const MainTree:FC<TreeProps> = (props) => {
  const { nodes, setChartTreeInstance, nodeData, setNodeData, chartTreeInstance } = props;
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const chartTreeInstance = createTree({nodes, ref});
    chartTreeInstance?.on('init', () => {
      setChartTreeInstance(chartTreeInstance);
      nodeData?.currenNodeData?.childrenIds && nodeData?.currenNodeData?.id &&
        chartTreeInstance.expand(nodeData?.currenNodeData?.id, nodeData?.currenNodeData?.childrenIds);
      nodeData?.currenNodeData?.id && chartTreeInstance.center(nodeData?.currenNodeData?.id);
    });

    chartTreeInstance?.onExpandCollpaseButtonClick((nodeData) => {
      const currenNodeData = chartTreeInstance.getNode(nodeData.id);

      if (!nodeData.collapsing && currenNodeData.level === 2) {
        const currenSourceData = chartTreeInstance.get(nodeData.id);
        const parentSourceData = chartTreeInstance.get(currenNodeData?.parent?.id || '');
        setNodeData({ currenNodeData, currenSourceData, parentSourceData });
        navigate('/department');
      }
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
