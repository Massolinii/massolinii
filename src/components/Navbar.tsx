"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="grid grid-cols-3 w-full bg-violet-dark border-b border-violet relative">
      {/* Logo a sinistra */}
      <div className="flex-grow px-4 py-6 border-r border-violet lg:border-r lg:border-violet">
        <Link href="/">
          <svg
            className="logo"
            id="Livello_2"
            data-name="Livello 2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 66.94 44.77"
          >
            <g id="Livello_1-2" data-name="Livello 1">
              <path
                d="m0,42.16c1.77-2.24,3.48-4.98,5.13-8.24L14.92,14.74c-1.04-4.07-2.01-6.93-2.91-8.57s-2.29-2.47-4.16-2.47c-1.73,0-3.38.85-4.94,2.56l-1.5-1.65C4.21,1.54,6.99,0,9.73,0c1.91,0,3.4.54,4.45,1.63,1.06,1.09,1.94,2.82,2.65,5.2.71,2.38,1.72,6.98,3.02,13.79,1.69,8.89,3,14.5,3.95,16.82.95,2.33,2.07,3.49,3.37,3.49.94,0,1.8-.32,2.59-.98l1.16,1.83c-2.01,1.57-3.82,2.35-5.43,2.35-2.28,0-3.91-1.17-4.88-3.51-.98-2.34-2.34-8.63-4.09-18.88h-.18c-3.46,7.02-6.84,14.32-10.16,21.9H0v-1.49Z"
                style={{ strokeWidth: "0px" }}
              />
              <path
                d="m40.35,44.14l-8.51-24.58-6.74,16.44c-.69,1.68-1.03,2.98-1.03,3.91l-3.45-2.17,10.53-23.95h3.65l10.22,30.35h-4.68Z"
                style={{ fill: "none", stroke: "#000", strokeWidth: "1.25px" }}
              />
              <g>
                <polyline
                  points="66.94 44.14 47.03 44.14 36.81 13.8 52.81 13.8"
                  style={{
                    fill: "none",
                    stroke: "#000",
                    strokeWidth: "1.25px",
                  }}
                />
                <line
                  x1="40.99"
                  y1="26.21"
                  x2="52.77"
                  y2="26.21"
                  style={{
                    fill: "none",
                    stroke: "#000",
                    strokeWidth: "1.25px",
                  }}
                />
              </g>
            </g>
          </svg>
        </Link>
      </div>

      {/* Links al centro in modalità desktop */}
      <div className="hidden lg:flex justify-between items-center flex-grow px-10 py-6 border-r border-violet">
        <Link href="/about">
          <p>About Me</p>
        </Link>
        <Link href="/projects">
          <p>Projects</p>
        </Link>
        <Link href="/contacts">
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
        <div className="absolute top-full left-0 w-full bg-space border border-violet lg:hidden z-10">
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
      <div className="flex justify-end flex-grow px-4 py-6 border-l border-violet lg:border-l lg:border-violet">
        <Link
          href="https://github.com/Massolinii"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-1 box-border border rounded-full border-violet"
        >
          GitHub
        </Link>
      </div>
    </nav>
  );
}
