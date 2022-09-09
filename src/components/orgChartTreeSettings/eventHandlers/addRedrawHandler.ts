import OrgChart from '@balkangraph/orgchart.js';

const addRedrawHandler = (orgChart: OrgChart) => {
  //add tooltips for expandCollapse buttons
  orgChart.on('redraw', function (sender) {
    const nodeElements = document.querySelectorAll('[data-ctrl-ec-id]');
    for (let i = 0; i < nodeElements.length; i++) {
      const nodeElement = nodeElements[i];

      nodeElement.addEventListener('mouseover', function (e) {
        const circleElement = e?.target as HTMLInputElement;
        const idNode = circleElement?.parentElement?.dataset.ctrlEcId || '';
        const nodeData = sender?.getNode(idNode);
        const level = nodeData?.level;

        if (level === 0) {
          circleElement.innerHTML = '<title>Show all departments</title>'
        }
        else if (level === 1) {
          circleElement.innerHTML = '<title>Show all teams</title>'
        }
        else if (level === 2) {
          circleElement.innerHTML = '<title>Show all team members</title>'
        }
      });
    }
  });
};

export default addRedrawHandler;