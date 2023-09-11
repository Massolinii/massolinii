import SkillCard from "./SkillCard";

const frontendSkills = [
  {
    imgSrc: "/icons/front-end/html.svg",
    skillName: "HTML",
  },
  {
    imgSrc: "/icons/front-end/css.svg",
    skillName: "CSS",
  },
  {
    imgSrc: "/icons/front-end/javascript.svg",
    skillName: "JavaScript",
  },
  {
    imgSrc: "/icons/front-end/react.svg",
    skillName: "React",
  },
  {
    imgSrc: "/icons/front-end/redux.svg",
    skillName: "Redux",
  },
  {
    imgSrc: "/icons/front-end/typescript.svg",
    skillName: "Typescript",
  },
  {
    imgSrc: "/icons/front-end/bootstrap.svg",
    skillName: "Bootstrap",
  },
  {
    imgSrc: "/icons/front-end/sass.svg",
    skillName: "SASS",
  },
  {
    imgSrc: "/icons/front-end/tailwind.svg",
    skillName: "Tailwind",
  },
  {
    imgSrc: "/icons/front-end/next-js.svg",
    skillName: "NextJS",
  },
];

const backendSkills = [
  {
    imgSrc: "/icons/back-end/java.svg",
    skillName: "Java",
  },
  {
    imgSrc: "/icons/back-end/spring.svg",
    skillName: "Spring",
  },
  {
    imgSrc: "/icons/back-end/nodejs.svg",
    skillName: "NodeJS",
  },
  {
    imgSrc: "/icons/back-end/mysql.svg",
    skillName: "MySQL",
  },
  {
    imgSrc: "/icons/back-end/postgresql.svg",
    skillName: "PosteSQL",
  },
];

export default function SkillsSection() {
  return (
    <div className="container mx-auto mt-10 max-w-screen-lg text-center">
      <h3 className="text-4xl mb-10 mx-auto">Skills</h3>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="md:w-1/2 p-4">
          <h4 className="text-3xl mb-4">Frontend</h4>
          <div className="grid grid-cols-2 gap-4">
            {frontendSkills.map((skill, index) => (
              <SkillCard
                key={index}
                imgSrc={skill.imgSrc}
                skillName={skill.skillName}
              />
            ))}
          </div>
        </div>
        <div className="md:w-1/2 p-4">
          <h4 className="text-3xl mb-4">Backend</h4>
          <div className="grid grid-cols-1 gap-4">
            {backendSkills.map((skill, index) => (
              <SkillCard
                key={index}
                imgSrc={skill.imgSrc}
                skillName={skill.skillName}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
