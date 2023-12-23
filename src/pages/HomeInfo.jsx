import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from "react";
import Typed from "typed.js";
import { gsap, Linear } from "gsap";
import Profiles from './Profiles'
import { TYPED_STRINGS } from "../constants";

const HomeInfo = ({ text, link, btnText }) => {
    const [lottie, setLottie] = useState();
  
    const typedEl = useRef(null);
    const targetSection = useRef(null);
    const lottieRef = useRef(null);
  
    const options = {
      strings: TYPED_STRINGS,
      typeSpeed: 50,
      startDelay: 1500,
      backSpeed: 50,
      backDelay: 8000,
      loop: true,
    };
  
    useEffect(() => {
      const typed = new Typed(typedEl.current, options);
  
      return () => typed.destroy();
    }, [typedEl]);

  return (
    <div className='absolute text-darkTeal-500 text-center flex flex-col px-8 z-10 xs:pt-16 xs:mt-96 sm:pt-60 sm:mt-96 lg:mt-80 xl:mt-32 md:mt-30'>
      <h1 className='xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl sm:leading-snug mx-5'>
         Hi, I am <span className='font-semibold'>Roshini Swetha</span>
        <br /><span ref={typedEl}>A Pragmatic Frontend Developer</span>
      </h1>
      <div className="seq">
          <Profiles />
        </div>
      <div className="seq pt-2">
          <Link to="/contact" className="text-burgendy-500 text-lg">
            Let&apos;s Talk
          </Link>
        </div>
        {/* </section> */}
    </div>
  )
};

export default HomeInfo;
