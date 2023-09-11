"use client";
import Link from "next/link";
import Eye from "../components/Eye";
import "../styles/Home.css";

export default function Home() {
  return (
    <main className="home-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 md:grid-rows-1 h-full w-full text-xl md:text-2xl lg:text-4xl text-center">
      <div className="grid grid-rows-2 md:col-span-1 lg:col-span-1">
        <div
          className={`relative overlay overlay-yellow name-section home-section border border-space flex justify-center items-center flex-col p-5 title-slide-in-left`}
        >
          <div className="pb-2">MASSIMILIANO ESPOSITO</div>
          <div className="subtitle-slide-in-right">
            <div className="text-sm md:text-base lg:text-lg ">
              A junior full-stack web developer currently working on crafting
              fine user experiences that capture imagination.
            </div>
            <div className="text-sm pt-9">
              Feel free to view this site on desktop to enjoy its content
            </div>
          </div>
        </div>

        <Link
          href="/about"
          className={`relative overlay overlay-red about-section home-section border border-space flex justify-center items-center title-slide-in-left`}
        >
          <svg
            className="arrow arrow-left subtitle-slide-in-right-rotate"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z" />
            <path d="M11.293 8.707 13.586 11H8v2h5.586l-2.293 2.293 1.414 1.414L17.414 12l-4.707-4.707-1.414 1.414z" />
          </svg>
          <div className="flex-col">
            <div className="pb-2">About Me</div>
            <div className="text-base md:text-base lg:text-lg subtitle-slide-in-right">
              Learn more about me
            </div>
          </div>
        </Link>
      </div>

      <div className="hidden lg:flex relative eye-section home-section md:col-span-1 flex justify-center items-center z-50">
        <div className="eye-container flex justify-center items-center">
          <Eye />
        </div>
      </div>

      <div className="grid grid-rows-2 md:col-span-1 lg:col-span-1">
        <Link
          href="/projects"
          className={`relative overlay overlay-blue project-section home-section border border-space flex justify-center items-center title-slide-in-right`}
        >
          <svg
            className="arrow arrow-right subtitle-slide-in-left"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z" />
            <path d="M11.293 8.707 13.586 11H8v2h5.586l-2.293 2.293 1.414 1.414L17.414 12l-4.707-4.707-1.414 1.414z" />
          </svg>
          <div className="flex-col">
            <div className="pb-2">Projects</div>
            <div className="text-base md:text-base lg:text-lg subtitle-slide-in-left">
              Discover my latest projects
            </div>
          </div>
        </Link>
        <Link
          href="/contact"
          className={`relative overlay overlay-green contact-section home-section border border-space flex justify-center items-center title-slide-in-right`}
        >
          {" "}
          <svg
            className="arrow arrow-right subtitle-slide-in-left"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z" />
            <path d="M11.293 8.707 13.586 11H8v2h5.586l-2.293 2.293 1.414 1.414L17.414 12l-4.707-4.707-1.414 1.414z" />
          </svg>
          <div className="flex-col">
            <div className="pb-2">Contact</div>
            <div className="text-base md:text-base lg:text-lg subtitle-slide-in-left">
              My contact informations
            </div>
          </div>
        </Link>
      </div>
    </main>
  );
}
