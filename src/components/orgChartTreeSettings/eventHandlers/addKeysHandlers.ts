import OrgChart from '@balkangraph/orgchart.js';

const addKeysHandlers = (orgChart: OrgChart) => {
  orgChart?.on('key-down', function (sender: OrgChart, args) {
    if (args.node) {
      if (args.event.code == "Enter" || args.event.code == "NumpadEnter") {
        sender.editUI?.show(args?.node?.id, true);
      }
      else if (args.event.code === "KeyF") {
        const search = document?.querySelector('.boc-search .boc-input > input') as HTMLElement | null;
        search?.focus();
      }
      else if (args.event.code === "Escape") {
        orgChart.editUI?.hide();
      }
    }
  });
};

export default addKeysHandlers;