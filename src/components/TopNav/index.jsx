import { Add, Gumtree, GumTreeII } from "../../assets/svg";

import { NavLink } from "react-router-dom";
import { useStateContext } from "../../contexts/contextProvider";

export const TopNav = () => {
  const { isAuthenticated } = useStateContext();
  console.log({ isAuthenticated });
  return (
    <nav className="flex justify-between items-center mb-4 bg-primary">
      <NavLink to="/">
        <div className="ml-6 my-3 outline-none">
          <Gumtree />
        </div>
      </NavLink>
      <ul className="flex space-x-6 mr-6 text-lg">
        {!isAuthenticated ? (
          <>
            <li>
              <NavLink
                to="/register"
                className="hover:text-[#0b0606] text-white outline-none"
              >
                <i className="fa-solid fa-user-plus mr-2"></i> Register
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className="hover:text-[#000000] text-white outline-none"
              >
                <i className="fa-solid fa-arrow-right-to-bracket mr-2"></i>
                Login
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink
                to="/login"
                className="hover:text-[#000000] text-white outline-none"
              >
                <i className="fa-solid fa-arrow-right-to-bracket mr-2"></i>
                Log Out
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
