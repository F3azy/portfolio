import { movieInfo, pokeInfo, portfolio, writementor } from "../assets";

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
    title: "Write Mentor",
    image: writementor,
    githubUrl: "https://github.com/F3azy/WriteMentor",
    url: "https://write-mentor.vercel.app/",
    description:
      "A web app to build writing skills in your chosen language.",
    tags: [tech.react, tech.tailwind],
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
