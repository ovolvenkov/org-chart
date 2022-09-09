import OrgChart from '@balkangraph/orgchart.js';

const expandCollapsHandler = (orgChart: OrgChart, setIsActiveBackBtn: (arg: boolean)=>void) => {
  orgChart.on('expcollclick', function (sender, collapsing, id) {
    orgChart.editUI?.hide();
    const nodeData = sender.getNode(id);
    const level = nodeData?.level;

    // closing children sibling node
    if (!collapsing && level === 1) {
      const collapseIds = [];

      let ln = nodeData?.leftNeighbor;
      while (ln && ln.childrenIds) {
        for (let i = 0; i < ln.childrenIds?.length; i++) {
          collapseIds.push(ln.childrenIds[i])
        }
        ln = ln.leftNeighbor;
      }

      let rn = nodeData.rightNeighbor;
      while (rn && rn.childrenIds) {
        for (let i = 0; i < rn.childrenIds?.length; i++) {
          collapseIds.push(rn.childrenIds[i])
        }
        rn = rn.rightNeighbor;
      }
      sender.collapse(id, collapseIds)

      sender.collapse(id, collapseIds, function () {
        nodeData?.childrenIds && sender.expand(id, nodeData?.childrenIds)
      })

      sender.center(id);
      return false;
    }

    if (!collapsing && level && level >= 2) {
      sender.center(id, {
        parentState: OrgChart.COLLAPSE_PARENT_NEIGHBORS,
        childrenState: OrgChart.COLLAPSE_SUB_CHILDRENS,
        rippleId: id,
        vertical: false,
        horizontal: true
      });
      setIsActiveBackBtn(true);
      return false;
    }

    if (!collapsing && level === 0) {
      queueMicrotask(() => {sender.center(id)}); //to perform centering on the desired element when leaving the detail view
    }
  });

};

export default expandCollapsHandler;