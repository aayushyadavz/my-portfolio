import { HERO_IMG_URL } from "../utils/constants";

const Hero = () => {
  return (
    <section className="relative flex flex-col-reverse md:flex-row items-center justify-between mt-12 z-1 mx-[5%] sm:mx-[10%]">
      <div className="flex flex-col items-center md:items-start text-colorText z-1">
        <h1 className="text-5xl sm:text-7xl text-center font-black mt-6 sm:mt-0 mb-8 font-roboto">
          Hi, I'm Ayush
        </h1>
        <p className="text-2xl sm:text-3xl font-roboto mb-12">
          a Frontend React Developer building sleek and responsive web apps.
          Let's bring ideas to life with modern web technologies!
        </p>
        <div className="flex gap-4 flex-row items-center">
          <a
            href="mailto:ayushyadav24nov1234@gmail.com"
            className="bg-colorPrimary text-colorText rounded-[100px] text-xl sm:text-3xl font-semibold py-4 px-6 shadow-xl"
            target="_blank"
          >
            Contact Me
          </a>
          <a
            href=""
            className="bg-colorPrimary text-colorText rounded-[100px] text-xl sm:text-3xl font-semibold py-4 px-6 shadow-xl"
            target="_blank"
          >
            Resume
          </a>
        </div>
      </div>
      <img
        src={HERO_IMG_URL}
        alt="Hero image of me"
        className="w-3/5 sm:w-1/2 z-1 floating-animation"
      />
      <div className="topBlur" />
      <div className="bottomBlur" />
    </section>
  );
};

export default Hero;
