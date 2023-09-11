import Image from "next/image";
import Link from "next/link";
import "../../styles/About.css";

import AboutHeader from "@/components/AboutHeader";
import AboutImage from "@/components/AboutImage";
import AboutSkills from "@/components/AboutSkills";

export default function Page() {
  return (
    <>
      <div className="container mx-auto mt-10 flex flex-col lg:flex-row bg-background max-w-screen-lg lg:gap-x-10">
        <AboutHeader />
        <AboutImage />
      </div>
      <AboutSkills />
    </>
  );
}
