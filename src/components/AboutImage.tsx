import Image from "next/image";

export default function AboutImage() {
  return (
    <div className="flex-1 flex justify-center items-center">
      <div className="rounded-full overflow-hidden border-4 border-violet-border">
        <Image
          src="/massy_sorrisoscemo.jpg"
          alt="Massimiliano Esposito"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
}
