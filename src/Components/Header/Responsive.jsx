import { IoClose } from 'react-icons/io5';
import { NavLink } from 'react-router';
import NavItems from '../Header/NavItems';
const Responsive = ({ showBars, setShowBars }) => {
  return (
    <div
      className={`min-w-[320px] h-full bg-black/70  px-6 py-18 fixed top-0 right-0 z-50 lg:hidden transition-all duration-300 ${
        showBars ? 'translate-x-0' : 'translate-x-full'
      }
      `}
    >
      {/* close icons  */}

      <IoClose
        onClick={() => setShowBars(false)}
        className="text-3xl text-white absolute left-5 top-5 cursor-pointer "
      />

      {/* Menu  */}
      <ul className="flex flex-col gap-y-5">
        {NavItems.map(item => (
          <li key={item.id}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `text-xl font-normal font-playFair duration-300 ${
                  isActive
                    ? 'text-secondary border border-secondary rounded px-5 py-3'
                    : 'text-primary hover:text-secondary'
                }`
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Responsive;
