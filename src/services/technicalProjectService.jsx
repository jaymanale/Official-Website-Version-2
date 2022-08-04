const technicalProjects = [
  {
    title: "Feku Json",
    description: "Free Simple fake API for Testing and Prototyping.",
    techStack: [
      {
        iconClass: "fab fa-java  fa-3x",
        iconColor: { color: "#d7172e" },
      },
    ],
    demoLink: "https://fekujson.herokuapp.com/",
    githubLink: "https://github.com/jaymanale/FekuJson",
    technology: "Bootstrap Framework, Spring Boot, Java, PostgreSQL",
  },
  {
    title: "Marvel Universe",
    description:
      "Web Application where you can get details about Characters, comics etc in Marvel Universe.",
    techStack: [
      {
        iconClass: "fab fa-react fa-3x",
        iconColor: { color: "#61dbfb" },
      },
    ],
    demoLink: "https://marvel-universe.netlify.app/",
    githubLink: "https://github.com/jaymanale/Marvel-Project",
    technology: "Bootstrap Framework, ReactJS, Marvel API",
  },
  // {
  //   title: 'Todo App',
  //   description: 'Web Application to take notes, perform all CRUD operation.',
  //   techStack: [
  //     {
  //       iconClass: 'fab fa-react fa-3x',
  //       iconColor: { color: '#61dbfb' },
  //     },
  //   ],
  //   demoLink: 'https://react-todo-firebase.netlify.app/',
  //   githubLink: 'https://github.com/jaymanale/react-todo-firebase',
  // },
  {
    title: "Covid-19 Statistics",
    description:
      "Web Application to get statics of covid-19 report based on country",
    techStack: [
      {
        iconClass: "fab fa-react  fa-3x",
        iconColor: { color: "#61dbfb" },
      },
    ],
    demoLink: "https://covid-19-report-react.netlify.app/",
    githubLink: "https://github.com/jaymanale/covid-19-report",
    technology: "Bootstrap Framework, ReactJS, Covid-19 API",
  },
  {
    title: "Short News",
    description:
      "Web Application where you can get Top New in different Category",
    techStack: [
      {
        iconClass: "fab fa-react  fa-3x",
        iconColor: { color: "#61dbfb" },
      },
    ],
    demoLink: "https://short-news.netlify.app/",
    githubLink: "https://github.com/jaymanale/Short-news",
    technology: "Bootstrap Framework, ReactJS, News API",
  },
  // {
  //   title: "Random Meme",
  //   description: "Web Application to see randomly generated meme",
  //   techStack: [
  //     {
  //       iconClass: "fab fa-react  fa-3x",
  //       iconColor: { color: "#61dbfb" },
  //     },
  //   ],
  //   demoLink: "https://random-meme-generator.netlify.app/",
  //   githubLink: "https://github.com/jaymanale/random-meme-generator",
  // },
];

const getTechnicalProjectsData = () => {
  return technicalProjects;
};

export default getTechnicalProjectsData;
