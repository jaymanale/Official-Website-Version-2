import html from "./../resources/skills-icon/html5-plain.svg";
import css from "./../resources/skills-icon/css3-plain.svg";
import javascript from "./../resources/skills-icon/javascript-plain.svg";
import bootstrap from "./../resources/skills-icon/bootstrap-original.svg";
import reactjs from "./../resources/skills-icon/react-original.svg";
import java from "./../resources/skills-icon/java-plain.svg";
import spring from "./../resources/skills-icon/spring-original.svg";
import postgresql from "./../resources/skills-icon/postgresql-plain.svg";
import springBoot from "./../resources/skills-icon/spring-boot.svg";
import microservice from "./../resources/skills-icon/microservice.svg";

const frontEndSkills = [
  {
    icon: html,
    title: "HTML 5",
  },
  {
    icon: css,
    title: "CSS 3",
  },
  {
    icon: javascript,
    title: "Javascript",
  },
  {
    icon: bootstrap,
    title: "Bootstrap",
  },
  {
    icon: reactjs,
    title: "ReactJS",
  },
];

const backEndSkills = [
  {
    icon: java,
    title: "Java",
  },
  {
    icon: spring,
    title: "Spring Framework",
  },
  {
    icon: springBoot,
    title: "Spring Boot",
  },
  {
    icon: microservice,
    title: "Microservice",
  },
  {
    icon: postgresql,
    title: "PostgreSQL",
  },
];

const getFrontEndSkillsData = () => {
  return frontEndSkills;
};

const getBackEndSkillsData = () => {
  return backEndSkills;
};

export { getFrontEndSkillsData, getBackEndSkillsData };
