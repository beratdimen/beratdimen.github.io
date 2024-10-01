import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Slider from "@/components/slider";
import WebSiteBand from "@/components/webSiteBand";

export default function Home() {
  return (
    <>
      <Slider />
      <WebSiteBand />
      <Skills />
      <WebSiteBand />
      <Experience />
      <WebSiteBand />
      <Projects />
      <WebSiteBand />
      <Contact />
    </>
  );
}
