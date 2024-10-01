import "@/components/experience/experience.css";

const data = [
  {
    id: 1,
    number: 6,
    content: "Years",
    work: "Information Technology",
  },
  {
    id: 2,
    number: 2,
    content: "Years",
    work: "Front-End Developer",
  },
  {
    id: 3,
    number: 60,
    content: "Projects",
  },
  {
    id: 4,
    number: 60,
    content: "Projects",
  },
];

export default function Experience() {
  return (
    <div>
      <div className="experienceContainer">
        <div className="year">
          <h2>08</h2>
          <h4>Years Experience</h4>
        </div>
        <div className="experienceCardContainer">
          {data.map((x) => (
            <div key={x.id} className="experienceCard">
              <h4>{x.number}</h4>
              <p>
                {x.content} {x.work ? x.work : ""}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
