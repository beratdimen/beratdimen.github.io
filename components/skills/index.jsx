import "@/components/skills/skills.css";
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
    title: "JAVASCRIPT",
    content:
      "I've been developing modern web applications with JavaScript for 2 years. I use ES6+ features and have experience with React for building single-page applications. I'm skilled in API integration, async/await, and DOM manipulation to create efficient, user-friendly apps.",
  },
  {
    id: 2,
    img: <NextjsIcon />,
    title: "NEXT",
    content:
      "I am currently learning Next.js to enhance my skills in server-side rendering and static site generation. With Next.js, I'm focusing on building faster, SEO-friendly applications and improving overall performance.",
  },
  {
    id: 3,
    img: <HtmlIcon />,
    title: "HTML",
    content:
      "I have 2 years of experience with HTML, building well-structured, accessible, and semantic web pages. I focus on writing clean, maintainable code to ensure my websites are both user-friendly and SEO-optimized.",
  },
  {
    id: 4,
    img: <CssIcon />,
    title: "CSS",
    content:
      "I have 2 years of experience with CSS, creating responsive and visually appealing layouts. I am skilled in Flexbox, Grid, and CSS animations, focusing on building modern designs that work across different devices and screen sizes.",
  },
  {
    id: 5,
    img: <ReactIcon />,
    title: "REACT",
    content:
      "I have solid experience with React, using it to build dynamic, single-page applications. Currently, I'm working on projects that combine both React and Next.js to take advantage of server-side rendering and static site generation for better performance and SEO. These tools help me create modern, efficient web applications.",
  },
  {
    id: 6,
    img: <FigmaIcon />,
    title: "FIGMA",
    content:
      "I am proficient in Figma and can convert designs into responsive, pixel-perfect code. I take UI/UX designs from Figma and implement them using HTML, CSS, and JavaScript frameworks, including React and Next.js, for dynamic and high-performance applications.",
  },
];

export default function Skills() {
  return (
    <div>
      <h1>My Skills</h1>
      <div className="skillsContainer">
        {data.map((x) => (
          <div key={x.id} className="skillsCard">
            <div className="skillsHeader">
              {x.img}
              <h4>{x.title}</h4>
            </div>
            <p>{x.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
