"use client";
import Eye from "@/components/eye/Eye";
import "../styles/Home.css";

export default function Home() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 grid-rows-2 md:grid-rows-1 h-full w-full text-xl md:text-2xl lg:text-4xl text-center">
      <div className="grid grid-rows-2 md:col-span-1 lg:col-span-1">
        <div className={`relative overlay overlay-yellow name-section home-section border border-space flex justify-center items-center flex-col p-5 slide-in-left`}>
          <div className="pb-1 title-slide-in-right">MASSIMILIANO ESPOSITO</div>
          <div className="text-sm sm:text-lg md:text-xl subtitle-slide-in-right">
            A junior full-stack web developer currently working on crafting fine user experiences that capture imagination.
          </div>
        </div>
        <div className={`relative overlay overlay-red about-section home-section border border-space flex justify-center items-center slide-in-left`}>
          <div className="flex-col">
            <div className="title-slide-in-right">About Me</div>
            <div className="text-base sm:text-lg md:text-xl subtitle-slide-in-right">Learn more about me</div>
          </div>
        </div>
      </div>

      <div className="hidden md:flex relative overlay overlay-white eye-section home-section border border-space md:col-span-1 lg:col-span-1 flex justify-center items-center">
        <div className="eye-container flex justify-center items-center">
          <Eye />
        </div>
      </div>

      <div className="grid grid-rows-2 md:col-span-1 lg:col-span-1">
        <div className={`relative overlay overlay-blue project-section home-section border border-space flex justify-center items-center slide-in-right`}>
          <div className="flex-col">
            <div className="title-slide-in-left">Projects</div>
            <div className="text-base sm:text-lg md:text-xl subtitle-slide-in-left">
              Discover my latest projects
            </div>
          </div>
        </div>
        <div className={`relative overlay overlay-green contact-section home-section border border-space flex justify-center items-center slide-in-right`}>
          <div className="flex-col">
            <div className="title-slide-in-left">Contact</div>
          <div className="text-base sm:text-lg md:text-xl  subtitle-slide-in-left">
              My contact informations
            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
}
