import OrgChart from '@balkangraph/orgchart.js';
import {ExtendedOrgChart} from '../../../types/types';
import {addHilightedLinksInstance} from './addExpandCollapseHandlers';

type AddSearchHandlersProps = {
  orgChart: ExtendedOrgChart;
  setIsActiveBackBtn: (arg: boolean)=>void;
  setNodeId: (arg: number | string)=>void
}

const addSearchHandlers = (props: AddSearchHandlersProps) => {
  props.orgChart.on('searchclick', function (sender, nodeId) {
    const nodeData = sender.getNode(nodeId);
    const level = nodeData?.level || '';
    addHilightedLinksInstance.hilighteNodePath(sender, nodeId);
    if (props.orgChart) props.orgChart._keyNavigationActiveNodeId = nodeId;

    if (level >= 2 || !level) {
      sender.center(nodeId, {
        parentState: OrgChart.COLLAPSE_PARENT_NEIGHBORS,
        childrenState: OrgChart.COLLAPSE_SUB_CHILDRENS,
        rippleId: nodeId,
        vertical: true,
        horizontal: true
      });
      props.setIsActiveBackBtn(true);
      props.setNodeId(nodeId);
      return false;
    }

  });
};

export default addSearchHandlers;