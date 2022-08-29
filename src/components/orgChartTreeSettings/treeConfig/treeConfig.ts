import OrgChart from "@balkangraph/orgchart.js";
import {CompanyMember} from "../../../types/types";

const TreeConfig = (nodes: CompanyMember[] | undefined) => ({
  template: 'customTemplate',
  showXScroll: true,
  showYScroll: true,
  mouseScrool: OrgChart.action.scroll,
  searchFields: [
    "name",
    "jobPosition",
    "aimchatAccount",
    "skypeAccount",
    "email",
    "phoneNumber",
    "id",
    "structureName"
  ],
  nodes,
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
      { type: 'textbox', label: 'Image', binding: 'image'},
    ],
    buttons: {
      edit: null,
      share: null,
      pdf: null,
      remove: null
    }
  },
  layout: OrgChart.tree,
  enableKeyNavigation: true,
  toolbar: {
    zoom: true,
    fit: true,
    expandAll: true,
  },
  nodeBinding: {
    field_collectiveLevelName: 'collectiveLevelName',
    field_structureLevelName: 'structureLevelName',
    field_name: 'name',
    field_job_title: 'jobPosition',
    img_avatar: 'image',
  },
  lazyLoading: true,
  padding: 80,
  scaleMin: 0.1
});

export default TreeConfig;