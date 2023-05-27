import linkedin from "../resources/social-icon/LinkedIN.png";
import github from "../resources/social-icon/Github.png";
import twitter from "../resources/social-icon/Twitter.png";
import medium from "../resources/social-icon/Medium.png";
import gmail from "../resources/social-icon/Gmail.png";

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
    name: "Twitter",
    link: "https://twitter.com/jayrammanale",
    icon: twitter,
    alt: "Twitter social media icon",
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
