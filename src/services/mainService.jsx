import linkedin from "../resources/social-icon/LinkedIN.svg";
import github from "../resources/social-icon/Github_white.svg";
import medium from "../resources/social-icon/Medium.svg";
import gmail from "../resources/social-icon/Gmail.svg";

const socialLink = [
  {
    name: "Gmail",
    link: "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=jaymanale29@gmail.com",
    icon: gmail,
    alt: "Gmail social media icon",
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/jayram-manale/",
    icon: linkedin,
    alt: "Linkedin social media icon",
  },
  {
    name: "Github",
    link: "https://github.com/jaymanale",
    icon: github,
    alt: "Github social media icon",
  },
  {
    name: "Medium",
    link: "https://medium.com/@jayram_manale",
    icon: medium,
    alt: "Medium social media icon",
  },
];

const getSocialLinkData = () => {
  return socialLink;
};

export default getSocialLinkData;
