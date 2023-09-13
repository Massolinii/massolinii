import Image from "next/image";

export default function AboutImage() {
  return (
    <div className="flex-1 flex justify-center lg:justify-end items-center">
      <div className="rounded-ss-3xl rounded-ee-3xl overflow-hidden border-y-4 border-2 border-primary-border">
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
