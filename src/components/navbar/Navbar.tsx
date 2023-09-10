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
          <p>Logo</p>
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
        >
          GitHub
        </Link>
      </div>
    </nav>
  );
}
