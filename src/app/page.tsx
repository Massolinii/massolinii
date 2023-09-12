"use client";
import Link from "next/link";
import Eye from "../components/Eye";
import "../styles/Home.css";

export default function Home() {
  return (
    <main className="home-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 md:grid-rows-1 h-full w-full text-xl md:text-2xl lg:text-4xl text-center">
      <div className="grid grid-rows-2 md:col-span-1 lg:col-span-1 text-left">
        <div
          className={`overlay overlay-yellow name-section home-section ps-4 border-r-2 border-b border-secondary flex flex-col justify-center title-slide-in-left`}
        >
          <div className="subtitle-slide-in-right">
            <h1 className="pb-2 text-3xl lg:hidden">MASSIMILIANO ESPOSITO</h1>
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
          className={`overlay overlay-red about-section home-section ps-4 border-r-2 border-t border-secondary flex flex-col justify-center title-slide-in-left`}
        >
          <div className="flex-col">
            <h2 className="pb-2">About Me</h2>
            <h3 className="text-base md:text-base lg:text-lg subtitle-slide-in-right">
              Learn more about me
            </h3>
            <svg
              className="arrow arrow-left subtitle-slide-in-right-rotate"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z" />
              <path d="M11.293 8.707 13.586 11H8v2h5.586l-2.293 2.293 1.414 1.414L17.414 12l-4.707-4.707-1.414 1.414z" />
            </svg>
          </div>
        </Link>
      </div>

      <div className="hidden lg:flex relative eye-section home-section md:col-span-1 flex justify-center items-center z-50 relative">
        <h1 className="pb-2 absolute top-14 title-animation">
          MASSIMILIANO ESPOSITO
        </h1>
        <div className="eye-container flex justify-center items-center ">
          <Eye />
        </div>
      </div>

      <div className="grid grid-rows-2 md:col-span-1 lg:col-span-1 text-right ">
        <Link
          href="/projects"
          className={` overlay overlay-blue project-section home-section pe-4 border-l-2 border-b border-secondary  flex flex-col justify-center items-end title-slide-in-right`}
        >
          <div className="flex-col text-right">
            <h2 className="pb-2">Projects</h2>
            <h3 className="text-base md:text-base lg:text-lg subtitle-slide-in-left">
              Discover my latest projects
            </h3>
            <svg
              className="arrow arrow-right subtitle-slide-in-left ml-auto"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z" />
              <path d="M11.293 8.707 13.586 11H8v2h5.586l-2.293 2.293 1.414 1.414L17.414 12l-4.707-4.707-1.414 1.414z" />
            </svg>
          </div>
        </Link>
        <Link
          href="/contact"
          className={` overlay overlay-green contact-section home-section pe-4 border-l-2 border-t border-secondary  flex flex-col justify-center items-end title-slide-in-right`}
        >
          {" "}
          <div className="flex-col">
            <h2 className="pb-2">Contact</h2>
            <h3 className="text-base md:text-base lg:text-lg subtitle-slide-in-left">
              My contact informations
            </h3>
            <svg
              className="arrow arrow-right subtitle-slide-in-left  ml-auto"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z" />
              <path d="M11.293 8.707 13.586 11H8v2h5.586l-2.293 2.293 1.414 1.414L17.414 12l-4.707-4.707-1.414 1.414z" />
            </svg>
          </div>
        </Link>
      </div>
    </main>
  );
}
