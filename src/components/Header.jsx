import { NavLink } from 'react-router-dom'
import { home } from '../assets/icons';


const Header = () => {
  return (
    <header className='header'>
      <NavLink
        to='/'
        className='w-10 h-10 rounded-lg items-center justify-center flex'
      >
        <img src={home} />
        {/* <p className='blue-gradient_text'>RK</p> */}
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink
          to='/about'
          className={({ isActive }) =>
            isActive ? 'text-teal-500' : 'text-darkTeal-500'
          }
        >
          About
        </NavLink>
        <NavLink
          to='/experience'
          className={({ isActive }) =>
            isActive ? 'text-teal-500' : 'text-darkTeal-500'
          }
        >
          Work
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
      </nav>
    </header>
  );
}

export default Header