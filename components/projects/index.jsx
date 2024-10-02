import Image from "next/image";
import Link from "next/link";
import "@/components/projects/project.css";
import { GithubIcon, LiveIcon, RightIcom } from "@/helpers/icons";

export default function Projects() {
  const data = [
    {
      id: 1,
      img: "/img/products.png",
      title: "Products",
      detail: "View Detail",
      links: {
        live: "https://products-next-eta.vercel.app/products",
        github: "https://github.com/beratdimen/products-next",
      },
    },
    {
      id: 2,
      img: "/img/users.png",
      title: "Users",
      detail: "View Detail",
      links: {
        live: "https://usersnext.netlify.app/users",
        github: "https://github.com/beratdimen/users-next",
      },
    },
    {
      id: 3,
      img: "/img/students-attedance.png",
      title: "Students Attedance",
      detail: "View Detail",
      links: {
        live: "https://studentsattendace.netlify.app/",
        github: "https://github.com/beratdimen/students-attendace-next",
      },
    },
    {
      id: 4,
      img: "/img/pomodoro.png",
      title: "Pomodoro",
      detail: "View Detail",
      links: {
        live: "https://pomodoro-beta-fawn.vercel.app/",
        github: "https://github.com/beratdimen/pomodoro",
      },
    },
    {
      id: 5,
      img: "/img/promise.png",
      title: "Promise",
      detail: "View Detail",
      links: {
        live: "https://promisestudy.netlify.app/",
        github: "https://github.com/beratdimen/promise-study-case",
      },
    },

    {
      id: 5,
      img: "/img/quizApp.png",
      title: "Front-End Quiz",
      detail: "View Detail",
      links: {
        live: "https://promisestudy.netlify.app/",
        github: "https://github.com/beratdimen/frontEndQuizApp",
      },
    },
  ];

  return (
    <div>
      <div className="projectsContainer">
        {data.map((x) => (
          <div key={x.id} className="projectCard">
            <Image
              className="img"
              width={250}
              height={250}
              src={x.img}
              alt=""
            />
            <h4>{x.title}</h4>
            <div className="links">
              <Link
                className="detail"
                href={"./detail-page-uyari"}
                target="blank"
              >
                {x.detail} <RightIcom />
              </Link>
              <div className="icons">
                <Link href={`${x.links.live}`} target="blank">
                  <LiveIcon />
                </Link>
                <Link href={`${x.links.github}`} target="blank">
                  <GithubIcon />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
