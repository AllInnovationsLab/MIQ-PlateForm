"use client";
import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { Poppins } from "next/font/google";
import { Container } from "postcss";
const poppins = Poppins({
  weight: "500",
  subsets: ["devanagari"],
});

const USER_LOGIN = gql`
  mutation Login($input: UserCredentials!) {
    login(input: $input) {
      email
      password
    }
  }
`;
const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [userLogin, { error, loading }] = useMutation(USER_LOGIN);

  return (
    <main className={poppins.className}>
      <h1 className="text-center font bold text-3xl mt-10 mb-20">
        Log into your Account
      </h1>
      <div className="flex items-center justify-center h-100 md:h-96">
        <div
          className="max-w-lg w-full md:w-full bg-white rounded-lg p-8 shadow-xl dark:bg-neutral-700"
          style={{ marginTop: "-10%" }}
        >
          <form
            className="space-y-6"
            onSubmit={async (e) => {
              e.preventDefault();

              const res = await userLogin({
                variables: {
                  input: {
                    email: user.email,
                    password: user.password,
                  },
                },
              });

              if (!res) console.log(error?.message);
              else console.log("loggedin succssefully ");
            }}
          >
            {/* Name */}

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
              <label htmlFor="exampleInput126 ">Password</label>
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
              className="btn-sign-up w-full bg-primary text-white py-2 px-6 rounded-full block mx-auto hover:bg-primary-600 focus:outline-none focus:ring focus:border-primary-300"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Signin
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
