import java from "./../resources/skills-icon/java-plain.svg";
import reactjs from "./../resources/skills-icon/react-original.svg";

const technicalProjects = [
  {
    title: "Feku Json",
    description: "Free Simple fake API for Testing and Prototyping.",
    imageUrl:
      "https://github.com/jaymanale/Official-Website-Version-2/assets/5653906/83d12f92-9d89-436d-89cb-f322e5b40165",
    techStack: java,
    demoLink: "https://documenter.getpostman.com/view/305770/2s93eSabYH",
    githubLink: "https://github.com/jaymanale/FekuJson",
    technology: "Bootstrap Framework, Spring Boot, Supabase (BAAS) - PostgreSQL",
  },
  {
    title: "Game Hub",
    description:
      "Game Hub is a platform to find out about all the games available across different platforms that are categorized by genre.",
    imageUrl:
      "https://github.com/jaymanale/Official-Website-Version-2/assets/5653906/b0e0e44c-6f61-4055-9898-52c9ecf97b9a",
    techStack: reactjs,
    demoLink: "https://game-hub-navy-tau.vercel.app/",
    githubLink: "https://github.com/jaymanale/game-hub",
    technology: "Chakra-UI Framework, ReactJS, RAWG API",
  },
  {
    title: "Marvel Universe",
    description:
      "Web Application where you can get details about Characters, comics etc in Marvel Universe.",
    imageUrl:
      "https://github.com/jaymanale/Official-Website-Version-2/assets/5653906/205e239f-08bc-4602-9b32-e4a5a85d44a8",
    techStack: reactjs,
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
      "https://github.com/jaymanale/Official-Website-Version-2/assets/5653906/956068fa-81c5-4521-8e8a-e09588370c11",
    techStack: reactjs,
    demoLink: "https://covid-19-report-react.netlify.app/",
    githubLink: "https://github.com/jaymanale/covid-19-report",
    technology: "Bootstrap Framework, ReactJS, Covid-19 API",
  },
  {
    title: "Short News",
    description:
      "Short News web application allows you to view top news stories from different categories.",

    imageUrl:
      "https://github.com/jaymanale/Official-Website-Version-2/assets/5653906/657a7e98-1ccd-410a-a854-0e098b51fe33",
    techStack: reactjs,
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
