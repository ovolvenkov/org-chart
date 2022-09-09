import OrgChart from '@balkangraph/orgchart.js';
import {CreateTreeProps} from '../../types/types';
import treeConfig from "./treeConfig/treeConfig";
import createCustomTemplate from "./customTemplate/customTemplate";
import addKeysHandler from './eventHandlers/addKeysHandler';
import editUiHandlers from './eventHandlers/editUiHandlers';
import expandCollapsHandler from './eventHandlers/expandCollapseHandler';
import addRedrawHandler from './eventHandlers/addRedrawHandler';
import addInitHandler from './eventHandlers/addInitHandler';
import addSearchHandler from './eventHandlers/addSearchClickHandler';

const createTree = ({nodes, ref, setIsActiveBackBtn}: CreateTreeProps) => {
  if(!ref.current) return null;

  const orgChart = new OrgChart(ref.current, treeConfig(nodes));
  createCustomTemplate();
  addKeysHandler(orgChart);
  editUiHandlers(orgChart);
  expandCollapsHandler(orgChart, setIsActiveBackBtn);
  addRedrawHandler(orgChart);
  addInitHandler(orgChart);
  addSearchHandler(orgChart, setIsActiveBackBtn);

  return orgChart;
};

export default createTree;
