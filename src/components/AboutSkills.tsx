import SkillCard from "./SkillCard";

const frontendSkills = [
  {
    imgSrc: "/icons/front-end/html.svg",
    skillName: "HTML",
    color: "text-orange-500",
  },
  {
    imgSrc: "/icons/front-end/css.svg",
    skillName: "CSS",
    color: "text-cyan-400",
  },
  {
    imgSrc: "/icons/front-end/javascript.svg",
    skillName: "JavaScript",
    color: "text-amber-300",
  },
  {
    imgSrc: "/icons/front-end/react.svg",
    skillName: "React",
    color: "text-cyan-400",
  },
  {
    imgSrc: "/icons/front-end/redux.svg",
    skillName: "Redux",
    color: "text-primary-500",
  },
  {
    imgSrc: "/icons/front-end/typescript.svg",
    skillName: "Typescript",
    color: "text-blue-500",
  },
  {
    imgSrc: "/icons/front-end/bootstrap.svg",
    skillName: "Bootstrap",
    color: "text-purple-500",
  },
  {
    imgSrc: "/icons/front-end/tailwind.svg",
    skillName: "Tailwind",
    color: "text-stone-300",
  },
  {
    imgSrc: "/icons/front-end/sass.svg",
    skillName: "SASS",
    color: "text-pink-300",
  },

  {
    imgSrc: "/icons/front-end/next-js.svg",
    skillName: "NextJS 13",
    color: "text-zinc-400",
  },
];

const backendSkills = [
  {
    imgSrc: "/icons/back-end/java.svg",
    skillName: "Java",
    color: "text-sky-500",
  },
  {
    imgSrc: "/icons/back-end/spring.svg",
    skillName: "Spring",
    color: "text-lime-500",
  },
  {
    imgSrc: "/icons/back-end/nodejs.svg",
    skillName: "NodeJS",
    color: "text-lime-400",
  },
  {
    imgSrc: "/icons/back-end/mysql.svg",
    skillName: "MySQL",
    color: "text-blue-600",
  },
  {
    imgSrc: "/icons/back-end/spring-security.png",
    skillName: "Spring Security",
    color: "text-lime-600",
  },
  {
    imgSrc: "/icons/back-end/postgresql.svg",
    skillName: "PosteSQL",
    color: "text-blue-400",
  },
];

export default function AboutSkills() {
  return (
    <div className="container flex flex-col mx-auto max-w-screen-lg text-center my-8">
      <h3 className="text-4xl mx-auto text-center">Skills</h3>
      <div className="flex flex-col md:flex-row justify-between text-slate-200 gap-5 my-6">
        <div className="md:w-3/5 lg:w-1/2 p-1 border-t-4 border-b-8 border-primary-border rounded-3xl bg-primary">
          <h4 className="text-3xl m-4 ">Frontend</h4>
          <div className="flex flex-wrap justify-center gap-6 m-1 cousine">
            {frontendSkills.map((skill, index) => (
              <SkillCard
                key={index}
                imgSrc={skill.imgSrc}
                skillName={skill.skillName}
                color={skill.color}
              />
            ))}
          </div>
        </div>
        <div className="md:w-3/5 lg:w-1/2 border-t-4 border-b-8 border-primary-border rounded-3xl bg-primary">
          <h4 className="text-3xl m-4">Backend</h4>
          <div className="flex flex-wrap justify-center gap-8 m-1 cousine ">
            {backendSkills.map((skill, index) => (
              <SkillCard
                key={index}
                imgSrc={skill.imgSrc}
                skillName={skill.skillName}
                color={skill.color}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
