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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            eveniet officia totam ullam qui velit aut doloremque odio
            repudiandae, dicta error fugit asperiores, atque aliquam sint vel,
            praesentium impedit nostrum?
          </p>
          <Link href={"/"}>About Me</Link>
        </div>
      </div>
    </div>
  );
}
