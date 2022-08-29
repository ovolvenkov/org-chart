import React, {FC, useEffect, useRef} from 'react';
import createTree from '../orgChartTreeSettings/createTree';
import {Style_DepartmentTree} from './DepartmentTreeStyled';
import NavigationTopBar from "../NavigationBar/NavigationBar";
import {TreeProps} from "../../types/types";

const DepartmentTree:FC<TreeProps> = (props) => {
  const {setNodeData, nodeData, chartTreeInstance, setChartTreeInstance, nodes } = props;
  const ref = useRef(null);

  useEffect(()=>{
    const chartTreeInstance = createTree({ nodes, ref });
    chartTreeInstance?.on('init',() => setChartTreeInstance(chartTreeInstance));
  }, []);

  return <>
    <NavigationTopBar chartTreeInstance={chartTreeInstance}
                      setNodeData={setNodeData}
                      nodeData={nodeData} />
    <Style_DepartmentTree id="tree" className="container-tree" ref={ref}/>
  </>
}

export default DepartmentTree;
