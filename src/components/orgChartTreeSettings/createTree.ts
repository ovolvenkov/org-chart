import OrgChart from '@balkangraph/orgchart.js';
import {CompanyMember, CreateTreeProps} from '../../types/types';
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

  orgChart.on('searchclick', function (sender, nodeId) {

    sender.center(nodeId, {
      parentState: OrgChart.COLLAPSE_PARENT_NEIGHBORS,
      childrenState: OrgChart.COLLAPSE_SUB_CHILDRENS,
      rippleId: nodeId,
      vertical: true,
      horizontal: true
    });
    return false;
  });

  orgChart.on('expcollclick', function (sender, isCollpasing, id) {
    const nodeData = sender.getNode(id);
    const level = nodeData?.level || '';

    // closing children sibling node
    if (!isCollpasing && level === 1) {
      const collapseIds = [];

      let ln = nodeData?.leftNeighbor;
      while (ln && ln.childrenIds) {
        for (let i = 0; i < ln.childrenIds?.length; i++) {
          collapseIds.push(ln.childrenIds[i])
        }
        ln = ln.leftNeighbor;
      }

      let rn = nodeData.rightNeighbor;
      while (rn && rn.childrenIds) {
        for (let i = 0; i < rn.childrenIds?.length; i++) {
          collapseIds.push(rn.childrenIds[i])
        }
        rn = rn.rightNeighbor;
      }
      sender.collapse(id, collapseIds)

      sender.collapse(id, collapseIds, function () {
        nodeData?.childrenIds && sender.expand(id, nodeData?.childrenIds)
      })

      sender.center(id);
      return false;
    }

    if (!isCollpasing && level === 2) {
      sender.center(id, {
        parentState: OrgChart.COLLAPSE_PARENT_NEIGHBORS,
        childrenState: OrgChart.COLLAPSE_SUB_CHILDRENS,
        rippleId: id,
        vertical: false,
        horizontal: true
      });
      return false;
    }
  });

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

      nodeElement.addEventListener('mouseleave', function (e) {
        const circleElement = e.target as HTMLInputElement;
        const idNode = circleElement?.parentElement?.dataset.ctrlEcId || '';
        const nodeData = sender?.getNode(idNode);
        const level = nodeData?.level;

        if (level === 0) {
          circleElement.innerHTML = '';
        }
        else if (level === 1) {
          circleElement.innerHTML = '';
        }
        else if (level === 2) {
          circleElement.innerHTML = '';
        }
      });
    }
  });

  return orgChart;
};

export default createTree;
