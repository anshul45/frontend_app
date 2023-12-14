import React, { useState } from "react";
import Logo from "../assets/arxena-logo.png";
import User from "../assets/user.webp";
import Quote from "../assets/quote.png";
import Quote1 from "../assets/quote1.png";
import { Link } from "react-router-dom";
import linkedin from "../assets/linkedin.png";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex">
      <div className="flex-[1.4] w-full py-5  pl-5">
        <Link to="/">
          <img src={Logo} width={100} height={100} className="mb-7" />
        </Link>

        <div className="w-2/3 m-auto flex flex-col gap-4 px-7 py-8 rounded-md justify-center items-center shadow-xl ">
          <h1 className="text-xl font-light">
            Get started with 10 free org-chart credits.
          </h1>
          <h1 className="text-xl font-light">No credit card is needed.</h1>
          <input
            placeholder="Full Name"
            type="text"
            className="border-[1px] w-[80%] px-2 py-1.5 focus:outline-none rounded-md"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            placeholder="Mobile Number"
            type="number"
            className="border-[1px] w-[80%] px-2 py-1.5 focus:outline-none rounded-md"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          <input
            placeholder="Email"
            className="border-[1px] w-[80%] px-2 py-1.5 focus:outline-none rounded-md"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Password"
            className="border-[1px] w-[80%] px-2 py-1.5 focus:outline-none rounded-md"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="border-[1px] w-[80%] px-2 py-1.5 rounded-md text-center text-sm">
            I work for a 🢓
          </div>
          <button className="bg-[#2476cc] text-white text-lg font-semibold px-6 py-2.5 rounded-3xl">
            Create account
          </button>
          <h1 className="text-[#C5C5CD]">
            Already registered?{" "}
            <Link to="/login" className="text-[#2476cc]">
              Log in instead
            </Link>
          </h1>
          <h1 className="text-[#C5C5CD] text-center">
            Account lock: We discourage licence sharing. Your account will be
            accessible from this device only
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
          <img src={linkedin} alt="linkdln_logo" width={20} className="mt-7" />
        </Link>
        <img alt="quote" src={Quote1} width={45} className="float-right mt-3" />
      </div>
    </div>
  );
};

export default Signup;
