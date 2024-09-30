import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Slider from "@/components/slider";

export default function Home() {
  return (
    <>
      <Slider />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}
