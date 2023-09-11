import Image from "next/image";

export default function SkillCard({ imgSrc, skillName }) {
  return (
    <div className="flex items-center space-x-2">
      <div className="w-8 h-8">
        <Image src={imgSrc} alt={skillName} width={32} height={32} />
      </div>
      <span>{skillName}</span>
    </div>
  );
}
