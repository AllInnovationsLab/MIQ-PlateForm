import React from "react";
import { Poppins } from "next/font/google";

function Register() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-lg bg-primary rounded-lg p-8 shadow-md dark:bg-neutral-700">
        <form className="space-y-6">
          {/* Name */}
          <div className="mb-4">
            <input
              type="text"
              className="input-field"
              id="exampleInput123"
              placeholder="Name"
            />
          </div>

          {/* Email Address */}
          <div className="mb-4">
            <input
              type="email"
              className="input-field"
              id="exampleInput125"
              placeholder="Email Address"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <input
              type="password"
              className="input-field"
              id="exampleInput126"
              placeholder="Password"
            />
          </div>

          {/* Subscribe Checkbox */}
          <div className="flex items-center mb-4">
            <input
              className="checkbox"
              type="checkbox"
              value=""
              id="exampleCheck25"
            />
            <label className="label-checkbox" htmlFor="exampleCheck25">
              Subscribe to our newsletter
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn-sign-up bg-primary text-white py-2 px-6 rounded-full block mx-auto hover:bg-primary-600 focus:outline-none focus:ring focus:border-primary-300"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
