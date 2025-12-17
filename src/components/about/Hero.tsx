import Hero from "../../assets/hero-about2.svg";
import Hero1 from "../../assets/deloai_hero_img.svg";

export default function AboutHero() {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-[80%] mt-12 min-h-[60vh] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div className="space-y-6  w-full md:w-[70%]">
          <p className="text-sm text-gray-500 uppercase tracking-wide">About us</p>
          <h1 className="text-3xl md:text-5xl font-semibold text-gray-900 leading-[1.4]">
            Committed to{" "}
            <span className="relative leading-[1.3] inline-block pr-8 md:pr-14 lg:pr-18">
              product
              <svg
                className="absolute text-gray-900 w-[148px] md:w-[200px] lg:w-[234px] left-[12px] md:left-[14px] lg:left-[16px] bottom-0"
                aria-hidden="true"
                role="presentation"
                viewBox="0 0 234 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 49.0002C73.5 42.5 124.122 46.8973 194 46.0213C203.039 45.9079 211.977 45.8009 220.738 45.7019C224.416 45.6603 227.605 43.1171 228.392 39.5237C230.617 29.3522 231.899 21.1331 233.136 9.61121C233.634 4.97336 230.012 0.930048 225.348 0.886412C218.522 0.822556 212.871 0.841352 205.947 0.915384C201.962 0.957978 198.629 3.94171 198.041 7.88253C196.615 17.4363 195.395 23.5389 194.724 39.5002M224.5 28.0806C218.455 28.3246 210.716 28.5231 203.72 28.0806C203.011 28.0357 202.357 28.4898 202.192 29.181C201.832 30.6799 201.686 31.8564 201.592 33.2745C201.532 34.1847 202.313 34.9222 203.222 34.8468C210.127 34.2737 214.733 34.4186 220.572 34.7175M218.572 4.50022H212.499C211.622 4.50022 210.88 5.14952 210.764 6.01893C210.624 7.06803 211.44 8.00022 212.499 8.00022H218.572C219.388 8.00022 220.096 7.43591 220.278 6.64016C220.528 5.54452 219.695 4.50022 218.572 4.50022Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            excellence and personal service
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed">
            Our mission is to put people first. We want to make communities that are
            fun, fast and effective.
          </p>
        </div>

        {/* Right Image (External SVG) */}
        <div className="flex justify-center items-center">
          <img
            src={Hero1}  // <-- change this path
            alt="Illustration"
            className="w-full max-w-md"
          />
        </div>

      </div>
    </section>
  );
}
