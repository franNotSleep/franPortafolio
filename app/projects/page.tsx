import projects, { Project } from "@/constants/projects";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="container p-4">
      <Link href={"/"} className="fixed left-4 top-4">
        <button className="btn font-poppins link-nav">Go Home</button>
      </Link>
      <p className="text-center text-heading text-white">
        Francisco Jose <span className="text-primary">┊</span> Projects
      </p>
      <div className="container flex justify-center gap-6 flex-wrap p-20">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="text-white flex max-md:flex-col justify-center gap-16 shadow-base-200 shadow-md hover:shadow-primary p-4 rounded">
      <div className="flex flex-col justify-between">
        <Image
          src={project.preview}
          quality={100}
          alt="project preview"
          width={300}
          height={300}
          className="rounded-md"
        />
        <div className="flex justify-around mx-auto gap-4 items-center self-end">
          {project.toolsImg.map((tool) => (
            <div className="badge bg-white rounded-xl w-10 h-10">
              <Image src={tool.src} alt="tool logo" height={20} width={20} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p className="font-poppins text-xl text-white">{project.title}</p>
        <p className="font-poppins badge badge-primary text-white">
          Description
        </p>
        <p className="text-body">{project.description}</p>
        <div className="flex gap-2 items-center">
          <div className="flex justify-center items-center link-nav">
            <Image
              src="/assets/tools/Earth.png"
              width={40}
              height={40}
              alt="earth logo"
            />
            <a target="-_blank" href={project.liveProject}>
              Live Project
            </a>
          </div>
          <div className="flex justify-center items-center link-nav">
            <Image
              src="/assets/github-2.png"
              width={40}
              height={40}
              alt="github logo"
            />
            <a target="-_blank" href={project.sourceCode}>
              Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
