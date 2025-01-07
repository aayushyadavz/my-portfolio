import skills from "../data/skills.json";
import { LOGO_URL } from "../utils/constants";

const Skills = () => {
  return (
    <section className="text-colorText mt-20 mx-[5%] sm:mx-[10%]" id="skills">
      <h2 className="text-colorText text-4xl font-bold tracking-custom uppercase">
        Skills
      </h2>
      <div className="flex flex-row md:flex-row mt-7 sm:mt-5 justify-center">
        <div className="w-full md:w-5/6 flex flex-wrap justify-start sm:justify-center gap-5 sm:gap-9">
          {skills.map((skill, id) => {
            return (
              <div key={id} className="flex flex-col items-center gap-3">
                <div className="bg-colorSecondary rounded-full flex items-center justify-center w-[110px] h-[110px] sm:w-[120px] sm:h-[120px] shadow-xl transition hover:scale-110 duration-150">
                  <img
                    className="w-[65px] sm:w-[75px]"
                    src={LOGO_URL + skill.imageSrc}
                    alt={skill.name}
                  />
                </div>
                <p className="font-roboto text-lg sm:text-2xl font-medium">
                  {skill.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
