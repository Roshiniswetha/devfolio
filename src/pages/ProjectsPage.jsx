import { useEffect, useRef } from "react";
import { PROJECTS } from "../constants";
import { gsap, Linear } from "gsap";
import Projects from "./Projects";

const ProjectsPage = ({ isDesktop, clientHeight }) => {
  const targetSection = useRef(null);
  const sectionTitle = useRef(null);

  useEffect(() => {
    let projectsScrollTrigger;
    let projectsTimeline;

    if (isDesktop) {
      [projectsTimeline, projectsScrollTrigger] = getProjectsSt();
    } else {
      const projectWrapper =
        targetSection.current.querySelector(".project-wrapper");
      projectWrapper.style.width = "calc(100vw - 1rem)";
      projectWrapper.style.overflowX = "scroll";
    }

    const [revealTimeline, revealScrollTrigger] = getRevealSt();

    return () => {
      projectsScrollTrigger && projectsScrollTrigger.kill();
      projectsTimeline && projectsTimeline.kill();
      revealScrollTrigger && revealScrollTrigger.kill();
      revealTimeline && revealTimeline.progress(1);
    };
  }, [targetSection, sectionTitle, isDesktop]);

  const getRevealSt = () => {
    const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    revealTl.from(
      targetSection.current.querySelectorAll(".seq"),
      { opacity: 0, duration: 0.5, stagger: 0.5 },
      "<"
    );

    return [revealTl];
  };

  const getProjectsSt = () => {
    const timeline = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    const sidePadding =
      document.body.clientWidth -
      targetSection.current.querySelector(".inner-container").clientWidth;
    const elementWidth =
      sidePadding +
      targetSection.current.querySelector(".project-wrapper").clientWidth;
    targetSection.current.style.width = `${elementWidth}px`;
    const width = window.innerWidth - elementWidth;
    const duration = `${(elementWidth / window.innerHeight) * 100}%`;
    timeline
      .to(targetSection.current, { x: width })
      .to(sectionTitle.current, { x: -width }, "<");

    return [timeline];
  };

  return (
    <section
      ref={targetSection}
      className= "text-darkTeal-500 min-h-screen w-full relative select-none section-container transform-gpu flex lg:flex-row flex-col"
    >
      <div className="flex flex-col items-center justify-center h-full mt-24">
        <div
          className="flex flex-col inner-container transform-gpu"
          ref={sectionTitle}
        >
          <h2 className="text-darkTeal-500 lg:text-6xl md:text-4xl xs:text-3xl mt-2 font-medium w-fit seq">
            My Projects
          </h2>
          <h2 className="text-darkTeal-500 lg:text-4xl md:text-2xl xs:text-xl font-medium mt-2 seq">
            Some things I&apos;ve built with love, expertise and a pinch of
            magical ingredients.{" "}
          </h2>
        </div>
        <div
          className={`${
            clientHeight > 650 ? "mt-12" : "mt-8"
          } flex flex-col project-wrapper w-full seq`}
        >
          {PROJECTS.map((project, index) => (
            <Projects
              classes={
                index === PROJECTS.length - 1 ? "" : "mr-10 xs:mr-12 sm:mr-16"
              }
              project={project}
              key={project.name}
            />
          ))}
        </div>
      </div>
      <style jsx global>{`
        .project-wrapper::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default ProjectsPage;
