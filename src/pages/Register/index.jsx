import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { register } from "../../api/api";

export const Register = () => {
  const navigate = useNavigate();

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();

  const mutation = useMutation({
    mutationFn: register,
  });

  const onSubmit = (e) => {
    e.preventDefault();

    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value,
    };

    mutation.mutate(payload, {
      onSuccess: (data) => {
        setAuthorizationToken({ authUser: data.user, authToken: data.token });
        navigate("/");
      },
    });
  };

  return (
    <div className="mx-4">
      <div className="bg-gray-50 border border-gray-200 p-10 rounded max-w-lg mx-auto mt-24">
        <header className="text-center">
          <h2 className="text-2xl font-bold uppercase mb-1">Register</h2>
          <p className="mb-4">Create an account to post ads</p>
        </header>

        <form onSubmit={onSubmit}>
          <div className="mb-6">
            <label htmlFor="name" className="inline-block text-lg mb-2">
              Name
            </label>
            <input
              type="text"
              className="border border-gray-200 rounded p-2 w-full"
              name="name"
              ref={nameRef}
            />
          </div>

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

            <p className="text-red-500 text-xs mt-1">
              Please enter a valid email
            </p>
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
            <label
              htmlFor="passwordConfirmation"
              className="inline-block text-lg mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              name="passwordConfirmation"
              className="border border-gray-200 rounded p-2 w-full"
              ref={passwordConfirmationRef}
            />
          </div>

          <div className="mb-6">
            <button
              type="submit"
              className="bg-secondary text-white bg-primary rounded py-2 px-4 hover:bg-black"
            >
              Sign Up
            </button>
          </div>

          <div className="mt-8">
            <p>
              Already have an account?
              <span className="text-secondary ml-2">
                <Link to="/login">Login</Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
