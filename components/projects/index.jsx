import Image from "next/image";
import Link from "next/link";
import "@/components/projects/project.css";
import { RightIcom } from "@/helpers/icons";

export default function Projects() {
  const data = [
    {
      id: 1,
      img: "/img/products.png",
      title: "Products",
      link: "View Detail",
    },
    {
      id: 2,
      img: "/img/users.png",
      title: "Users",
      link: "View Detail",
    },
    {
      id: 3,
      img: "/img/students-attedance.png",
      title: "Students Attedance",
      link: "View Detail",
    },
    {
      id: 4,
      img: "/img/pomodoro.png",
      title: "Pomodoro",
      link: "View Detail",
    },
  ];

  return (
    <div>
      <h1>My Projects</h1>
      <div className="projectsContainer">
        {data.map((x) => (
          <div key={x.id} className="projectCard">
            <Image className="img" width={150} height={150} src={x.img} />
            <h4>{x.title}</h4>
            <Link href={"/"}>
              {x.link} <RightIcom />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
