import OrgChart from '@balkangraph/orgchart.js';
import {CreateTreeProps} from "../../types/types";
import treeConfig from "./treeConfig/treeConfig";
import createCustomTemplate from "./customTemplate/customTemplate";

const createTree = ({nodes, ref}: CreateTreeProps) => {
  if(!ref.current) return null;
  createCustomTemplate();

  const orgChart = new OrgChart(ref.current, treeConfig(nodes));

  orgChart?.on('key-down', function (sender, args) {
    if (args.node) {
      if (args.event.code == "Enter" || args.event.code == "NumpadEnter") {
        sender.editUI?.show(args?.node?.id, true);
      }
      else if (args.event.code === "KeyF") {
        const search = document?.querySelector('.boc-search .boc-input > input') as HTMLElement | null;
        search?.focus();
      }
    }
  });

  orgChart?.editUI.on('show', function (sender, nodeId) {
    const node = orgChart.getNode(nodeId);
    if (node?.stChildrenIds?.length){
      return false;
    }
  });

  return orgChart;
};

export default createTree;
