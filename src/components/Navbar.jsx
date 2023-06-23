import { Link } from 'react-router-dom';
import images from '../data/images';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';
import MobileNavbar from './MobileNavbar';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="flex justify-between md:justify-around items-center p-5 md:px-8 md:py-6 border-b-highlightGrey border-[1px]">
      <div>
        <Link to={'/'}>
          <img
            className="xl:w-[180px]"
            src={images.littleLemonLogo}
            alt="Litte Lemon Logo"
          />
        </Link>
      </div>

      {/* Mobile Menu */}
      {toggleMenu && <MobileNavbar setToggleMenu={setToggleMenu} />}

      {/* Desktop Menu */}
      <div className="hidden md:block">
        <ul className="flex text-2xl space-x-4 lg:space-x-14  text-primaryGreen font-bold font-markazi ">
          <li className="hover:text-lightOrange">
            <Link to={'/'}>Home</Link>
          </li>
          <li className="hover:text-lightOrange">
            <Link to={'/about'}>About</Link>
          </li>
          <li className="hover:text-lightOrange">
            <Link to={'/menu'}>Menu</Link>
          </li>
          <li className="hover:text-lightOrange">
            <Link to={'/reservation'}>Reservation</Link>
          </li>
          <li className="hover:text-lightOrange">
            <Link to={'/orderonline'}>Order Online</Link>
          </li>
          <li className="hover:text-lightOrange">
            <Link to={'/login'}>Log In</Link>
          </li>
        </ul>
      </div>
      <GiHamburgerMenu
        className="md:hidden"
        onClick={() => setToggleMenu(true)}
        size={'1.5rem'}
        aria-label="Open Menu"
      />
    </nav>
  );
};

export default Navbar;
