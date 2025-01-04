import skills from "../data/skills.json";
import { LOGO_URL } from "../utils/constants";

const Skills = () => {
  return (
    <section className="text-colorText mt-20 mx-[10%]" id="skills">
      <h2 className="text-colorText text-4xl font-bold tracking-custom uppercase">
        Skills
      </h2>
      <div className="flex flex-row md:flex-row mt-4 justify-center">
        <div className="w-full md:w-2/3 flex flex-wrap gap-9">
          {skills.map((skill, id) => {
            return (
              <div key={id} className="flex flex-col items-center gap-3">
                <div className="bg-colorSecondary rounded-full flex items-center justify-center w-[120px] h-[120px]">
                  <img
                    className="w-[75px]"
                    src={LOGO_URL + skill.imageSrc}
                    alt={skill.name}
                  />
                </div>
                <p className="font-roboto text-2xl font-medium">{skill.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
