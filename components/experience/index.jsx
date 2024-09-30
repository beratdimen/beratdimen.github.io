import "@/components/experience/experience.css";
import {
  CssIcon,
  FigmaIcon,
  HtmlIcon,
  JavascriptIcon,
  NextjsIcon,
  ReactIcon,
} from "@/helpers/icons";

const data = [
  {
    id: 1,
    img: <JavascriptIcon />,
    title: "JAVASCRİPT",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, quo!",
  },
  {
    id: 2,
    img: <NextjsIcon />,
    title: "NEXT",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, quo!",
  },
  {
    id: 3,
    img: <HtmlIcon />,
    title: "HTML",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, quo!",
  },
  {
    id: 4,
    img: <CssIcon />,
    title: "CSS",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, quo!",
  },
  {
    id: 5,
    img: <ReactIcon />,
    title: "REACT",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, quo!",
  },
  {
    id: 6,
    img: <FigmaIcon />,
    title: "FIGMA",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, quo!",
  },
];

export default function Experience() {
  return (
    <div className="experienceContainer">
      {data.map((x) => (
        <div className="experienceCard">
          {x.img}
          <h4>{x.title}</h4>
          <p>{x.content}</p>
        </div>
      ))}
    </div>
  );
}
