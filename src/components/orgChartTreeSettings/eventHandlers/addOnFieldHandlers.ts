import OrgChart from '@balkangraph/orgchart.js';

const addOnFieldHandler = (orgChart: OrgChart, isBlackTheme: boolean) => {
  //redefining worker status icon
  orgChart.on('field', function(sender, args){
    if (args.name === "userStatus") {
      if (args.value === 'Works') {
        args.value = `<circle cx=48 cy=74 r=7 fill=${!isBlackTheme ? '#fff' : '#414141'}></circle>
            <circle cx=48 cy=74 r=6 fill=#17EE3A><title>${args.value}</title><text fill=#17EE3A x=60 y=115 text-anchor=middle>{val}</text></circle>`;
      }
      else {
        args.value = `<circle cx=48 cy=74 r=7 fill=${!isBlackTheme ? '#fff' : '#414141'}></circle>
            <circle cx=48 cy=74 r=6 fill=#FFBA00><title>${args.value}</title><text fill=#17EE3A x=60 y=115 text-anchor=middle>{val}</text></circle>`;
      }
    }
  });
};

export default addOnFieldHandler;