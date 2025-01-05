import projects from "../data/projects.json";

const Projects = () => {
  return (
    <section className="mt-[76px] text-colorText mx-[10%]" id="projects">
      <h2 className="text-4xl font-bold uppercase tracking-custom">Projects</h2>
      <div className="mt-9 flex flex-row flex-wrap items-center justify-center gap-4 w-full">
        {projects.map((project, id) => {
          return (
            <div
              key={id}
              className="flex flex-col rounded-xl shadow-lg py-4 px-6 max-w-[345px] project-gradient"
            >
              <img
                src={project.imageSrc}
                alt={project.title}
                className="mb-6"
              />
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="mt-[6px] text-2xl font-normal">
                {project.description}
              </p>
              <ul className="w-full mt-3 flex flex-row flex-wrap gap-[6px]">
                {project.skills.map((skill, id) => (
                  <li
                    key={id}
                    className="text-2xl font-normal rounded-[100px] bg-colorDark py-1 px-5"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
              <div className="w-full mt-6 flex justify-around">
                <a
                  href={project.demo}
                  className="text-colorText text-3xl font-light rounded-[100px] bg-colorPrimary py-[1px] px-5"
                >
                  Demo
                </a>
                <a
                  href={project.source}
                  className="text-colorText text-3xl font-light rounded-[100px] bg-colorPrimary py-[1px] px-5"
                >
                  Source
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
