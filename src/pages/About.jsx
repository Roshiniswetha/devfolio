import { useEffect, useRef } from "react";
import { gsap, Linear } from "gsap";
import { Link } from "react-router-dom";
import Experience from "./Experience";

function About() {
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
        <div className="text-darkTeal-500 m-10">
        <p className="uppercase tracking-widest seq">
              About
            </p>
            <h1 className="text-6xl mt-2 font-medium stext-gradient w-fit seq">
              A Little Bit about me
            </h1>
        <p className="text-[1.20rem] font-medium md:max-w-lg w-full mt-2 seq">
          Hello! I'm Roshini Swetha, a Frontend Developer based in Tamil Nadu, India.
          <br />
          I love being in the outdoors and I proudly wear the hat of a loving pet caretaker. </p>
        <br/>
        <p className="seq text-justify">I am focused on creating interactive and responsive web applications with 3+ years of professional experience.
        I've always had a love for technology and creating things, and building websites allows me to combine those two passions in the best way possible.</p>

       <br /> 
        <p className="seq">PS: I often showcase my learnings on 
          <Link to='https://twitter.com/Roshiniswetha' target='_blank'
                    rel='noopener noreferrer' className="text-burgendy-500 md:font-bold">Twitter.</Link>
          </p>
            <h1 className="text-6xl mt-16 font-medium stext-gradient w-fit seq">
              My Experiences
            </h1>
            <Experience />

        
        </div>
        </section>
    </div>
  )
}

export default About