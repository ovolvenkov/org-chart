import OrgChart from "@balkangraph/orgchart.js";
import {CompanyMember} from "../../../types/types";
import {chatIcons, emailIcon, phoneIcon, skypeIcon} from "../../../utils/icons";

const TreeConfig = (nodes: CompanyMember[] | undefined) => ({
  template: 'customTemplate',
  nodes,
  miniMap: true,
  showXScroll: true,
  showYScroll: true,
  layout: OrgChart.tree,
  enableKeyNavigation: true,
  mouseScrool: OrgChart.action.scroll,
  lazyLoading: true,
  padding: 80,
  scaleMin: 0.1,
  scaleInitial: .95,
  collapse: {
    level: 2,
    allChildren: true,
  },
  nodeBinding: {
    field_name: 'name',
    field_collectiveLevelName: 'collectiveLevelName',
    field_structureLevelName: 'structureLevelName',
    field_job_title: 'jobPosition',
    img_avatar: 'image',
    field_status: 'userStatus'
  },
  toolbar: {
    zoom: true,
    expandAll: true,
    fit: true
  },
  searchFields: ["name", "jobPosition", "structureName", "aimchatAccount"],
  searchFieldsWeight: {
    "name": 70, //percent
    "aimchatAccount": 10,
    "jobPosition": 10,
    "structureName": 10
  },
  editForm: {
    readOnly: true,
    photoBinding: 'image',
    elements: [
      { type: 'textbox', label: 'Name', binding: 'name'},
      { type: 'textbox', label: 'Position', binding: 'jobPosition'},
      { type: 'textbox', label: 'Status', binding: 'userStatus'},
      { type: 'textbox', label: 'Team Lead', binding: 'teamLead'},
      { type: 'textbox', label: 'Phone Number', binding: 'phoneNumber'},
      { type: 'textbox', label: 'Email', binding: 'email'},
      { type: 'textbox', label: 'Aimchat', binding: 'aimchatAccount'},
      { type: 'textbox', label: 'Skype', binding: 'skypeAccount'},
      { type: 'textbox', label: 'Department', binding: 'structureLevelName'},
      { type: 'customDiv', label: 'Hierarchy', binding: 'structureName'},
      { type: 'textbox', label: 'Image', binding: 'image'},
      { type: 'statusIcon', label: 'Status', binding: 'userStatus'}
    ],
    buttons: {
      email: {
        icon: emailIcon,
        text: 'Email'
      },
      chat: {
        icon: chatIcons,
        text: 'Aimchat'
      },
      skype: {
        icon: skypeIcon,
        text: 'Skype'
      },
      phone: {
        icon: phoneIcon,
        text: 'Phone'
      },
      edit: null,
      share: null,
      pdf: null,
      remove: null
    }
  },
  tags: {
    "y": {
      template: "yTemplate"
    },
  },
});

export default TreeConfig;