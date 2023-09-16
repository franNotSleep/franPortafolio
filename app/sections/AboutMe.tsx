import Image from "next/image";
import { paper } from "../../public/assets";

const KnowsMore = () => {
  return (
    <div>
      <label htmlFor="my_modal_6" className="button cursor-pointer">
        Knows more
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box bg-black">
          <h3 className="text-primary font-bold font-palanquin text-lg">Wow, did you really wants to know more? that's funny</h3>
          <p className="py-4 font-palanquin">
            I do actually sleep, the name of the logo and the page (frannotsleep) is actually beacuse my
            family thinks that i don't sleep, so every time they see me, they
            are always like: 'fran not sleep', even when i just woke up from an
            eight hours of pure dreaming😅.
          </p>
          <div className="modal-action">
            <label htmlFor="my_modal_6" className="button">
              Close!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutMe = () => {
  return (
    <section id="about">
      <div className="max-w-2xl flex mx-auto">
        <div className="flex-1 flex flex-col gap-7 md:items-start max-sm:text-center max-sm:p-2">
          <p className="heading">About Me</p>
          <p className="body">
            I'm a programmer who loves theory (how everything works under the
            hood), work with database, APIs and all related to backend, but also
            loves create intuitive and beautiful websites, i'm the so called
            full-stack web developer.{" "}
          </p>

          <KnowsMore />
        </div>
        <div className="flex-1 flex justify-end max-sm:hidden">
          <Image src={paper} className="h-72 w-72" alt="paper" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
