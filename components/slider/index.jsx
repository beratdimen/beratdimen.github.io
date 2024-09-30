import "@/components/slider/slider.css";
import Link from "next/link";

export default function Slider() {
  return (
    <div className="sliderContainer">
      <div className="sliderGeneral">
        <img height={500} src="/img/berat.JPG" />

        <div className="sliderContent">
          <div className="sliderHeader">
            <h3>Hello Im Berat</h3>
            <h2>Front-End Developer</h2>
          </div>
          <p>
            Hello! I’m a Front End Developer with a passion for building
            user-friendly web applications. I completed my training at Acunmedya
            Academy and have worked on various projects using React, Next.js,
            HTML, CSS, and JavaScript. I’m dedicated to creating responsive and
            visually appealing websites. Let’s connect and bring your ideas to
            life!
          </p>
          <Link href={"/"}>About Me</Link>
        </div>
      </div>
    </div>
  );
}
