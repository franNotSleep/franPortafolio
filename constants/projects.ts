import { StaticImageData } from "next/image";
import { previewChatapp, previewTIL } from "../public/assets";
import {
  python,
  typescript,
  react,
  docker,
  postgre,
  nodejs,
  mongodb,
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
    title: "TIL",
    description:
      "TIL (today i learned) is a simple post App that allows user to share what they have learn, obviously 😅. Users can post, comments on another post, edit their post, visit and search others users profiles.",
    sourceCode: "https://github.com/franNotSleep/TIL",
    liveProject: "https://brave-tree-02e69f210.3.azurestaticapps.net",
    toolsImg: [python, typescript, react, docker, postgre],
    preview: previewTIL,
  },

  {
    title: "CHATAPP",
    description:
      "A Chat application That allows you to talk with friends in real-time. This project provide with typing status and onlint/offline feedback.",
    sourceCode: "https://github.com/franNotSleep/chatapp",
    liveProject: "http://chatapp.eastus.cloudapp.azure.com",
    toolsImg: [typescript, nodejs, react, mongodb],
    preview: previewChatapp,
  },
];

export default projects;
