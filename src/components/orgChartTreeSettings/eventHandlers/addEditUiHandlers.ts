import OrgChart from '@balkangraph/orgchart.js';
import {CompanyMember} from '../../../types/types';

const addEditUiHandlers = (orgChart: OrgChart) => {
  //for disable opens node
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
      data.aimchatAccount && window.open(`https://chat.aimprosoft.com/index.html#/chat/direct?userName=${data.aimchatAccount}`)
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
};

export default addEditUiHandlers;