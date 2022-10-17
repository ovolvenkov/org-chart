import OrgChart from '@balkangraph/orgchart.js';
import {ExtendedOrgChart} from '../../../types/types';
import AddHighlightedLinks from '../functions/highlightingLinks';

export const addHilightedLinksInstance = new AddHighlightedLinks();

type AddExpandCollapseHandlerProps = {
  orgChart: ExtendedOrgChart;
  setIsActiveBackBtn: (arg: boolean)=>void;
  setNodeId: (arg: number | string)=>void
};

const addExpandCollapsHandlers = ( props: AddExpandCollapseHandlerProps ) => {
  let previousNodeId: string;
  props.orgChart.on('expcollclick', function (sender, collapsing, id) {
    if (props.orgChart) props.orgChart._keyNavigationActiveNodeId = id;

    props.orgChart.editUI?.hide();
    const nodeData = sender.getNode(id);
    if (nodeData.leftNeighbor || nodeData.rightNeighbor) previousNodeId = '';
    addHilightedLinksInstance.hilighteNodePath(sender, id, previousNodeId);
    const level = nodeData?.level;

    // closing children sibling node on department level
    if (!collapsing && level === 1) {
      if (props.orgChart) props.orgChart._keyNavigationActiveNodeId = previousNodeId || id;
      const collapseIds = [];
      let ln = nodeData?.leftNeighbor;
      while (ln && ln.childrenIds) {
        for (let i = 0; i < ln.childrenIds?.length; i++) {
          collapseIds.push(ln.childrenIds[i]);
        }
        ln = ln.leftNeighbor;
      }

      let rn = nodeData.rightNeighbor;
      while (rn && rn.childrenIds) {
        for (let i = 0; i < rn.childrenIds?.length; i++) {
          collapseIds.push(rn.childrenIds[i]);
        }
        rn = rn.rightNeighbor;
      }
      sender.collapse(id, collapseIds);
      sender.collapse(id, collapseIds, async () => {
        await nodeData?.childrenIds && sender.expand(id, nodeData?.childrenIds || []);
        sender.center(previousNodeId || id);
      });

      return false;
    }

    if (!collapsing && level && level === 2) {
      sender.center(id, {
        parentState: OrgChart.COLLAPSE_PARENT_NEIGHBORS,
        childrenState: OrgChart.COLLAPSE_SUB_CHILDRENS,
        rippleId: id,
        vertical: false,
        horizontal: true
      });
      props.setIsActiveBackBtn(true);
      previousNodeId = id;
      props.setNodeId(id);
      return false;
    }

    if (!collapsing && level === 0) {
      if (props.orgChart) props.orgChart._keyNavigationActiveNodeId = previousNodeId;
      props.setIsActiveBackBtn(false);
      queueMicrotask(() => {
        previousNodeId && sender.center(previousNodeId);
      }); //to perform centering on the desired element when leaving the detail view
    }
  });
};

export default addExpandCollapsHandlers;