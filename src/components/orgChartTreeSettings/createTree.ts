import OrgChart from '@balkangraph/orgchart.js';
import {CompanyMember, CreateTreeProps} from "../../types/types";
import treeConfig from "./treeConfig/treeConfig";
import createCustomTemplate from "./customTemplate/customTemplate";

const createTree = ({nodes, ref}: CreateTreeProps) => {
  if(!ref.current) return null;
  createCustomTemplate();

  const orgChart = new OrgChart(ref.current, treeConfig(nodes));

  orgChart?.on('key-down', function (sender, args) {
    if (args.node) {
      if (args.event.code == "Enter" || args.event.code == "NumpadEnter") {
        sender.editUI?.show(args?.node?.id, true);
      }
      else if (args.event.code === "KeyF") {
        const search = document?.querySelector('.boc-search .boc-input > input') as HTMLElement | null;
        search?.focus();
      }
    }
  });

  orgChart?.editUI.on('show', function (sender, nodeId) {
    const node = orgChart.getNode(nodeId);
    if (node?.stChildrenIds?.length){
      return false;
    }
  });

  // details info buttons
  orgChart.editUI.on('button-click', function (sender, args) {
    if (args.name === 'email') {
      const data:CompanyMember = orgChart.get(args.nodeId);
      if (data.email) window.location.href = `mailto:${data.email}`;
    }
    else if (args.name === 'chat') {
      const data:CompanyMember = orgChart.get(args.nodeId);
      data.aimchatAccount && window.open(`https://chat.aimprosoft.com/index.html#/chat/${data.aimchatAccount}`)
    }
    else if (args.name === 'skype') {
      const data:CompanyMember = orgChart.get(args.nodeId);
      data.skypeAccount && window.open(`skype:${data.skypeAccount}?chat`)
    }
    else if (args.name === 'phone') {
      const data:CompanyMember = orgChart.get(args.nodeId);
      data.phoneNumber && window.open(`tel:${data.phoneNumber}`)
    }
  });

  // orgChart?.on('searchclick', function (sender, nodeId) {
  //     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //     // @ts-ignore
  //   sender.center(nodeId, {
  //     parentState: OrgChart.COLLAPSE_PARENT_NEIGHBORS,
  //     childrenState: OrgChart.COLLAPSE_SUB_CHILDRENS
  //   });
  //   return false;
  // });
  //
  // orgChart?.on('expcollclick', function (sender, collapse, id) {
  //   if (!collapse) {
  //     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //     // @ts-ignore
  //     sender.center(id, {
  //       parentState: OrgChart.COLLAPSE_PARENT_NEIGHBORS,
  //       childrenState: OrgChart.COLLAPSE_SUB_CHILDRENS,
  //       rippleId: id
  //     });
  //     return false;
  //   }
  // });

  return orgChart;
};

export default createTree;
