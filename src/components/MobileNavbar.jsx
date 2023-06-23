/* eslint-disable react/prop-types */
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { Link } from 'react-router-dom';

const MobileNavbar = ({ setToggleMenu }) => {
  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed top-0 left-0 w-full h-full bg-highlightGrey flex justify-center items-center slide-bottom ">
      <MdOutlineRestaurantMenu
        size={'2.5rem'}
        className="fixed top-5 right-5 text-lightOrange"
        onClick={() => setToggleMenu(false)}
        aria-label="Close Menu"
      />
      <ul
        role="menu"
        className="flex flex-col items-center justify-center  space-y-3 text-2xl md:text-3xl  text-primaryGreen font-bold font-markazi ">
        <li className="hover:text-lightOrange">
          <Link
            to={'/'}
            role="menuitem">
            Home
          </Link>
        </li>
        <li className="hover:text-lightOrange">
          <Link
            to={'/about'}
            role="menuitem">
            About
          </Link>
        </li>
        <li className="hover:text-lightOrange">
          <Link
            to={'/menu'}
            role="menuitem">
            Menu
          </Link>
        </li>
        <li className="hover:text-lightOrange">
          <Link
            to={'/reservation'}
            role="menuitem">
            Reservation
          </Link>
        </li>
        <li className="hover:text-lightOrange">
          <Link
            to={'/orderonline'}
            role="menuitem">
            Order Online
          </Link>
        </li>
        <li className="hover:text-lightOrange">
          <Link
            to={'/login'}
            role="menuitem">
            Log In
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileNavbar;
