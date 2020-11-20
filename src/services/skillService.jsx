const frontEndSkills = [
  {
    icon: 'fab fa-html5 fa-4x',
    title: 'HTML 5',
  },
  {
    icon: 'fab fa-css3-alt fa-4x',
    title: 'CSS 3',
  },
  {
    icon: 'fab fa-js-square fa-4x',
    title: 'Javascript',
  },
  {
    icon: 'fab fa-angular fa-4x',
    title: 'Angular',
  },
  {
    icon: 'fab fa-react fa-4x',
    title: 'ReactJS',
  },
];

const backEndSkills = [
  {
    icon: 'fab fa-java fa-4x',
    title: 'Java-Spring Boot',
  },
  {
    icon: 'fas fa-database fa-4x',
    title: 'PostgreSQL',
  },
];

const getFrontEndSkillsData = () => {
  return frontEndSkills;
};

const getBackEndSkillsData = () => {
  return backEndSkills;
};

export { getFrontEndSkillsData, getBackEndSkillsData };
