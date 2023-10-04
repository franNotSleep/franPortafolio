import { StaticImageData } from "next/image";
import {
  portafoliopreview,
  previewChatapp,
  previewTIL,
  totagpreview,
} from "../public/assets";
import {
  python,
  typescript,
  react,
  docker,
  postgre,
  nodejs,
  mongodb,
  nextjs,
} from "../public/assets/tools";

export type Project = {
  toolsImg: StaticImageData[];
  title: string;
  description: string;
  sourceCode: string;
  liveProject: string;
  preview: StaticImageData;
};

const projects: Project[] = [
  {
    title: "ToTag",
    description:
      "This is a simple markdown converter to HTML. I said markdown, but it is not really the case, the syntax is a little bit more diffrent and ugly, and also lack of the same functionality, but it is pretty fun to see how it works😅. So with that said, i will give this the title of the best markdown to html converter🥇.",
    sourceCode: "https://github.com/franNotSleep/toTag",
    liveProject: "https://to-tag.vercel.app/how-to-use",
    toolsImg: [typescript, react, nextjs],
    preview: totagpreview,
  },
  {
    title: "TIL",
    description:
      "TIL (today i learned) is a simple post App that allows user to share what they have learn, obviously 😅. Users can post, comments on another post, edit their post, visit and search others users profiles.",
    sourceCode: "https://github.com/franNotSleep/TIL",
    liveProject: "",
    toolsImg: [typescript, postgre, react, python, docker],
    preview: previewTIL,
  },
  {
    title: "ChatApp",
    description:
      "A Chat application That allows you to talk with friends in real-time. This project provide with typing status and onlint/offline feedback.",
    sourceCode: "https://github.com/franNotSleep/chatapp",
    liveProject: "",
    toolsImg: [typescript, mongodb, react, nodejs],
    preview: previewChatapp,
  },
  {
    title: "Portafolio",
    description:
      "This is just my portafolio, where i show some of my recent projects, showing how i use the current technologies.  ",
    sourceCode: "https://frannotsleep.vercel.app/",
    liveProject: "https://frannotsleep.vercel.app/",
    toolsImg: [typescript, nextjs, react],
    preview: portafoliopreview,
  },
];

export default projects;
