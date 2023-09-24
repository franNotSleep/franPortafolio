import { earth, github } from "../public/assets/tools";
import type { Project } from "../constants/projects";
import Image from "next/image";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="hover:-translate-y-1 hover:scale-110  transition ease-in-out duration-100 max-w-lg max-sm:max-w-sm max-sm:px-4 mx-auto flex-col flex justify-start">
      <div className="flex flex-row-reverse items-center mx-auto">
        <div
          className="ml-2 rounded-lg bg-secondary mx-auto flex flex-col gap-6 justify-between 
    "
        >
          {project.toolsImg.map((toolImg) => (
            <Image
              className="h-10 w-10 object-contain animate-bounce"
              src={toolImg}
              alt="tools"
              key={toolImg.src}
            />
          ))}
        </div>
        <div>
          <div className="card">
            <div className="flex flex-col">
              <div className="shrink-0">
                <Image alt="project preview" className="object-contain" src={project.preview} />
              </div>
              <div className="p-4">
                <a
                  href={project.sourceCode}
                  className="mt-1 font-palanquin text-underline leading-tight block text-white font-bold text-lg"
                >
                  {project.title}
                </a>
                <p className="mt-2 body text-white">{project.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-start flex px-4 mt-2 group rounded-lg bg-secondary ">
        <div className="flex items-center">
          <Image className="h-12 w-12" src={github} alt="github" />
          <a target="_blank" className="link" href={project.sourceCode}>
            Source Code
          </a>
        </div>
        <div className="flex items-center">
          <Image className="h-12 w-12" src={earth} alt="earth" />
          <a target="_blank" className="link" href={project.liveProject}>
            Live project
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
