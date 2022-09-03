import OrgChart from "@balkangraph/orgchart.js";

const createCustomTemplate = () => {
  OrgChart.templates.customTemplate = Object.assign({}, OrgChart.templates.olivia);
  OrgChart.templates.customTemplate.size = [200, 96];

//to override card field styles
  OrgChart.templates.customTemplate.field_collectiveLevelName =
    '<text style="font-size: 16px; font-weight: bold;" fill="#000" x="230" y="35" text-anchor="middle">{val}</text>';
  OrgChart.templates.customTemplate.field_structureLevelName =
    '<text data-width="190" style="font-size: 12px;" fill="#000" x="10" y="20">{val}</text>';
  OrgChart.templates.customTemplate.field_name =
    '<text class="name-field" data-width="130" style="font-size: 14px; font-weight: bold;" fill="#000" x="65" y="50" >' +
      '{val}' +
    '</text>';
  OrgChart.templates.customTemplate.field_job_title =
    '<text data-width="135" style="font-size: 10px;" fill="#606060" x="65" y="74" data-text-overflow="multiline">{val}</text>';
  OrgChart.templates.customTemplate.img_avatar =
    '<clipPath id="{randId}"><circle cx="35" cy="53" r="25"></circle></clipPath>' +
    '<image preserveAspectRatio="xMidYMid slice" clip-path="url(#{randId})" xlink:href="{val}" x="10" y="28" width="50" height="50"></image>';

  OrgChart.templates.customTemplate.defs =
    '<linearGradient id="{randId}" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:#fff;stop-opacity:1" />' +
    '<stop offset="100%" style="stop-color:#eee;stop-opacity:1" /></linearGradient>';
  OrgChart.templates.customTemplate.node =
    '<rect fill="url(#{randId})" x="0" y="0" height="{h}" width="{w}" stroke-width="1" stroke="#aeaeae" rx="0" ry="0"></rect>';
  OrgChart.templates.customTemplate.nodeMenuButton =
    '<g style="cursor:pointer;" transform="matrix(1,0,0,1,225,105)" data-ctrl-n-menu-id="{id}">' +
    '<rect x="-4" y="-10" fill="#000000" fill-opacity="0" width="22" height="22">' +
    '</rect><circle cx="0" cy="0" r="2" fill="#AEAEAE"></circle><circle cx="7" cy="0" r="2" fill="#AEAEAE">' +
    '</circle><circle cx="14" cy="0" r="2" fill="#AEAEAE"></circle>' +
    '</g>';

  //detail form base color
  OrgChart.templates.customTemplate.editFormHeaderColor = '#ff6f43';
};

export default createCustomTemplate;
