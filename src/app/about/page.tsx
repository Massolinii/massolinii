import AboutHeader from "@/components/AboutHeader";
import AboutImage from "@/components/AboutImage";
import AboutSkills from "@/components/AboutSkills";
import AboutBio from "@/components/AboutBio";

export default function Page() {
  return (
    <div className="mx-5 lg:mx-auto">
      <div className="mt-5 flex flex-col lg:flex-row bg-background max-w-screen-lg lg:gap-x-10">
        <AboutHeader />
        <AboutImage />
      </div>
      <AboutSkills />
      <AboutBio />
    </div>
  );
}
