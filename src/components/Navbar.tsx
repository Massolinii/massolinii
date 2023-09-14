"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="grid grid-cols-3 w-full bg-primary border-b-2 border-primary-border relative font-bold">
      {/* Logo a sinistra */}
      <div className="flex items-center ps-5 border-r-2 border-primary-border">
        <Link href="/">
          <div className="flex items-center">
            <svg
              className="logo"
              id="Livello_2"
              data-name="Livello 2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 950 599.16"
            >
              <g id="Livello_1-2" data-name="Livello 1">
                <g>
                  <g>
                    <path
                      d="m0,569.4c23.87-30.22,46.92-67.3,69.14-111.25L201.2,199c-13.99-54.94-27.08-93.53-39.29-115.78-12.21-22.25-30.93-33.37-56.16-33.37-23.33,0-45.53,11.53-66.66,34.61l-20.17-22.25C56.78,20.74,94.23,0,131.26,0c25.78,0,45.81,7.35,60.07,22.04,14.25,14.69,26.18,38.11,35.8,70.24,9.59,32.14,23.17,94.22,40.73,186.23,22.77,120.04,40.53,195.78,53.29,227.22,12.75,31.45,27.91,47.18,45.47,47.18,12.62,0,24.27-4.39,34.97-13.18l15.63,24.72c-27.16,21.15-51.57,31.73-73.23,31.73-30.73,0-52.67-15.79-65.84-47.38-13.16-31.59-31.54-116.6-55.13-255.04h-2.46c-46.64,94.76-92.32,199.97-137.02,302.42H0v-26.78Z"
                      style={{ fill: "#fff", strokeWidth: "0px" }}
                    />
                    <path
                      d="m614.43,599.16h-67.11l-108.89-314.91-84.71,207.01c-8.73,21.37-13.16,38.14-13.16,49.85v5.4l-51.68-32.5,138.9-324.72h51.69l134.97,409.88Zm-62.86-5.96h54.62l-131.04-397.95h-43.44l-135.35,316.42,38.48,24.2c1.05-11.98,5.53-27.71,13.36-46.86l90.69-221.63,112.67,325.83Z"
                      style={{ fill: "#fff", strokeWidth: "0px" }}
                    />
                  </g>
                  <polygon
                    points="748.61 593.2 670.41 361.28 765.51 361.28 765.51 355.32 668.4 355.32 614.43 195.25 766.15 195.25 766.15 189.28 553.74 189.28 688.03 597.11 688.7 599.16 950 599.16 950 593.2 748.61 593.2"
                    style={{ fill: "#fff", strokeWidth: "0px" }}
                  />
                </g>
              </g>
            </svg>
            <div className="hidden hover:underline underline-offset-8 sm:block ml-2 mt-1 border-l-2 border-primary-border p-2 ps-4 ms-4">
              Home
            </div>
          </div>
        </Link>
      </div>

      {/* Links al centro in modalità desktop */}
      <div className="hidden lg:flex justify-between items-center flex-grow px-10 py-6 ">
        <Link href="/about" className="hover:underline underline-offset-8">
          <p>About Me</p>
        </Link>
        <Link href="/projects" className="hover:underline underline-offset-8">
          <p>Projects</p>
        </Link>
        <Link href="/contacts" className="hover:underline underline-offset-8">
          <p>Contacts</p>
        </Link>
      </div>

      {/* Icona del menu hamburger in modalità mobile */}
      <div className="lg:hidden flex justify-center items-center flex-grow px-4 py-6">
        <button onClick={() => setIsOpen(!isOpen)}>
          <span className="text-xl">&#9776;</span>
        </button>
      </div>

      {/* Links in modalità mobile (tendina a comparsa) */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-primary border-y-2 border-primary-border z-10">
          <div className="flex justify-around items-center py-4">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <p>Home</p>
            </Link>
            <Link href="/about" onClick={() => setIsOpen(false)}>
              <p>About Me</p>
            </Link>
            <Link href="/projects" onClick={() => setIsOpen(false)}>
              <p>Projects</p>
            </Link>
            <Link href="/contacts" onClick={() => setIsOpen(false)}>
              <p>Contacts</p>
            </Link>
          </div>
        </div>
      )}

      {/* Link GitHub a destra */}
      <div className="flex justify-end flex-grow pe-5 py-5 border-l-2 border-primary-border ">
        <Link
          href="https://github.com/Massolinii"
          target="_blank"
          rel="noopener noreferrer"
          className="px-2 md:px-4 py-1 box-border border-2 border-primary-border rounded-full hover:bg-primary-transparency"
        >
          GitHub
        </Link>
      </div>
    </nav>
  );
}
