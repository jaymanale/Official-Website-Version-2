const technicalProjects = [
  {
    title: 'Marvel Universe',
    description: 'Web Application where you can get details about Characters, comics etc in Marvel Universe.',
    techStack: [
      {
        iconClass: 'fab fa-react fa-3x',
        iconColor: { color: '#61dbfb' },
      },
    ],
    demoLink: 'https://marvel-universe.netlify.app/',
    githubLink: 'https://github.com/jaymanale/Marvel-Project',
  },
  {
    title: 'Todo App',
    description: 'Web Application to take notes, perform all CRUD operation.',
    techStack: [
      {
        iconClass: 'fab fa-react fa-3x',
        iconColor: { color: '#61dbfb' },
      },
    ],
    demoLink: 'https://react-todo-firebase.netlify.app/',
    githubLink: 'https://github.com/jaymanale/react-todo-firebase',
  },
  {
    title: 'Covid-19 Report',
    description:
      'Web Application to get statics of covid-19 report based on country',
    techStack: [
      {
        iconClass: 'fab fa-react  fa-3x',
        iconColor: { color: '#61dbfb' },
      },
    ],
    demoLink: 'https://covid-19-report-react.netlify.app/',
    githubLink: 'https://github.com/jaymanale/covid-19-report',
  },
  {
    title: 'Random Meme',
    description: 'Web Application to see randomly generated meme',
    techStack: [
      {
        iconClass: 'fab fa-react  fa-3x',
        iconColor: { color: '#61dbfb' },
      },
    ],
    demoLink: 'https://random-meme-generator.netlify.app/',
    githubLink: 'https://github.com/jaymanale/random-meme-generator',
  },
];

const getTechnicalProjectsData = () => {
  return technicalProjects;
};

export default getTechnicalProjectsData;
