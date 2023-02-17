import { useMutation } from "@tanstack/react-query";
import { useRef, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { logIn } from "../../api/api";
import { useStateContext } from "../../contexts/contextProvider";
// import { StoreContext } from "../../contexts/ContextProvider";

export const Login = () => {
  const { setAuthorizationToken, token } = useStateContext();

  const navigate = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();

  const mutation = useMutation({
    mutationFn: logIn,
  });

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    mutation.mutate(payload, {
      onSuccess: async (data) => {
        setAuthorizationToken({ authUser: data.user, authToken: data.token });
        navigate("/");
        console.log({ state });
      },
    });
  };

  return (
    <div className="mx-4">
      <div className="bg-gray-50 border border-gray-200 p-10 rounded max-w-lg mx-auto mt-24">
        <header className="text-center">
          <h2 className="text-2xl font-bold uppercase mb-1">Log In</h2>
          <p className="mb-4">Log in to post ads</p>
        </header>

        <form onSubmit={handleOnSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="inline-block text-lg mb-2">
              Email
            </label>
            <input
              type="email"
              className="border border-gray-200 rounded p-2 w-full"
              name="email"
              ref={emailRef}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="inline-block text-lg mb-2">
              Password
            </label>
            <input
              type="password"
              className="border border-gray-200 rounded p-2 w-full"
              name="password"
              ref={passwordRef}
            />
          </div>

          <div className="mb-6">
            <button
              type="submit"
              className="bg-secondary text-white rounded py-2 px-4 hover:bg-black"
            >
              Sign In
            </button>
          </div>

          <div className="mt-8">
            <p>
              Don't have an account?
              <span className="text-secondary ml-2">
                <NavLink to="/register">Register</NavLink>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
