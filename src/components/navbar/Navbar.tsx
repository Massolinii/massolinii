import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full h-20 bg-emerald-800 sticky top-0">
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo alla sinistra */}
          <div className="text-white">
            <Link href="/">
              <p>Logo</p>
            </Link>
          </div>

          {/* Links al centro */}
          <ul className="hidden md:flex gap-x-6 text-white">
            <li>
              <Link href="/about">
                <p>About Me</p>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <p>Projects</p>
              </Link>
            </li>
            <li>
              <Link href="/contacts">
                <p>Contacts</p>
              </Link>
            </li>
          </ul>

          {/* Link GitHub alla destra */}
          <div className="text-white">
            <Link
              href="https://github.com/Massolinii"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
