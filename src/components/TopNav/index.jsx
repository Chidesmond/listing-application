import { Gumtree } from "../../assets/svg";
import { useMutation } from "@tanstack/react-query";
import { NavLink, useNavigate } from "react-router-dom";
import { useStateContext } from "../../contexts/contextProvider";
import { logOut } from "../../api/listings.api";

export const TopNav = () => {
  const { isAuthenticated, setAuthorizationToken } = useStateContext();

  const mutation = useMutation(() => {
    return logOut();
  });

  const navigate = useNavigate();

  const handleLogOut = () => {
    mutation.mutate();
    setAuthorizationToken({ authUser: null, authToken: null });
    navigate("/");
  };

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
            <a
              className="hover:text-[#000000] text-white outline-none"
              onClick={() => handleLogOut()}
            >
              <i className="fa-solid fa-arrow-right-to-bracket mr-2"></i>
              Log Out
            </a>
          </>
        )}
      </ul>
    </nav>
  );
};
