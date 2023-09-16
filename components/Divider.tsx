import Image from "next/image";
import tools from "../constants/tools";

const Divider = () => {
  return (
    <div className="bg-primary flex max-sm:justify-around justify-center py-1 md:gap-16  my-16">
      {tools.map((tool) => (
        <Image src={tool.src} alt={tool.alt} className="h-16 w-16 max-sm:h-8 max-sm:w-8" key={tool.alt} />
      ))}
    </div>
  );
};

export default Divider;
