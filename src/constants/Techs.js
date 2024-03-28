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
  siFirebase,
} from "simple-icons";

import { renderSimpleIcon } from "react-icon-cloud";

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
