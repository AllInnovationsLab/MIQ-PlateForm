"use client";
import React, { useState } from "react";
import { Poppins } from "next/font/google";
import { gql, useMutation } from "@apollo/client";

const poppins = Poppins({
  weight: "500",
  subsets: ["devanagari"],
});

// Define mutation
const CREATE_USER = gql`
  mutation add($input: UserInfo!) {
    addUser(input: $input) {
      id
      name
    }
  }
`;

function Register() {
  // const poppins = Poppins();
  const [user, setUser] = useState<User>({ name: "", email: "", password: "" });
  const [createUser, { error }] = useMutation(CREATE_USER);
  const emailRegex: RegExp = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const passwordRegex: RegExp = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;

  return (
    <main className={poppins.className}>
      <h1 className="text-center font bold text-3xl mt-10">
        Create an Account
      </h1>
      <div className="flex items-center justify-center h-screen">
        <div
          className="max-w-lg bg-white rounded-lg p-8 shadow-xl dark:bg-neutral-700"
          style={{ width: "50%", height: "60%", marginTop: "-10%" }}
        >
          <form
            className="space-y-6"
            onSubmit={async (e) => {
              e.preventDefault();

              const res = await createUser({
                variables: {
                  input: {
                    name: user.name,
                    email: user.email,
                    password: user.password,
                  },
                },
              });
              if (!res) console.log(error?.message);
            }}
          >
            {/* Name */}
            <div className="m-4">
              <label htmlFor="exampleInput123">Name</label>
              <input
                type="text"
                className="input-field w-full h-10 p-2 focus:border-blue-500 focus:outline-none focus:ring mt-2"
                id="exampleInput123"
                placeholder="Enter Name"
                required
                title="name should contain at minmum 3 characters"
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
            </div>

            {/* Email Address */}
            <div className="m-4">
              <label htmlFor="exampleInput125">Email Address</label>
              <input
                type="email"
                className="input-field w-full h-10 p-2 focus:border-blue-500 focus:outline-none focus:ring mt-2"
                id="exampleInput125"
                placeholder="example@email.com"
                //   pattern={emailRegex.source}
                required
                title="enter a valid email"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>

            {/* Password */}
            <div className="m-4">
              <label htmlFor="exampleInput126">Password</label>
              <input
                type="password"
                className="input-field w-full h-10 p-2 focus:border-blue-500 focus:outline-none focus:ring mt-2"
                id="exampleInput126"
                placeholder="Enter Password"
                // pattern={passwordRegex.source}
                required
                title="Password should contain one UpperCase , one lowerCase and one digit"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full btn-sign-up bg-primary text-white py-2 px-6 rounded-full block mx-auto hover:bg-primary-600 focus:outline-none focus:ring focus:border-primary-300"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Register;
