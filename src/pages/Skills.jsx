import { useEffect, useRef } from "react";
// import Image from "next/image";
import { SKILLS } from "../constants";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Skills = () => {
  const targetSection = useRef(null);

  useEffect(() => {
    const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    revealTl.from(
      targetSection.current.querySelectorAll(".seq"),
      { opacity: 0, duration: 0.5, stagger: 0.5 },
      "<"
    );
  }, [targetSection]);

  return (
    <div className="bg-gradient-to-bl from-indigo-200 via-red-200 to-yellow-100 min-h-screen flex justify-center items-center">
    <section
      className="w-full relative select-none mt-2 flex lg:flex-row flex-col max-container lg:items-center h-full"
      ref={targetSection}
    >
      <div className="text-darkTeal-500 section-container py-12 flex flex-col justify-center">
        <div className="flex flex-col skills-wrapper">
          <div className="flex flex-col">
            <p className="uppercase tracking-widest text-gray-light-1 seq">
              SKILLS
            </p>
            <h1 className="text-6xl mt-2 font-medium text-gradient w-fit seq">
              My Skills
            </h1>
            <h2 className="text-[1.65rem] font-medium md:max-w-lg w-full mt-2 seq text-justify">
              I like to take responsibility to craft aesthetic user experience
              using modern frontend architecture.{" "}
            </h2>
          </div>
          <div className="mt-10">
            <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4 seq">
              LANGUAGES AND TOOLS
            </h3>
            <div className="flex flex-wrap gap-6 transform-gpu seq">
              {SKILLS.languagesAndTools.map((skill) => (
                <img
                  key={skill}
                  src={`/skills/${skill}.svg`}
                  alt={skill}
                  width={50}
                  height={50}
                />
              ))}
            </div>
          </div>
          <div className="mt-10">
            <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4 seq">
              LIBRARIES AND FRAMEWORKS
            </h3>
            <div className="flex flex-wrap gap-6 transform-gpu seq">
              {SKILLS.librariesAndFrameworks.map((skill) => (
                <img
                  key={skill}
                  src={`/skills/${skill}.svg`}
                  alt={skill}
                  width={50}
                  height={50}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-wrap mt-10">
            <div>
              <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4 seq">
                Other
              </h3>
              <div className="flex flex-wrap gap-6 transform-gpu seq">
                {SKILLS.other.map((skill) => (
                  <img
                    key={skill}
                    src={`/skills/${skill}.svg`}
                    alt={skill}
                    width={50}
                    height={50}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Skills;
