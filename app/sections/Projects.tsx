import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="flex justify-center ">
      <div className="max-sm:hidden h-96 w-96 relative">
        <Image fill src="/saly-11.png" alt="middle age with a laptop" />
      </div>
      <div className="flex flex-col max-sm:justify-center max-sm:items-center gap-y-4">
        <p className="text-heading text-white text-left">Projects</p>
        <p className="text-white badge bg-primary font-poppins my-2">
          Go and see my latest projects
        </p>
        <p className="text-body">
          Feel free to browse through these projects to get a glimpse of what I
          can achieve. Each project represents a unique puzzle I've solved, a
          goal I've achieved, and a step forward in my professional journey.
        </p>
        <Link href={"/projects"}>
          <button className="rounded-lg self-start max-md:mx-auto font-poppins btn btn-wide bg-primary mt-4 hover:bg-primary-focus">
            Explore
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
