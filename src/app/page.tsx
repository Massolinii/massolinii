"use client";
import Eye from "@/components/eye/Eye";
import "../styles/Home.css";

export default function Home() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 h-full w-full text-4xl text-center ">
      <div className="relative overlay overlay-red about-section home-section border border-space md:col-span-1 lg:col-span-1 flex justify-center items-center">
        <div className="flex-col">
          <div>About Me</div>
          <br />
          <div className="text-xl ">Learn more about me</div>
        </div>
      </div>

      <div className="grid grid-rows-3 md:col-span-1 lg:col-span-1">
        <div className="relative overlay overlay-yellow name-section home-section border border-space flex justify-center items-center flex-col p-5">
          <div className="text-4xl pb-1">MASSIMILIANO ESPOSITO,</div>
          <div className="text-base">
            A junior full-stack web developer currently working on crafting fine
            user experiences that capture imagination.
          </div>
          <br />
          <div className="text-sm ">
            Feel free to experience this site on desktop for the best experience
          </div>
        </div>
        <div className="relative overlay overlay-white eye-section home-section border border-space flex justify-center items-center">
          <div className="eye-container flex justify-center items-center">
            <Eye />
          </div>
        </div>
        <div className="relative overlay overlay-green contact-section home-section border border-space flex justify-center items-center">
          Contact
        </div>
      </div>
      <div className="relative overlay overlay-blue project-section home-section border border-space md:col-span-1 lg:col-span-1 flex justify-center items-center">
        <div className="flex-col">
          <div>Projects</div>
          <br />
          <div className="text-xl ">
            Discover my latest projects, both alone and in team!
          </div>
        </div>
      </div>
    </main>
  );
}
