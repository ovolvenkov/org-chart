import OrgChart from '@balkangraph/orgchart.js';
import {addHilightedLinksInstance} from './addExpandCollapseHandlers';

const addClickNodeHandler= (orgChart: OrgChart) => {
  orgChart.on('click', function (sender, args) {
    const nodeData = orgChart.getNode(args.node.id);
    const id = nodeData.childrenIds?.length !== 0 ? args.node?.id : nodeData?.pid || nodeData?.stpid;
    addHilightedLinksInstance.hilighteNodePath(sender, id);
  });
};

export default addClickNodeHandler;