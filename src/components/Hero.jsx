import { HERO_IMG_URL } from "../utils/constants";

const Hero = () => {
  return (
    <section className="relative flex flex-col-reverse md:flex-row items-center justify-between mt-12 z-1 mx-[10%]">
      <div className="flex flex-col items-center md:items-start text-colorText z-1">
        <h1 className="text-7xl font-black mb-8 font-roboto">Hi, I'm Ayush</h1>
        <p className="text-3xl font-roboto mb-12">
          a Frontend React Developer building sleek and responsive web apps.
          Let's bring ideas to life with modern web technologies!
        </p>
        <a
          href="mailto:ayushyadav24nov1234@gmail.com"
          className="bg-colorPrimary text-colorText rounded-[100px] text-3xl font-semibold py-4 px-6 shadow-lg"
          target="_blank"
        >
          Contact Me
        </a>
      </div>
      <img
        src={HERO_IMG_URL}
        alt="Hero image of me"
        className="w-1/2 z-1 floating-animation"
      />
      <div className="topBlur" />
      <div className="bottomBlur" />
    </section>
  );
};

export default Hero;
