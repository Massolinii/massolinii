import Link from "next/link";

export default function AboutHeader() {
  return (
    <div className="flex-1 flex flex-col justify-center items-center lg:items-start ms-2 mb-5 lg:mb-0">
      <h1 className="text-4xl md:text-6xl my-2 lg:mb-4 text-center lg:text-left">
        Hi, I am Massimiliano Esposito
      </h1>
      <h2 className="text-2xl mb-2 lg:mb-4 text-center lg:text-left">
        A full-stack programmer
      </h2>
      <p className="text-lg mb-2 lg:mb-4 text-center lg:text-left">
        I am a very funny guy and this is a placeholder for bla
        blalgjfgkfgkldsfk djfsdkfjfjdsklfjsdfjsdiok ifjdsidfjipj
      </p>
      <Link
        href=""
        className="bg-violet text-white py-2 px-4 rounded hover:bg-violet-border text-center"
      >
        Check my resume
      </Link>
    </div>
  );
}
