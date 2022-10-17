import OrgChart from '@balkangraph/orgchart.js';

const addFieldHandlers = (orgChart: OrgChart) => {
  //added placeholder for members without photo
  orgChart.on('field', function(sender, args){
    if (args.name === "image" && args.value === undefined && args?.data && Object?.hasOwn(args?.data, "name")) {
      args.value = "https://aim-dms.aimprosoft.com/share/res/components/images/no-user-photo-64.png";
    }
  });
};

export default addFieldHandlers;
