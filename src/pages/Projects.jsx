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
    <>
    <a
      href={url}
      className={'overflow-hidden rounded-3xl flex items-center mx-auto shadow-2xl bg-white xs:w-auto md:w-fit'}
      ref={projectCard}
      target="_blank"
      rel="noreferrer"
    >
      <div
        className={`h-[20rem] w-[28rem] bg-white projectTile rounded-3xl relative p-6 flex flex-col justify-between max-w-full`}
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
    <h2 className="text-3xl flex justify-center items-center mt-8 ">{name}
                  <Link
                    to={codeLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='btn tracking-widest text-gray-light-1 ml-8'
                  >
                    View Code
                  </Link>
    </h2>

      <p className="lg:mx-96 my-5 lg:text-3xl md:text-2xl xs:text-xl mx-auto">{description} </p>
     <div className="flex items-center justify-center mb-10">
            {tech.map((el, i) => (
              <img
                className="ml-12"
                src={`/skills/${el}.svg`}
                alt={el}
                height={45}
                width={45}
                key={el}
              />
            ))}
          </div>
          </>
  );
};

export default Projects;