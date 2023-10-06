"use client";
import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";

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
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-lg bg-white rounded-lg p-8 shadow-md dark:bg-neutral-700">
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
          <div className="mb-4">
            <input
              type="email"
              className="input-field"
              id="exampleInput125"
              placeholder="Enter email Address example@email.com"
              //   pattern={emailRegex.source}
              required
              title="enter a valid email example@email.com"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <input
              type="password"
              className="input-field"
              id="exampleInput126"
              placeholder="Password"
              // pattern={passwordRegex.source}
              required
              title="Password should contain one UpperCase , one lowerCase and one digit"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn-sign-up bg-primary text-white py-2 px-6 rounded-full block mx-auto hover:bg-primary-600 focus:outline-none focus:ring focus:border-primary-300"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            Signin
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
