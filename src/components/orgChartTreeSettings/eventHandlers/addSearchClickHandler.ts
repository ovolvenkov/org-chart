import OrgChart from '@balkangraph/orgchart.js';

const addSearchHandler = (orgChart: OrgChart, setIsActiveBackBtn: (arg: boolean)=>void) => {
  orgChart.on('searchclick', function (sender, nodeId) {
    const nodeData = sender.getNode(nodeId);
    const level = nodeData?.level || '';

    if (level >= 2 || !level) {
      sender.center(nodeId, {
        parentState: OrgChart.COLLAPSE_PARENT_NEIGHBORS,
        childrenState: OrgChart.COLLAPSE_SUB_CHILDRENS,
        rippleId: nodeId,
        vertical: true,
        horizontal: true
      });
      setIsActiveBackBtn(true);
      return false;
    }

  });
};

export default addSearchHandler;