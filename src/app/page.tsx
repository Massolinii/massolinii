"use client";
import Eye from "@/components/eye/Eye";
import "../styles/Home.css";

export default function Home() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 h-full w-full">
      <div className="relative overlay overlay-red about-section home-section border border-space md:col-span-1 lg:col-span-1 flex justify-center items-center">
        About Me
      </div>
      <div className="grid grid-rows-2 md:col-span-1 lg:col-span-1">
        <div className="relative overlay overlay-white eye-section home-section border border-space flex justify-center items-center">
          <div className="eye-container flex justify-center items-center">
            <Eye />
          </div>
        </div>
        <div className="relative overlay overlay-yellow contact-section home-section border border-space flex justify-center items-center">
          Contact
        </div>
      </div>
      <div className="relative overlay overlay-green project-section home-section border border-space md:col-span-1 lg:col-span-1 flex justify-center items-center">
        Projects
      </div>
    </main>
  );
}
