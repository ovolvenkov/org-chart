import OrgChart from "@balkangraph/orgchart.js";
import {collapseIcon, expandIcon, fitIcon, minusIcon, plusIcon} from '../../../utils/icons';
import {CompanyMember} from '../../../types/types';

const createCustomTemplate = () => {
  OrgChart.templates.customTemplate = Object.assign({}, OrgChart.templates.olivia);
  OrgChart.templates.customTemplate.size = [264, 114];

//to override node card field styles
  OrgChart.templates.customTemplate.field_collectiveLevelName =
    '<text class="collective-level-name" x="294" y="35">{val}</text>';
  OrgChart.templates.customTemplate.field_structureLevelName =
    '<text class="structure-name" data-width="300" x="12" y="20">{val}</text>';
  OrgChart.templates.customTemplate.field_name =
    '<text class="name-field" data-width="200" x="60" y="58" >{val}</text>' +
    '<rect class="top-background-rect"></rect>';
  OrgChart.templates.customTemplate.field_job_title =
    '<text class="job-title" data-width="250" x="60" y="79" data-text-overflow="multiline">{val}</text>';
  OrgChart.templates.customTemplate.img_avatar =
    '<clipPath id="{randId}"><circle cx="32" cy="60" r="20"></circle></clipPath>' +
    '<image preserveAspectRatio="xMidYMid slice" clip-path="url(#{randId})" xlink:href="{val}" x="12" y="40" width="40" height="40"></image>';
  OrgChart.templates.customTemplate.field_status =
    '<g>{val}</g>';

  OrgChart.templates.customTemplate.defs =
    '<linearGradient id="{randId}" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:#fff;stop-opacity:1" />' +
    '<stop offset="100%" style="stop-color:#eee;stop-opacity:1" /></linearGradient>';
  OrgChart.templates.customTemplate.node =
    '<rect fill="url(#{randId})" x="0" y="0" height="{h}" width="{w}" stroke-width="1" stroke="#aeaeae" rx="2" ry="2"></rect>';
  OrgChart.templates.customTemplate.nodeMenuButton =
    '<g style="cursor:pointer;" transform="matrix(1,0,0,1,225,105)" data-ctrl-n-menu-id="{id}">' +
    '<rect x="-4" y="-10" fill="#000" fill-opacity="0" width="22" height="22">' +
    '</rect><circle cx="0" cy="0" r="2" fill="#AEAEAE"></circle><circle cx="7" cy="0" r="2" fill="#AEAEAE">' +
    '</circle><circle cx="14" cy="0" r="2" fill="#AEAEAE"></circle>' +
    '</g>';

  //detail form base color
  OrgChart.templates.customTemplate.editFormHeaderColor = '#ff6f43';

  //to overrides toolbar icons
  OrgChart.toolbarUI.expandAllIcon = expandIcon;
  OrgChart.toolbarUI.fitIcon = fitIcon;
  OrgChart.toolbarUI.zoomInIcon = plusIcon;
  OrgChart.toolbarUI.zoomOutIcon = minusIcon;
  OrgChart.toolbarUI.collapseIcon = collapseIcon;

  //ripple for focused node
  OrgChart.templates.customTemplate.ripple = {
    radius: 0,
    color: "#ff6f43"
  };

  //link styles
  OrgChart.templates.customTemplate.link = '<path stroke-linejoin="round" stroke="#aeaeae" stroke-width="1px" fill="none" d="{edge}" />';

  //scroll settings
  OrgChart.SEARCH_RESULT_LIMIT = 100;

  //scroll speed settings
  OrgChart.scroll.smooth = 30;
  OrgChart.scroll.speed = 60;

  //highlight path
  OrgChart.templates.yTemplate = Object.assign({}, OrgChart.templates.customTemplate);
  OrgChart.templates.yTemplate.link = '<path stroke-linejoin="round" stroke="#ff6f43" stroke-width="2px" fill="none" d="{edge}" />';

  //override hierarchy field in detail popup
  OrgChart.elements.customDiv = function(data: CompanyMember, editElement: { binding: string, label: string }) {
    const id = OrgChart.elements.generateId();
    let value = data[editElement?.binding];
    if (value === undefined) value = '';
    if (!value) {
      return {
        html: ''
      };
    }
    const arrayValues = value.split(',');

    return {
      html: `<div class='hierarchy-wrapper'>
                  <label for='${id}' class='hierarchy-label'>${editElement.label}</label>
                  ${arrayValues[0] && "<div class='hierarchy-item first-item'>" + arrayValues[0] + "</div>" || ''}
                  ${arrayValues[1] && "<div class='hierarchy-item'>" + arrayValues[1] + "</div>" || ''}
                  ${arrayValues[2] && "<div class='hierarchy-item'>" + arrayValues[2] + "</div>" || ''}
                  ${arrayValues[3] && "<div class='hierarchy-item'>" + arrayValues[3] + "</div>" || ''}
                  ${arrayValues[4] && "<div class='hierarchy-item'>" + arrayValues[4] + "</div>" || ''}
             </div>`,
      id: id,
      value: value
    };
  };

  //override status icon in detail popup
  OrgChart.elements.statusIcon = function(data: CompanyMember, editElement: { binding: string, label: string }) {
    const id = OrgChart.elements.generateId();
    let value = data[editElement?.binding];
    if (value === undefined) value = '';
    if (!value) {
      return {
        html: ''
      };
    }

    if (value === 'Works') {
      value = `<div class='status-icon status-icon-work' title=${value}></div>`;
    } else {
      value = `<div class='status-icon status-icon-vacation' title=${value}></div>`;
    }

    return {
      html: `<div class='status-icon-wrapper'>
                  ${value}
             </div>`,
      id: id,
      value: value
    };
  };
};

export default createCustomTemplate;