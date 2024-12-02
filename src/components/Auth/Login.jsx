import React, { useState } from "react";

const Login = ({handleLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email,password)

    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="border-2 rounded-xl border-purple-600 p-5 sm:p-10 md:p-20">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
          action=""
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="border-2 border-pink-500 rounded-full py-2 px-10 text-xl text-white outline-none bg-transparent mt-5 placeholder:text-gray-500 text-center"
            type="email"
            placeholder="Enter your Email"
          />

          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="border-2 border-pink-500 rounded-full py-2 px-10 text-xl text-white outline-none bg-transparent mt-3 placeholder:text-gray-500 text-center"
            type="password"
            placeholder="Enter your Password"
          />
          <button className=" border-none bg-teal-600 rounded-xl py-4 px-3 text-xl text-white outline-none  mt-5 ">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
