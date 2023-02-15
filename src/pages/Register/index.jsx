import React from "react";
import { NavLink } from "react-router-dom";

export const Register = () => {
  return (
    <div className="mx-4">
      <div className="bg-gray-50 border border-gray-200 p-10 rounded max-w-lg mx-auto mt-24">
        <header className="text-center">
          <h2 className="text-2xl font-bold uppercase mb-1">Register</h2>
          <p className="mb-4">Create an account to post ads</p>
        </header>

        <form action="">
          <div className="mb-6">
            <label for="name" className="inline-block text-lg mb-2">
              Name
            </label>
            <input
              type="text"
              className="border border-gray-200 rounded p-2 w-full"
              name="name"
            />
          </div>

          <div className="mb-6">
            <label for="email" className="inline-block text-lg mb-2">
              Email
            </label>
            <input
              type="email"
              className="border border-gray-200 rounded p-2 w-full"
              name="email"
            />

            <p className="text-red-500 text-xs mt-1">
              Please enter a valid email
            </p>
          </div>

          <div className="mb-6">
            <label for="password" className="inline-block text-lg mb-2">
              Password
            </label>
            <input
              type="password"
              className="border border-gray-200 rounded p-2 w-full"
              name="password"
            />
          </div>

          <div className="mb-6">
            <label for="password2" className="inline-block text-lg mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              className="border border-gray-200 rounded p-2 w-full"
              name="password2"
            />
          </div>

          <div className="mb-6">
            <button
              type="submit"
              className="bg-laravel text-white bg-primary rounded py-2 px-4 hover:bg-black"
            >
              Sign Up
            </button>
          </div>

          <div className="mt-8">
            <p>
              Already have an account?
              <span className="text-laravel">
                <NavLink to="/login">Login</NavLink>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
