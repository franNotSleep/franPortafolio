import Image from "next/image";

const AboutMe = () => {
  return (
    <div className="text-left text-white flex items-center">
      <div className="flex flex-col max-sm:justify-center max-sm:items-center">
        <p className="text-heading mb-3">
          About <span className="text-base-200">me</span>
        </p>
        <p className="badge bg-base-100 text-white font-poppins my-2">Francisco Jose Lopez Ozuna</p>
        <p className="text-body">
          I'm a person who loves the 'why it works' (how everything works under
          the hood), work with database, APIs and all related to backend, but
          also loves create intuitive and beautiful websites, i'm the so called
          full-stack web developer.
        </p>
      </div>
      <div className="h-96 w-96 max-md:h-52 max-md:w-52 max-sm:hidden relative">
        <Image src="/saly-34.png" alt="saly illustration" fill/>
      </div>
    </div>
  );
};

export default AboutMe;
