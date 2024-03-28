import {
  siBootstrap,
  siChakraui,
  siCplusplus,
  siCsharp,
  siCss3,
  siFigma,
  siGit,
  siGithub,
  siHtml5,
  siJavascript,
  siMysql,
  siNpm,
  siPhp,
  siPython,
  siReact,
  siTypescript,
  siVisualstudiocode,
  siYarn,
  siTailwindcss,
  siFramer,
  siC,
  siReactrouter,
  siFirebase

} from "simple-icons";

import { FrontEndIcon, movieInfo, pokeInfo, portfolio, savio } from "../assets";

import { renderSimpleIcon } from "react-icon-cloud";

import {
  BiHomeAlt,
  BiUser,
  BiCodeAlt,
  BiFolder,
  BiChat,
  BiLogoGithub,
  BiLogoLinkedinSquare,
} from "react-icons/bi";

export const navLinks = [
  {
    id: "hero",
    title: "Hero",
    icon: BiHomeAlt,
  },
  {
    id: "about",
    title: "About",
    icon: BiUser,
  },
  {
    id: "tech",
    title: "Technologies",
    icon: BiCodeAlt,
  },
  {
    id: "projects",
    title: "Projects",
    icon: BiFolder,
  },
  {
    id: "contact",
    title: "Contact",
    icon: BiChat,
  },
];

export const socialLinks = [
  {
    id: "github",
    url: "https://github.com/F3azy",
    icon: BiLogoGithub,
  },
  {
    id: "linkedIn",
    url: "https://www.linkedin.com/in/fcarvelli/",
    icon: BiLogoLinkedinSquare,
  },
];

export const sections = new Map([
  [
    "about",
    {
      subTitle: "INTRODUCTION",
      title: "OVERVIEW",
      description:
        "As an enthusiastic and driven front-end developer, I am actively searching for chances to improve my abilities and launch my career in web development. Despite my limited professional experience, I have dedicated considerable time to self-learning, enabling me to establish a solid proficiency in HTML, CSS, JavaScript, and React.",
    },
  ],
  [
    "tech",
    {
      subTitle: "SKILLS",
      title: "TECHNOLOGIES",
      description: "",
    },
  ],
  [
    "project",
    {
      subTitle: "MY WORK",
      title: "PROJECTS",
      description:
        "Check out my projects, showcasing my creativity, responsive designs, and use of modern technologies. These works reflect my dedication to learning and growing in web development. I'm excited to explore new collaborations and demonstrate my potential in future projects.",
    },
  ],
  [
    "contact",
    {
      subTitle: "GET IN TOUCH",
      title: "CONTACT",
      description: "",
    },
  ],
]);

export const professions = [
  {
    name: "FRONT-END DEVELOPER",
    icon: FrontEndIcon,
  },
];

const icons = [
  siJavascript,
  siTypescript,
  siHtml5,
  siCss3,
  siReact,
  siGit,
  siMysql,
  siFigma,
  siNpm,
  siYarn,
  siCplusplus,
  siCsharp,
  siBootstrap,
  siChakraui,
  siVisualstudiocode,
  siPhp,
  siPython,
  siGithub,
  siTailwindcss,
  siFramer,
  siC,
  siReactrouter,
  siFirebase,
];

export const iconsCloud = icons.map((icon) => {
  return renderSimpleIcon({
    icon,
    size: 50,
    aProps: {
      onClick: (e) => e.preventDefault(),
    },
  });
});

export const cloudOptions = {
  clickToFront: 500,
  dragControl: true,
  depth: 1,
  initial: [0.1, -0.1],
  outlineColour: "#0000",
  tooltip: "native",
  tooltipDelay: 0,
  wheelZoom: false,
};

const tech = {
  react: {
    name: "react",
    color: "#61DBFB",
  },
  chakraUI: {
    name: "chakraui",
    color: "#60CACB",
  },
  reactRouter: {
    name: "reactrouter",
    color: "#f44250",
  },
  tailwind: {
    name: "tailwind",
    color: "#38bdf8",
  },
  framerMotion: {
    name: "framermotion",
    color: "#d2c",
  },
};

export const projects = [
  {
    title: "Savio",
    image: savio,
    githubUrl: "https://github.com/F3azy/Savio",
    url: "https://www.zespolmuzycznysavio.pl/",
    description:
      "This is a small website created for a music band located in Szczecin, Poland. (currently waiting for pictures and text for the page)",
    tags: [tech.react, tech.tailwind, tech.reactRouter, tech.framerMotion],
  },
  {
    title: "FCarvelli",
    image: portfolio,
    githubUrl: "https://github.com/F3azy/portfolio",
    url: "",
    description:
      "The page you are currently on. It shows my professions, technologies and all of my current projects.",
    tags: [tech.react, tech.chakraUI, tech.framerMotion],
  },
  {
    title: "Movie Info",
    image: movieInfo,
    githubUrl: "https://github.com/F3azy/movieInfo",
    url: "https://movie-info-murex.vercel.app",
    description:
      "A small web application made for practice the basics of React, RWD, fetching data and routing.",
    tags: [tech.react, tech.chakraUI, tech.reactRouter],
  },
  {
    title: "Poke Info",
    image: pokeInfo,
    githubUrl: "https://github.com/F3azy/pokeInfo",
    url: "https://poke-info-chi.vercel.app",
    description:
      "My first ever project in React.js. Created to learn and practice the basics of React, fetching data and routing.",
    tags: [tech.react, tech.chakraUI, tech.reactRouter],
  },
];
