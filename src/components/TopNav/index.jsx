import { Add, Gumtree, GumTreeII } from "../../assets/svg";
import { Search } from "../index";

import { Route, NavLink } from "react-router-dom";
import { Landing } from "../../pages/index";

export const TopNav = () => {
  return (
    <nav className="flex justify-between items-center mb-4 bg-primary">
      <NavLink to="/">
        <div className="ml-6 my-3 outline-none">
          <Gumtree />
        </div>
      </NavLink>
      <ul className="flex space-x-6 mr-6 text-lg">
        <li>
          <NavLink
            to="/register"
            className="hover:text-[#000000] text-white outline-none"
          >
            <i className="fa-solid fa-user-plus mr-2"></i> Register
          </NavLink>
        </li>
        <li>
          <NavLink
            href="/login"
            className="hover:text-[#000000] text-white outline-none"
          >
            <i className="fa-solid fa-arrow-right-to-bracket mr-2"></i>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

// <img className="w-24" src="images/gumtree.svg" alt="" class="logo" />
