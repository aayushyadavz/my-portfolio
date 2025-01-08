const About = () => {
  return (
    <section
      className="relative md:bg-aboutBg rounded-2xl md:p-[73px] mt-32 z-1 mx-[5%] sm:mx-[10%]"
      id="about"
    >
      <h2 className="text-colorText text-4xl font-bold tracking-custom uppercase">
        About
      </h2>
      <div className="flex flex-col md:flex-row items-center">
        <ul className="text-colorText flex flex-col gap-9 mt-7 md:mt-5">
          <li className="flex flex-row items-start sm:items-center rounded-[20px] px-0 py-6 md:p-6 about-gradient bg-no-repeat gap-2">
            <img src="/assets/site-icon.png" alt="Site icon" />
            <div>
              <h3 className="text-2xl font-semibold mb-1">
                Frontend Developer
              </h3>
              <p className="text-lg sm:text-2xl">
                I'm a frontend developer with experience in building responsive
                and optimized sites.
              </p>
            </div>
          </li>
          <li className="flex flex-row items-start sm:items-center rounded-[20px] px-0 py-6 md:p-6 about-gradient bg-no-repeat gap-2">
            <img src="/assets/cursor-icon.png" alt="Cursor icon" />
            <div>
              <h3 className="text-2xl font-semibold mb-1">About Me</h3>
              <p className="text-lg sm:text-2xl">
                I'm{" "}
                <span className="font-playwrite sm:text-lg font-semibold">
                  Ayush Yadav
                </span>
                , a skilled Frontend Developer with over 1 year of experience
                building modern, user-focused websites. My journey began in
                March 2024 when I discovered my passion for creating impactful
                digital experiences. Currently pursuing a BCA, I specialize in
                crafting sleek designs and implementing seamless functionalities
                to bring your vision to life. Let's create exceptional solutions
                together!
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
