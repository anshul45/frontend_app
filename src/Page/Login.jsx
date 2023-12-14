import React, { useState } from "react";
import Logo from "../assets/arxena-logo.png";
import User from "../assets/user.webp";
import Quote from "../assets/quote.png";
import Quote1 from "../assets/quote1.png";
import { Link } from "react-router-dom";
import Linkdln from "../assets/linkedin.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex h-screen">
      <div className="flex-[1.4] w-full py-5  pl-5">
        <Link to="/">
          <img src={Logo} width={100} height={100} className="mb-28" />
        </Link>

        <div className="w-2/3 m-auto flex flex-col gap-4 px-7 py-8 rounded-md justify-center items-center shadow-xl ">
          <h1 className="text-xl font-light">Welcome back!</h1>

          <input
            placeholder="Email"
            type="email"
            className="border-[1px] w-[80%] px-2 py-1.5 focus:outline-none rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Password"
            type="password"
            className="border-[1px] w-[80%] px-2 py-1.5 focus:outline-none rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="bg-[#2476cc] text-white text-lg font-semibold px-6 py-2.5 rounded-3xl">
            Log in
          </button>
          <h1 className="text-[#C5C5CD]">
            Forgot your password? Reset it here
          </h1>
          <h1 className="text-[#C5C5CD]">
            Need an account?{" "}
            <Link to="/signup" className="text-[#2476cc]">
              Sign up for free
            </Link>
          </h1>
        </div>
      </div>
      <div className="flex-[0.6] px-7 bg-blue-200">
        <img alt="user" src={User} className="m-auto rounded-full mt-20 mb-4" />
        <img alt="quote" src={Quote} width={45} />
        <p className="italic mt-7">
          Arxena helps me map with large F100 accounts saving me hours of manual
          work for resourcing projects.
        </p>
        <div className="text-lg mt-14">
          <span className="font-semibold">Mannan Pacha</span> | Manager - Ernst
          & Young
        </div>
        <Link to="https://www.linkedin.com/in/mannanpacha1988/" target="_blank">
          <img src={Linkdln} alt="linkdln_logo" width={20} className="mt-7" />
        </Link>
        <img alt="quote" src={Quote1} width={45} className="float-right mt-3" />
      </div>
    </div>
  );
};

export default Login;
