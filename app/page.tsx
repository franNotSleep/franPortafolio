import Nav from "@/components/Nav";
import AboutMe from "./sections/AboutMe";
import ContactMe from "./sections/ContactMe";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";

export default function Home() {
  return (
    <main className="slides-container">
      <Nav />
      <section className="slides">
        <Hero />
      </section>
      <section id="about" className="slides bg-primary">
        <AboutMe />
      </section>
      <section id="projects" className="slides">
        <Projects />
      </section>
      <section id="contact" className="slides bg-primary">
        <ContactMe />
      </section>
    </main>
  );
}
