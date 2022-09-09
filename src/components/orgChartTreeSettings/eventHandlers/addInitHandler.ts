import OrgChart from '@balkangraph/orgchart.js';

const addInitHandler = (orgChart: OrgChart) => {
//add tooltips for toolbar buttons
  orgChart?.on('init', () => {
    const expandBtn = document.querySelector('div[data-tlbr="expand"]');
    expandBtn?.setAttribute('title',  'Expand All');
    const fitBtn = document.querySelector('div[data-tlbr="fit"]');
    fitBtn?.setAttribute('title',  'Fit');
    const minusBtn = document.querySelector('div[data-tlbr="minus"]');
    minusBtn?.setAttribute('title',  'Zoom Out');
    const plusBtn = document.querySelector('div[data-tlbr="plus"]');
    plusBtn?.setAttribute('title',  'Zoom In');
  });
};

export default addInitHandler;