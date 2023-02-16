import { NavLink } from "react-router-dom";

export const Login = () => {
  return (
    <div className="mx-4">
      <div className="bg-gray-50 border border-gray-200 p-10 rounded max-w-lg mx-auto mt-24">
        <header className="text-center">
          <h2 className="text-2xl font-bold uppercase mb-1">Log In</h2>
          <p className="mb-4">Log in to post ads</p>
        </header>

        <form action="">
          <div className="mb-6">
            <label htmlFor="email" className="inline-block text-lg mb-2">
              Email
            </label>
            <input
              type="email"
              className="border border-gray-200 rounded p-2 w-full"
              name="email"
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
