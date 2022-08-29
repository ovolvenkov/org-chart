import OrgChart from "@balkangraph/orgchart.js";

const createCustomTemplate = () => {
  OrgChart.templates.customTemplate = Object.assign({}, OrgChart.templates.olivia);
  OrgChart.templates.customTemplate.size = [269, 127];

//to override card field styles
  OrgChart.templates.customTemplate.field_collectiveLevelName =
    '<text style="font-size: 16px; font-weight: bold;" fill="#000" x="300" y="35" text-anchor="middle">{val}</text>';
  OrgChart.templates.customTemplate.field_structureLevelName =
    '<text data-width="260" style="font-size: 14px;" fill="#000" x="10" y="25">{val}</text>';
  OrgChart.templates.customTemplate.field_name =
    '<text data-width="80" style="font-size: 16px; font-weight: bold;" fill="#000" x="80" y="58" data-text-overflow="multiline">{val}</text>';
  OrgChart.templates.customTemplate.field_job_title =
    '<text data-width="135" style="font-size: 12px;" fill="#606060" x="80" y="101" data-text-overflow="multiline">{val}</text>';
  OrgChart.templates.customTemplate.img_avatar =
    '<clipPath id="{randId}"><circle cx="42" cy="70" r="32"></circle></clipPath>' +
    '<image preserveAspectRatio="xMidYMid slice" clip-path="url(#{randId})" xlink:href="{val}" x="10" y="38" width="64" height="64"></image>';

  OrgChart.templates.customTemplate.defs =
    '<linearGradient id="{randId}" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:#fff;stop-opacity:1" />' +
    '<stop offset="100%" style="stop-color:#eee;stop-opacity:1" /></linearGradient>';
  OrgChart.templates.customTemplate.node =
    '<rect fill="url(#{randId})" x="0" y="0" height="{h}" width="{w}" stroke-width="1" stroke="#aeaeae" rx="7" ry="7"></rect>';
  OrgChart.templates.customTemplate.nodeMenuButton =
    '<g style="cursor:pointer;" transform="matrix(1,0,0,1,225,105)" data-ctrl-n-menu-id="{id}">' +
    '<rect x="-4" y="-10" fill="#000000" fill-opacity="0" width="22" height="22">' +
    '</rect><circle cx="0" cy="0" r="2" fill="#AEAEAE"></circle><circle cx="7" cy="0" r="2" fill="#AEAEAE">' +
    '</circle><circle cx="14" cy="0" r="2" fill="#AEAEAE"></circle>' +
    '</g>';

  OrgChart.templates.customTemplate.editFormHeaderColor = '#ff6f43';
};

export default createCustomTemplate;
