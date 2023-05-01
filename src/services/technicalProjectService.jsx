const technicalProjects = [
  {
    title: "Feku Json",
    description: "Free Simple fake API for Testing and Prototyping.",
    imageUrl: "https://user-images.githubusercontent.com/5653906/235428332-9ebc4871-4d41-4630-8c58-3279b2a0bc5d.gif",
    techStack: [
      {
        iconClass: "fab fa-java  fa-3x",
        iconColor: { color: "#d7172e" },
      },
    ],
    demoLink: "https://documenter.getpostman.com/view/305770/2s93eSabYH",
    githubLink: "https://github.com/jaymanale/FekuJson",
    technology: "Bootstrap Framework, Spring Boot, Java, PostgreSQL",
  },
  {
    title: "Game Hub",
    description:
      "GameHub - This is the Online game platform to know all about the games available on different platforms which can be sorted by Genre",
    imageUrl:
      "https://user-images.githubusercontent.com/5653906/234749101-bfd70d43-d566-4744-bfcf-c1d7ec6cee6b.gif",
    techStack: [
      {
        iconClass: "fab fa-react fa-3x",
        iconColor: { color: "#61dbfb" },
      },
    ],
    demoLink: "https://game-hub-navy-tau.vercel.app/",
    githubLink: "https://github.com/jaymanale/game-hub",
    technology: "Chakra-UI Framework, ReactJS, RAWG API",
  },
  {
    title: "Marvel Universe",
    description:
      "Web Application where you can get details about Characters, comics etc in Marvel Universe.",
    imageUrl:
      "https://user-images.githubusercontent.com/5653906/234750797-eee9425d-0173-4933-a683-2f2bfb11b2d1.gif",
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
    imageUrl:
      "https://user-images.githubusercontent.com/5653906/234749042-edcbed58-82d2-4810-ba6b-915a1415092a.gif",
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

    imageUrl:
      "https://user-images.githubusercontent.com/5653906/234751162-51e3f0d2-7059-494c-9e1c-3e558df773c7.gif",
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
