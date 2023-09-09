import React from "react";
import Link from "next/link";

import "../../styles/navbar.css";

export default function Navbar() {
  return (
    <nav className="flex w-full bg-violet-dark sticky top-0 border-b border-violet">
      {/* Logo a sinistra */}
      <div className="flex-grow px-4 py-6 box-border">
        <Link href="/">
          <p>Logo</p>
        </Link>
      </div>

      {/* Links al centro */}
      <div className="flex justify-between items-center flex-grow px-10 py-6 box-border border-l border-violet">
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

      {/* Link GitHub a destra */}
      <div className="flex justify-end flex-grow px-4 py-6 box-border border-l border-violet">
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
