import ContactForm from "@/components/ContactForm";

const ContactMe = () => {
  return (
    <div className="flex max-md:flex-col justify-between w-full items-center">
      <div className="flex flex-col max-md:justify-center max-md:items-center gap-y-4 items-start">
        <p className="text-left text-heading max-lg:text-6xl max-sm:text-5xl text-white">
          Contact <span className="text-base-100">Me</span>
        </p>
        <p className="badge bg-base-100 font-poppins">Let's connect</p>
        <p className="text-body max-md:hidden max-md:p-4">
          Thank you for taking the time to explore my portfolio. If you have any
          questions, want to discuss potential collaborations, or simply want to
          say hello, I'd love to hear from you.
        </p>
        <div className="block max-md:hidden">
          <FindMe />
        </div>
      </div>
      <div className="hidden xl:block w-40 h-40 2xl:w-72  2xl:h-72">
      <img src="/saly-14.png" alt="illustration with a phone"/>
      </div>
      <div className="min-lg:w-10/12 w-5/12 max-md:w-full max-md:mt-8">
        <ContactForm />
      </div>
      <div className="hidden max-md:block">
        <FindMe />
      </div>
    </div>
  );
};

function FindMe() {
  return (
    <div className="mt-8">
      <p className="shadow-lg font-poppins text-white">Find me here!</p>
      <div className="flex gap-4">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/frannotsleep"
          className="social-link"
        >
          <img
            src="/assets/Linkedin.png"
            alt="linkedin icon"
            width={40}
            height={40}
          />
        </a>
        <a
          target="_blank"
          href="https://github.com/franNotSleep"
          className="social-link"
        >
          <img
            src="/assets/github-2.png"
            alt="github icon"
            width={40}
            height={40}
          />
        </a>
        <a href="#" data-tip="+1 829-669-4314" className="social-link">
          <img
            src="/assets/phone.png"
            alt="phone icon"
            width={40}
            height={40}
          />
        </a>
      </div>
    </div>
  );
}

export default ContactMe;
