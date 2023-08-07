import {
    FrontEndIcon,
} from '../assets';

import {
    BiHomeAlt,
    BiUser,
    BiCodeAlt,
    BiFolder,
    BiChat,
    BiLogoGithub,
    BiLogoLinkedinSquare
} from 'react-icons/bi';

export const navLinks = [
    {
        id: "hero",
        title: "Home",
        icon: BiHomeAlt
    },
    {
        id: "about",
        title: "About",
        icon: BiUser
    },
    {
        id: "tech",
        title: "Technologies",
        icon: BiCodeAlt
    },
    {
        id: "projects",
        title: "Projects",
        icon: BiFolder
    },
    {
        id: "contact",
        title: "Contact",
        icon: BiChat
    },
];

export const socialLinks = [
    {
        id: "github",
        url: "https://github.com/F3azy",
        icon: BiLogoGithub
    },
    {
        id: "linkedIn",
        url: "https://www.linkedin.com/in/fcarvelli/",
        icon: BiLogoLinkedinSquare
    },
];

export const sections = new Map([
    ["about", {
        subTitle: "INTRODUCTION",
        title: "OVERVIEW",
        description: "As an enthusiastic and driven front-end developer, I am actively searching for chances to improve my abilities and launch my career in web development. Despite my limited professional experience, I have dedicated considerable time to self-learning, enabling me to establish a solid proficiency in HTML, CSS, JavaScript, and React.",
    }],
    ["tech", {
        subTitle: "SKILLS",
        title: "TECHNOLOGIES",
        description: "",
    }],
    ["project", {
        subTitle: "MY WORK",
        title: "PROJECTS",
        description: "Check out my projects, showcasing my creativity, responsive designs, and use of modern technologies. These works reflect my dedication to learning and growing in web development. I'm excited to explore new collaborations and demonstrate my potential in future projects.",
    }],
    ["message", {
        subTitle: "GET IN TOUCH",
        title: "CONTACT",
        description: "",
    }]
]);

export const proffesions = [
    {
        name: "Front-end Developer",
        icon: FrontEndIcon
    },
]
