import { useEffect, useRef } from "react";
import { gsap, Linear } from "gsap";

function About() {
    const targetSection = useRef(null);

    useEffect(() => {
      const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
      revealTl.from(
        targetSection.current.querySelectorAll(".seq"),
        { opacity: 0, duration: 0.5, stagger: 0.5 },
        "<"
      );
  
      // ScrollTrigger.create({
      //   trigger: targetSection.current.querySelector(".skills-wrapper"),
      //   start: "100px bottom",
      //   end: `center center`,
      //   animation: revealTl,
      //   scrub: 0,
      // });
    }, [targetSection]);
  return (
    <div className="bg-gradient-to-br from-yellow-500 to-white min-h-screen flex justify-center items-center">
    <section
      className="w-full relative select-none mt-44"
    //   id={MENULINKS[1].ref}
      ref={targetSection}
    >
        <div className="text-darkTeal-500 m-10">
        <h1 className="text-6xl mt-2 font-medium text-gradient w-fit seq">About Me</h1>
        <p className="text-[1.65rem] font-medium md:max-w-lg w-full mt-2 seq">I am a developer based in Tamil Nadu, India focused on creating interactive and responsive web applications with 3+ years of professional experience. 
        
        My skills includes:</p>

        <h7>• Professional Experience in ReactJS Framework, Hooks and Redux libraries.</h7>
        • Working knowledge with Java-SpringBoot, SQLite, RESTful APIs, Firebase.
        • Working experience with third-party libraries, Payment Gateway like Stipe, and APIs.
        • Familiar with JIRA, Git (GitHub, Bitbucket, GitLab), and CI/CD pipeline(Teamcity).
        • Solid understanding of the full web app development life cycle.
        • Collaborating with UI and UX Designers, as well as Software Testers, to ensure that each app is presentable and in perfect working order.
        • Identify and correct bugs. Maintain quality and ensure responsiveness of applications.
        • Proofreading app code and correcting mistakes before each app is released.
        • Identify and correct bugs.
        • Maintain quality and ensure responsiveness of applications.
        </div>
        </section>
    </div>
  )
}

export default About