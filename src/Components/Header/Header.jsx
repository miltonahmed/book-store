import { Link, NavLink } from "react-router";
import NavItems from '../Header/NavItems';
import Button from '../common/Button';

const Header = () => {
  return (
    <nav className="py-14 bg-white">
      <div className=" max-w-11/12 mx-auto flex justify-between">
        <div>
          <Link className="text-3xl font-workSans font-bold text-primary">
            Book Vibe
          </Link>
        </div>

        <ul className="flex items-center  gap-4">
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
        <div className="flex items-center gap-4">
          <Button text="Sign In" />
          <Button text="Sign Up" />
        </div>
      </div>
    </nav>
  );
}

export default Header