export default [
  //department
  { id: 'Sushko & Tulik Department', collectiveLevelName: 'Sushko & Tulik Develpment Department' },
  //example employee with full information
  {
    id: '18',
    stpid: 'Sushko & Tulik Department',
    name: 'Maxim Tulik',
    firstName: 'Maxim',
    secondName: 'Tulik',
    jobPosition: 'Head of department',
    img: 'https://cdn.balkan.app/shared/4.jpg',
    path: 'department->subdepartment->team->subteamTitle',
    lead: 'employee lead',
    email: 'jay@domain.com',
    aimChatLink: 'https://chat.aimprosoft.com/index.html#/chat/53507851',
    skype: '1212121',
    phoneNumber: '+380991515502',
    officeLocation: 'Kharkov',
    timezone: 'UTC+01:00',
  },
  {
    id: '19',
    stpid: 'Sushko & Tulik Department',
    name: 'Ihor Sushko',
    firstName: 'Ihor',
    secondName: 'Sushko',
    jobPosition: 'Head of department',
    email: 'jay@domain.com',
    img: 'https://cdn.balkan.app/shared/4.jpg',
  },

  //teamleads
  {
    id: '555',
    pid: 'Sushko & Tulik Department',
    name: 'Elliot Ross Ross Ross',
    firstName: 'John',
    secondName: 'Dou',
    jobPosition: 'teamlead',
    img: 'https://cdn.balkan.app/shared/5.jpg',
    stack: ['Javascript', 'Node.js', 'Redux', 'Magento'],
    structureLevelName: 'Sushko & Tulik Develpment Department lorem',
  },
  {
    id: '666',
    pid: 'Sushko & Tulik Department',
    name: 'Anahi Gordon',
    firstName: 'John',
    secondName: 'Dou',
    jobPosition: 'teamlead',
    img: 'https://cdn.balkan.app/shared/6.jpg',
    stack: ['Javascript', 'Node.js'],
    structureLevelName: 'Sushko & Tulik Develpment Department',
  },
  {
    id: '777',
    pid: 'Sushko & Tulik Department',
    name: 'Knox Macias',
    firstName: 'John',
    secondName: 'Dou',
    jobPosition: 'teamlead',
    img: 'https://cdn.balkan.app/shared/7.jpg',
    structureLevelName: 'Sushko & Tulik Develpment Department',
  },
  {
    id: '888',
    pid: 'Sushko & Tulik Department',
    name: 'Knox Macias',
    firstName: 'John',
    secondName: 'Dou',
    jobPosition: 'teamlead',
    img: 'https://cdn.balkan.app/shared/7.jpg',
    structureLevelName: 'Sushko & Tulik Develpment Department',
  },
  {
    id: '999',
    pid: 'Sushko & Tulik Department',
    name: 'Knox Macias',
    firstName: 'John',
    secondName: 'Dou',
    jobPosition: 'teamlead',
    img: 'https://cdn.balkan.app/shared/7.jpg',
    structureLevelName: 'Sushko & Tulik Develpment Department',
  },

  //sub teamleads
  {
    id: '1101',
    pid: '555',
    name: 'Elliot Ross Ross Ross',
    firstName: 'John',
    secondName: 'Dou',
    jobPosition: 'Subteamlead',
    img: 'https://cdn.balkan.app/shared/5.jpg',
    stack: ['Javascript', 'Node.js'],
    department: 'Sushko & Tulick Team',
    structureLevelName: 'Ivanov Sub Team',
  },
  {
    id: '1102',
    pid: '555',
    name: 'Anahi Gordon',
    firstName: 'John',
    secondName: 'Dou',
    jobPosition: 'Subteamlead',
    img: 'https://cdn.balkan.app/shared/6.jpg',
    stack: ['Javascript', 'Node.js'],
    department: 'Kaverdi Team',
    structureLevelName: 'Ivanov Sub Team',
  },

  //subsimple employees
  {
    id: '2101',
    pid: '1101',
    name: 'Elliot Ross',
    firstName: 'John',
    secondName: 'Dou',
    jobPosition: 'Software engineer',
    img: 'https://cdn.balkan.app/shared/5.jpg',
    stack: ['Javascript', 'Node.js'],
  },
  {
    id: '2102',
    pid: '1101',
    name: 'Anahi Gordon',
    firstName: 'John',
    secondName: 'Dou',
    jobPosition: 'Software engineer',
    img: 'https://cdn.balkan.app/shared/6.jpg',
    stack: ['Javascript', 'Node.js'],
  },
  {
    id: '2103',
    pid: '1101',
    name: 'Knox Macias',
    firstName: 'John',
    secondName: 'Dou',
    jobPosition: 'Software engineer',
    img: 'https://cdn.balkan.app/shared/7.jpg',
  },
  {
    id: '2104',
    pid: '1102',
    name: 'Knox Macias',
    firstName: 'John',
    secondName: 'Dou',
    jobPosition: 'Software engineer',
    img: 'https://cdn.balkan.app/shared/7.jpg',
  },
  {
    id: '2105',
    pid: '1102',
    name: 'Knox Macias',
    firstName: 'John',
    secondName: 'Dou',
    jobPosition: 'Software engineer',
    img: 'https://cdn.balkan.app/shared/7.jpg',
  },

  //simple employees
  {
    id: '5555',
    pid: '555',
    name: 'Elliot Ross',
    firstName: 'John',
    secondName: 'Dou',
    jobPosition: 'Software engineer',
    img: 'https://cdn.balkan.app/shared/5.jpg',
    stack: ['Javascript', 'Node.js'],
  },
  {
    id: '6666',
    pid: '555',
    name: 'Anahi Gordon',
    firstName: 'John',
    secondName: 'Dou',
    jobPosition: 'Software engineer',
    img: 'https://cdn.balkan.app/shared/6.jpg',
    stack: ['Javascript', 'Node.js'],
  },
  {
    id: '7777',
    pid: '555',
    name: 'Knox Macias',
    firstName: 'John',
    secondName: 'Dou',
    jobPosition: 'Software engineer',
    img: 'https://cdn.balkan.app/shared/7.jpg',
  },
  {
    id: '8888',
    pid: '555',
    name: 'Knox Macias',
    firstName: 'John',
    secondName: 'Dou',
    jobPosition: 'Software engineer',
    img: 'https://cdn.balkan.app/shared/7.jpg',
  },
  {
    id: '9999',
    pid: '555',
    name: 'Knox Macias',
    firstName: 'John',
    secondName: 'Dou',
    jobPosition: 'Software engineer',
    img: 'https://cdn.balkan.app/shared/7.jpg',
  },

  //simple employees
  {
    id: '55555',
    pid: '999',
    name: 'Elliot Ross',
    firstName: 'John',
    secondName: 'Dou',
    jobPosition: 'Software engineer',
    img: 'https://cdn.balkan.app/shared/5.jpg',
    stack: ['Javascript', 'Node.js'],
  },
  {
    id: '66666',
    pid: '999',
    name: 'Anahi Gordon',
    firstName: 'John',
    secondName: 'Dou',
    jobPosition: 'Software engineer',
    img: 'https://cdn.balkan.app/shared/6.jpg',
    stack: ['Javascript', 'Node.js'],
  },
  {
    id: '77777',
    pid: '999',
    name: 'Knox Macias',
    firstName: 'John',
    secondName: 'Dou',
    jobPosition: 'Software engineer',
    img: 'https://cdn.balkan.app/shared/7.jpg',
  },
  {
    id: '88888',
    pid: '999',
    name: 'Knox Macias',
    firstName: 'John',
    secondName: 'Dou',
    jobPosition: 'Software engineer',
    img: 'https://cdn.balkan.app/shared/7.jpg',
  },
  {
    id: '99999',
    pid: '999',
    name: 'Knox Macias',
    firstName: 'John',
    secondName: 'Dou',
    jobPosition: 'Software engineer',
    img: 'https://cdn.balkan.app/shared/7.jpg',
  },

  //simple employees
  {
    id: '555555',
    pid: '777',
    name: 'Elliot Ross',
    firstName: 'John',
    secondName: 'Dou',
    jobPosition: 'Software engineer',
    img: 'https://cdn.balkan.app/shared/5.jpg',
    stack: ['Javascript', 'Node.js'],
  },
  {
    id: '666666',
    pid: '777',
    name: 'Anahi Gordon',
    firstName: 'John',
    secondName: 'Dou',
    jobPosition: 'Software engineer',
    img: 'https://cdn.balkan.app/shared/6.jpg',
    stack: ['Javascript', 'Node.js'],
  },
  {
    id: '777777',
    pid: '777',
    name: 'Knox Macias',
    firstName: 'John',
    secondName: 'Dou',
    jobPosition: 'Software engineer',
    img: 'https://cdn.balkan.app/shared/7.jpg',
  },
  {
    id: '888888',
    pid: '777',
    name: 'Knox Macias',
    firstName: 'John',
    secondName: 'Dou',
    jobPosition: 'Software engineer',
    img: 'https://cdn.balkan.app/shared/7.jpg',
  },
  {
    id: '999999',
    pid: '777',
    name: 'Knox Macias',
    firstName: 'John',
    secondName: 'Dou',
    jobPosition: 'Software engineer',
    img: 'https://cdn.balkan.app/shared/7.jpg',
  },

  //subteam
  {
    id: '7771',
    pid: '999999',
    name: 'Knox Macias',
    firstName: 'John',
    secondName: 'Dou',
    jobPosition: 'Software engineer',
    img: 'https://cdn.balkan.app/shared/7.jpg',
  },
  {
    id: '7772',
    pid: '999999',
    name: 'Knox Macias',
    firstName: 'John',
    secondName: 'Dou',
    jobPosition: 'Software engineer',
    img: 'https://cdn.balkan.app/shared/7.jpg',
  },
  {
    id: '7773',
    pid: '999999',
    name: 'Knox Macias',
    firstName: 'John',
    secondName: 'Dou',
    jobPosition: 'Software engineer',
    img: 'https://cdn.balkan.app/shared/7.jpg',
  },
];
