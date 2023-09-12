import Image from "next/image";

export default function SkillCard({ imgSrc, skillName, color }) {
  return (
    <div className="flex items-center space-x-2 justify-center text-lg text-space p-1">
      <div className="w-8 h-8">
        <Image src={imgSrc} alt={skillName} width={32} height={32} />
      </div>
      <span className={color}>{skillName}</span>
    </div>
  );
}
