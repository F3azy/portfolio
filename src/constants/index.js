import {
    FrontEndIcon,
    HeroAnimation,
    HeroBG
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
]