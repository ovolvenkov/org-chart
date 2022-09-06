import OrgChart from "@balkangraph/orgchart.js";
import {CompanyMember} from "../../../types/types";
import {chatIcons, emailIcon, phoneIcon, skypeIcon} from "../../../utils/icons";

const TreeConfig = (nodes: CompanyMember[] | undefined) => ({
  template: 'customTemplate',
  nodes,
  showXScroll: true,
  showYScroll: true,
  layout: OrgChart.tree,
  enableKeyNavigation: true,
  lazyLoading: true,
  padding: 80,
  scaleMin: 0.1,
  scaleInitial: 1,
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
  },
  toolbar: {
    zoom: true,
    expandAll: true,
    fit: true
  },
  searchFields: ["name", "jobPosition", "email", "phoneNumber", "structureName"],
  searchFieldsWeight: {
    "name": 50, //percent
    "jobPosition": 10,
    "structureName": 10, //percent
    "email": 20,
    "phoneNumber": 10,
  },
  editForm: {
    readOnly: true,
    photoBinding: 'image',
    elements: [
      { type: 'textbox', label: 'Name', binding: 'name'},
      { type: 'textbox', label: 'Position', binding: 'jobPosition'},
      { type: 'textbox', label: 'Team Lead', binding: 'teamLead'},
      { type: 'textbox', label: 'Hierarchy', binding: 'structureName'},
      { type: 'textbox', label: 'Phone Number', binding: 'phoneNumber'},
      { type: 'textbox', label: 'Email', binding: 'email'},
      { type: 'textbox', label: 'Aimchat', binding: 'aimchatAccount'},
      { type: 'textbox', label: 'Skype', binding: 'skypeAccount'},
      { type: 'textbox', label: 'Department', binding: 'structureLevelName'},
      { type: 'textbox', label: 'Image', binding: 'image'}
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
    "subLevels0": {
      subLevels: 0
    },
    "subLevels1": {
      subLevels: 1
    }
  }
});

export default TreeConfig;