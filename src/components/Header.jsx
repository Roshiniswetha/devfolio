import { NavLink } from 'react-router-dom'
import { home } from '../assets/icons';


const Header = () => {
  return (
    <header className='flex justify-between w-full top-0 z-50 select-non transition-all duration-300'>
      <NavLink
        to='/'
        className='w-10 h-10 rounded-lg items-center justify-center flex mt-4 pl-4'
      >
        <img src={home} />
      </NavLink>
      <nav className='flex flex-row mt-6 xs:gap-3 sm:gap-3 md:gap-3 lg:gap-5 xl:gap-5 font-medium pr-10 tracking-widest xl:text-lg lg:text-lg md:text-xs sm:text-xs xs:text-xs'>
        <NavLink
          to='/about'
          className={({ isActive }) =>
            isActive ? 'text-teal-500' : 'text-darkTeal-500'
          }
        >
          About
        </NavLink>
        <NavLink
          to='/projects'
          className={({ isActive }) =>
            isActive ? 'text-teal-500' : 'text-darkTeal-500'
          }
        >
          Project
        </NavLink>
        <NavLink
          to='/skills'
          className={({ isActive }) =>
            isActive ? 'text-teal-500' : 'text-darkTeal-500'
          }
        >
          Skills
        </NavLink>
        <NavLink
          to='/contact'
          className={({ isActive }) =>
            isActive ? 'text-teal-500' : 'text-darkTeal-500'
          }
        >
          Contact
        </NavLink>

        <NavLink
            className="text-darkTeal-50 flex font-medium"
            to={"/documents/Roshini_Swetha_Frontend_Resume.pdf"}
            target='_blank' rel='noopener noreferrer'
        >
            Resume <img className='inline w-1/2 h-1/2' src="/icons/link.svg"/>
        </NavLink>
      </nav>
    </header>
  );
}

export default Header