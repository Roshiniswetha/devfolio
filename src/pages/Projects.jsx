import { useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import VanillaTilt from "vanilla-tilt";

const Projects = ({ project, classes, isDesktop }) => {
  const { name, image, description, url, tech, codeLink } = project;
  const projectCard = useRef(null);
  let additionalClasses = "";
  if (classes) {
    additionalClasses = classes;
  }

  const options = {
    max: 10,
    speed: 400,
    glare: true,
    "max-glare": 0.2,
    gyroscope: false,
  };

  useEffect(() => {
    VanillaTilt.init(projectCard.current, options);
  }, [projectCard]);

  return (
    <div className='ml-16'>
    <a
      href={url}
      className={`overflow-hidden rounded-3xl flex shadow-2xl ${additionalClasses}`}
      ref={projectCard}
      target="_blank"
      rel="noreferrer"
      style={{
        maxWidth: isDesktop ? "calc(100vw - 2rem)" : "calc(100vw - 4rem)",
        flex: "1 0 auto",
        WebkitMaskImage: "-webkit-radial-gradient(white, black)",
      }}
    >
      <div
        className={`h-[25rem] w-[38rem] bg-white projectTile rounded-3xl relative p-6 flex flex-col justify-between max-w-full`}
      >
        <img
          src="/project-bg.svg"
          alt="project"
          className="absolute w-full h-full top-0 left-0 object-cover opacity-30"
        />
        <img
          placeholder="blur"
          src={image}
          alt={name}
          layout="fill"
          className='projectImage z-0'
        />
      </div>
    </a>
    <h2 className="text-3xl flex justify-center items-center mt-8">{name}
                  <Link
                    to={codeLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='btn tracking-widest text-gray-light-1 ml-8'
                  >
                    View Code
                  </Link>
    </h2>

      <p className="text-lg mt-12 ml-12">{description} </p>
    {/* <div className="flex justify-around items-center mt-12"></div> */}
     <div className="flex items-center mt-12 mb-10">
            {tech.map((el, i) => (
              <img
                className="ml-16"
                src={`/skills/${el}.svg`}
                alt={el}
                height={45}
                width={45}
                key={el}
              />
            ))}
          </div>
          </div>
  );
};

export default Projects;