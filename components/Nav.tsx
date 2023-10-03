import Link from "next/link";
import DownloadCV from "./DownloadCV";

const Nav = () => {
  return (
    <header className="fixed top-0 inset-x-0">
      <nav className="flex items-center justify-between p-4">
        <ul
          className={`px-8 flex items-center max-md:justify-around md:gap-16 font-poppins w-full`}
        >
          <li className="text-white link-nav ease-in-out">
            <a href="#about">About</a>
          </li>
          <li className="text-white link-nav ease-in-out md:flex-1">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="text-white link-nav ease-in-out">
            <a href="#contact">Contact</a>
          </li>
          <DownloadCV />
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
