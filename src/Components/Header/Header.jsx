import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import NavItems from '../Header/NavItems';
import Button from '../common/Button';

const Header = () => {
  const [showBars, setShowBars] = useState(false)
  return (
    <nav className="py-6 bg-white shadow-md left-0 right-0 z-50">
      <div className="max-w-11/12 mx-auto flex justify-between items-center">
        {/* Brand / Logo */}
        <Link
          to="/"
          className="text-2xl sm:text-3xl font-workSans font-bold text-primary"
        >
          Book Vibe
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6">
          {NavItems.map(item => (
            <li key={item.id}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `text-lg font-playFair duration-300 ${
                    isActive
                      ? 'text-secondary border border-secondary rounded px-4 py-2'
                      : 'text-primary hover:text-secondary'
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Button text="Sign In" />
          <Button text="Sign Up" />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setShowBars(!showBars)}
          className="md:hidden text-primary text-2xl"
        >
          {showBars ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {showBars && (
        <div className="md:hidden bg-white border-t mt-4 py-4 shadow-inner">
          <ul className="flex flex-col items-center gap-4">
            {NavItems.map(item => (
              <li key={item.id}>
                <NavLink
                  to={item.path}
                  onClick={() => setShowBars(false)} // close menu after click
                  className={({ isActive }) =>
                    `text-lg font-playFair duration-300 ${
                      isActive
                        ? 'text-secondary border border-secondary rounded px-4 py-2'
                        : 'text-primary hover:text-secondary'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex flex-col items-center gap-3 mt-4">
            <Button text="Sign In"/>
            <Button text="Sign Up"/>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header