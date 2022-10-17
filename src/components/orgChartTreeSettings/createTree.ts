import OrgChart from '@balkangraph/orgchart.js';
import {CreateTreeProps} from '../../types/types';
import treeConfig from "./treeConfig/treeConfig";
import createCustomTemplate from "./customTemplate/customTemplate";
import addKeysHandlers from './eventHandlers/addKeysHandlers';
import addEditUiHandlers from './eventHandlers/addEditUiHandlers';
import addExpandCollapsHandlers from './eventHandlers/addExpandCollapseHandlers';
import addRedrawHandlers from './eventHandlers/addRedrawHandlers';
import addInitHandlers from './eventHandlers/addInitHandlers';
import addSearchHandlers from './eventHandlers/addSearchClickHandlers';
import addFieldHandlers from './eventHandlers/addFieldHandlers';
import addClickNodeHandler from './eventHandlers/addClickHandler';
import addOnFieldHandler from './eventHandlers/addOnFieldHandlers';

const createTree = (props: CreateTreeProps) => {
  const { nodes, ref, setIsActiveBackBtn, setNodeId, setIsUpdateTree, isUpdateTree, setIsBlackTheme, isBlackTheme } = props;
  if(!ref.current) return null;

  const orgChart = new OrgChart(ref.current, treeConfig(nodes));

  createCustomTemplate();
  addKeysHandlers(orgChart);
  addEditUiHandlers(orgChart);
  addRedrawHandlers(orgChart);
  addInitHandlers(orgChart, setIsUpdateTree, isUpdateTree, isBlackTheme, setIsBlackTheme);
  addFieldHandlers(orgChart);
  addExpandCollapsHandlers({orgChart, setIsActiveBackBtn, setNodeId});
  addSearchHandlers({orgChart, setIsActiveBackBtn, setNodeId});
  addClickNodeHandler(orgChart);
  addOnFieldHandler(orgChart, isBlackTheme);

  return orgChart;
};

export default createTree;
