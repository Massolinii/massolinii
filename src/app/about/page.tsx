import Image from "next/image";
import Link from "next/link";
import "../../styles/About.css";

export default function Page() {
  return (
    <div className="container mx-auto mt-10 flex flex-col-reverse lg:flex-row bg-background">
      <div className="flex-1 flex flex-col justify-center items-center lg:items-start">
        <h1 className="text-4xl mb-2 lg:mb-4 text-center lg:text-left">
          Hi, I am Massimiliano Esposito
        </h1>
        <h2 className="text-3xl mb-2 lg:mb-4 text-center lg:text-left">
          I am a Full Stack Programmer
        </h2>
        <p className="text-lg mb-2 lg:mb-4 text-center lg:text-left">
          I am a very funny guy and this is a placeholder for bla
          blalgjfgkfgkldsfk djfsdkfjfjdsklfjsdfjsdiok ifjdsidfjipj
        </p>
        <Link
          href=""
          className="bg-violet text-white py-2 px-4 rounded hover:bg-floral text-center"
        >
          Download CV
        </Link>
      </div>
      <div className="flex-1 flex justify-center items-center mb-10 lg:mb-0">
        <div className="rounded-full overflow-hidden border-solid border-4 border-violet">
          <Image
            src="/massy_sorrisoscemo.jpg"
            alt="Massimiliano Esposito"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}
