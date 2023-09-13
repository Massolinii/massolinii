import HomeButton from "@/components/HomeButton";

export default function Page() {
  return (
    <section className="container mx-auto p-4 flex flex-col">
      <h2 className="mx-auto text-center text-4xl mt-3 mb-12">Contacts</h2>
      <div className="flex flex-col lg:flex-row justify-center items-center">
        <div className="flex flex-row w-[300px] py-2 my-4 me-1 bg-primary border-t-4 border-b-8 rounded-3xl border-primary-border justify-center items-center hover:bg-blue-800">
          <a
            href="https://www.linkedin.com/in/massimiliano-esposito/"
            className="hover:underline pe-5"
          >
            Add me on LinkedIn
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="50"
            height="50"
            viewBox="0 0 48 48"
          >
            <path
              fill="#0078d4"
              d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"
            ></path>
            <path
              d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z"
              opacity=".05"
            ></path>
            <path
              d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z"
              opacity=".07"
            ></path>
            <path
              fill="#fff"
              d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"
            ></path>
          </svg>
        </div>
        <div className="flex flex-row w-[300px] py-2 my-4 ms-1 bg-primary border-t-4 border-b-8 rounded-3xl border-primary-border justify-center items-center hover:bg-zinc-600">
          <a
            href="https://www.linkedin.com/in/massimiliano-esposito/"
            className="hover:underline pe-5"
          >
            Follow me on GitHub
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="50"
            height="50"
            viewBox="0 0 64 64"
          >
            <linearGradient
              id="KpzH_ttTMIjq8dhx1zD2pa_52539_gr1"
              x1="30.999"
              x2="30.999"
              y1="16"
              y2="55.342"
              gradientUnits="userSpaceOnUse"
              spreadMethod="reflect"
            >
              <stop offset="0" stop-color="#6dc7ff"></stop>
              <stop offset="1" stop-color="#e6abff"></stop>
            </linearGradient>
            <path
              fill="url(#KpzH_ttTMIjq8dhx1zD2pa_52539_gr1)"
              d="M25.008,56.007c-0.003-0.368-0.006-1.962-0.009-3.454l-0.003-1.55 c-6.729,0.915-8.358-3.78-8.376-3.83c-0.934-2.368-2.211-3.045-2.266-3.073l-0.124-0.072c-0.463-0.316-1.691-1.157-1.342-2.263 c0.315-0.997,1.536-1.1,2.091-1.082c3.074,0.215,4.63,2.978,4.694,3.095c1.569,2.689,3.964,2.411,5.509,1.844 c0.144-0.688,0.367-1.32,0.659-1.878C20.885,42.865,15.27,40.229,15.27,30.64c0-2.633,0.82-4.96,2.441-6.929 c-0.362-1.206-0.774-3.666,0.446-6.765l0.174-0.442l0.452-0.144c0.416-0.137,2.688-0.624,7.359,2.433 c1.928-0.494,3.969-0.749,6.074-0.759c2.115,0.01,4.158,0.265,6.09,0.759c4.667-3.058,6.934-2.565,7.351-2.433l0.451,0.145 l0.174,0.44c1.225,3.098,0.813,5.559,0.451,6.766c1.618,1.963,2.438,4.291,2.438,6.929c0,9.591-5.621,12.219-10.588,13.087 c0.563,1.065,0.868,2.402,0.868,3.878c0,1.683-0.007,7.204-0.015,8.402l-2-0.014c0.008-1.196,0.015-6.708,0.015-8.389 c0-2.442-0.943-3.522-1.35-3.874l-1.73-1.497l2.274-0.253c5.205-0.578,10.525-2.379,10.525-11.341c0-2.33-0.777-4.361-2.31-6.036 l-0.43-0.469l0.242-0.587c0.166-0.401,0.894-2.442-0.043-5.291c-0.758,0.045-2.568,0.402-5.584,2.447l-0.384,0.259l-0.445-0.123 c-1.863-0.518-3.938-0.796-6.001-0.806c-2.052,0.01-4.124,0.288-5.984,0.806l-0.445,0.123l-0.383-0.259 c-3.019-2.044-4.833-2.404-5.594-2.449c-0.935,2.851-0.206,4.892-0.04,5.293l0.242,0.587l-0.429,0.469 c-1.536,1.681-2.314,3.712-2.314,6.036c0,8.958,5.31,10.77,10.504,11.361l2.252,0.256l-1.708,1.49 c-0.372,0.325-1.03,1.112-1.254,2.727l-0.075,0.549l-0.506,0.227c-1.321,0.592-5.839,2.162-8.548-2.485 c-0.015-0.025-0.544-0.945-1.502-1.557c0.646,0.639,1.433,1.673,2.068,3.287c0.066,0.19,1.357,3.622,7.28,2.339l1.206-0.262 l0.012,3.978c0.003,1.487,0.006,3.076,0.009,3.444L25.008,56.007z"
            ></path>
            <linearGradient
              id="KpzH_ttTMIjq8dhx1zD2pb_52539_gr2"
              x1="32"
              x2="32"
              y1="5"
              y2="59.167"
              gradientUnits="userSpaceOnUse"
              spreadMethod="reflect"
            >
              <stop offset="0" stop-color="#1a6dff"></stop>
              <stop offset="1" stop-color="#c822ff"></stop>
            </linearGradient>
            <path
              fill="url(#KpzH_ttTMIjq8dhx1zD2pb_52539_gr2)"
              d="M32,58C17.663,58,6,46.337,6,32S17.663,6,32,6s26,11.663,26,26S46.337,58,32,58z M32,8 C18.767,8,8,18.767,8,32s10.767,24,24,24s24-10.767,24-24S45.233,8,32,8z"
            ></path>
          </svg>
        </div>
      </div>
      <form className="container flex flex-col mx-auto my-4 p-6 rounded-3xl shadow-lg w-full md:w-4/5 lg:w-3/5 bg-primary border-t-4 border-b-8 rounded-3xl border-primary-border">
        <h1 className="text-center text-2xl font-semibold mb-4">
          Let&apos;s get in touch!
        </h1>

        <div className="flex flex-col mb-4">
          <label htmlFor="frm-email" className="mb-2">
            Email
          </label>
          <input
            id="frm-email"
            type="email"
            name="email"
            autoComplete="email"
            required
            className="p-2 rounded border border-gray-600 bg-blue-100"
          />
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="frm-phone" className="mb-2">
            Phone <span className="text-xs text-slate-500">(not required)</span>
          </label>
          <input
            id="frm-phone"
            type="text"
            name="phone"
            autoComplete="tel"
            required
            className="p-2 rounded border border-gray-600 bg-blue-100"
          />
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="frm-message" className="mb-2">
            Message
          </label>
          <textarea
            id="frm-message"
            name="message"
            className="resize-none p-2 rounded border border-gray-600 bg-blue-100"
          ></textarea>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="p-2 w-1/4 border-2 border-primary-border bg-primary-transparency hover:bg-violet-950 rounded text-xl"
          >
            Submit
          </button>
        </div>
      </form>
      <HomeButton />
    </section>
  );
}
