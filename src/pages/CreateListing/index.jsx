import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createListing } from "../../api/api";
import { useMutation } from "@tanstack/react-query";

export const CreateListing = () => {
  const navigate = useNavigate();

  const titleRef = useRef();
  const emailRef = useRef();
  const slugRef = useRef();
  const priceRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const logoRef = useRef();

  const mutation = useMutation({
    mutationFn: createListing,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      title: titleRef.current.value,
      email: emailRef.current.value,
      slug: slugRef.current.value,
      price: priceRef.current.value,
      category: categoryRef.current.value,
      description: descriptionRef.current.value,
      logo: logoRef.current.value,
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
          <h2 className="text-2xl font-bold uppercase mb-1">Create an Ad</h2>
          <p className="mb-4">Post an ad to draw traction</p>
        </header>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="title" className="inline-block text-lg mb-2">
              Title
            </label>
            <input
              type="text"
              className="border border-gray-200 rounded p-2 w-full"
              name="title"
              placeholder="Enter Title..."
              ref={titleRef}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="slug" className="inline-block text-lg mb-2">
              Slug
            </label>
            <input
              type="text"
              className="border border-gray-200 rounded p-2 w-full"
              name="slug"
              placeholder="Enter Slug..."
              ref={slugRef}
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
              placeholder="Enter email"
              ref={emailRef}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="price" className="inline-block text-lg mb-2">
              Price
            </label>
            <input
              type="number"
              className="border border-gray-200 rounded p-2 w-full"
              name="price"
              placeholder="Enter Price..."
              ref={priceRef}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="category" className="inline-block text-lg mb-2">
              Category
            </label>
            <input
              type="text"
              className="border border-gray-200 rounded p-2 w-full"
              name="category"
              placeholder="Enter category..."
              ref={categoryRef}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="logo" className="inline-block text-lg mb-2">
              Logo
            </label>
            <input
              type="file"
              className="border border-gray-200 rounded p-2 w-full"
              name="logo"
              ref={logoRef}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="description" className="inline-block text-lg mb-2">
              Description
            </label>
            <textarea
              className="border border-gray-200 rounded p-2 w-full"
              name="description"
              rows="10"
              ref={descriptionRef}
              placeholder="Include tasks, requirements, salary, etc"
            ></textarea>
          </div>

          <div className="mb-6 flex justify-around">
            <span className="text-black ml-4">
              <Link to="/"> Back </Link>
            </span>

            <button className="bg-primary text-white rounded py-2 px-4 hover:bg-black">
              Create an Ad
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
