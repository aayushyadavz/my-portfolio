import { ABOUT_IMG_URL } from "../utils/constants";

const About = () => {
  return (
    <section
      className="relative md:bg-aboutBg rounded-2xl md:p-[73px] mt-32 z-1 mx-[10%]"
      id="about"
    >
      <h2 className="text-colorText text-4xl font-bold tracking-custom uppercase">
        About
      </h2>
      <div className="flex flex-col md:flex-row items-center">
        <img
          src={ABOUT_IMG_URL}
          alt="Image of me"
          className="w-[40%] hidden md:block floating-animation"
        />
        <ul className="text-colorText flex flex-col gap-12 mt-7 md:mt-0">
          <li className="flex flex-row items-center rounded-[20px] px-0 py-6 md:p-6 about-gradient bg-no-repeat">
            <img src="/assets/site-icon.png" alt="Site icon" />
            <div>
              <h3 className="text-2xl font-semibold">Frontend Developer</h3>
              <p className="text-2xl">
                I'm a frontend developer with experience in building responsive
                and optimized sites.
              </p>
            </div>
          </li>
          <li className="flex flex-row items-center rounded-[20px] px-0 py-6 md:p-6 about-gradient bg-no-repeat">
            <img src="/assets/cursor-icon.png" alt="Cursor icon" />
            <div>
              <h3 className="text-2xl font-semibold">About Me</h3>
              <p className="text-2xl">
                I'm Ayush Yadav, a skilled Frontend Developer with over 1 year
                of experience building modern, user-focused websites. My journey
                began in March 2024 when I discovered my passion for creating
                impactful digital experiences. Currently pursuing a BCA, I
                specialize in crafting sleek designs and implementing seamless
                functionalities to bring your vision to life. Let's create
                exceptional solutions together!
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
