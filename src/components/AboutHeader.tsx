import Link from "next/link";

export default function AboutHeader() {
  return (
    <div className="flex-1 flex flex-col justify-center items-center lg:items-start mb-5 lg:mb-0">
      <h2 className="text-3xl md:text-5xl my-2 lg:mb-4 text-center lg:text-left">
        Hi there! <br /> I am Massimiliano Esposito
      </h2>
      <h3 className="text-1xl md:text-3xl mb-2 lg:mb-4 text-center lg:text-left">
        A junior full-stack programmer
      </h3>
      <p className="text-md md:text-lg mb-2 lg:mb-4 text-center lg:text-left">
        Also, an enthusiastic individial, with a knack for embracing new
        challenges, balancing creativity with analytical rigor.
        <br /> <br />
        Building the web one line at the time.
      </p>
      <Link
        href="https://drive.google.com/file/d/14LsP3nY5Oq9XC5aFhhceKED9wxyEaIpT/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-primary border-x-8 border-y-2 border-primary-border text-white py-2 px-4 rounded hover:bg-primary-transparency text-center"
      >
        Check my resume
      </Link>
    </div>
  );
}
