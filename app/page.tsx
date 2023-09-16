import Divider from "@/components/Divider"
import Nav from "@/components/Nav"
import AboutMe from "./sections/AboutMe"
import ContactMe from "./sections/ContactMe"
import Projects from "./sections/Projects"
import Hero from "./sections/Hero"

export default function Home() {
  return (
    <main>
      <Nav />
      <section>
        <Hero />
      </section>
      <Divider />
      <section>
        <AboutMe />
      </section>
      <Divider />
      <section>
        <Projects />
      </section>
      <Divider />
      <section>
        <ContactMe />
      </section>
    </main>
  )
}
