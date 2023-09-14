import Link from "next/link";
import Image from "next/image";

const HomeButton = () => {
  return (
    <div className="flex justify-end my-12">
      <Link
        href="/"
        className="flex bg-primary p-2 rounded-lg border-2 border-primary-border"
      >
        <p className="ps-1 pt-1 pe-3">Go Home</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="30"
          height="30"
          viewBox="0 0 48 48"
        >
          <path
            fill="none"
            stroke="#e2e8f0"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="3"
            d="M13.4,13.8l-3.6,2.9c-1.4,1.1-2.3,2.9-2.3,4.7v18.1c0,1.1,0.9,2,2,2h20"
          ></path>
          <path
            fill="none"
            stroke="#e2e8f0"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="3"
            d="M35,41.5h3.5c1.1,0,2-0.9,2-2V21.4c0-1.8-0.8-3.6-2.3-4.7L24.6,6c-0.4-0.3-0.9-0.3-1.2,0l-4.6,3.6"
          ></path>
          <path
            fill="none"
            stroke="#e2e8f0"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="3"
            d="M18.5,35.7v-8.2c0-0.6,0.4-1,1-1h8.9c0.6,0,1,0.4,1,1v14"
          ></path>
        </svg>
      </Link>
    </div>
  );
};

export default HomeButton;
