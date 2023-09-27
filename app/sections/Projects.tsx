import { totagpreview } from "@/public/assets";
import ProjectCard from "../../components/ProjectCard";
import projects from "../../constants/projects";
import Image from "next/image";

const Projects = () => {
  return (
    <section id="projects">
      <p className="heading text-center">Projects</p>
      <div className="md:flex max-sm:mt-10 mt-16">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
