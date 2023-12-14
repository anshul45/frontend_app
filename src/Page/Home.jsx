import React, { useState } from "react";
import Logo from "../assets/arxena-logo.png";
import Twitter from "../assets/tw.png";
import Youtube from "../assets/youtube.png";
import Facebook from "../assets/facebook.png";
import Linkdln from "../assets/linkedin.png";
import Upload from "../assets/new_upload.png";
import { Link } from "react-router-dom";

const Home = () => {
  const [input, setInput] = useState("");
  return (
    <div className="h-screen w-full px-10 py-8 flex flex-col justify-between">
      <div className="flex justify-between">
        <div></div>
        <div>
          <Link to="signup">
            <button className="bg-[#2476cc] text-white text-lg font-semibold px-12 py-2.5 rounded-3xl">
              Sign up
            </button>
          </Link>
          <Link to="login">
            <button className="ml-7 border-[1px] border-[#2476cc] text-[#2476cc] text-lg font-semibold px-12 py-2 rounded-3xl">
              Log in
            </button>
          </Link>
        </div>
      </div>
      <div className="flex gap-10 flex-col items-center">
        <img src={Logo} alt="Company Logo" width={190} />
        <div className="flex items-center border border-gray-300 bg-[#F7F7FB] rounded-3xl w-2/5 px-3 py-2">
          <input
            value={input}
            type="text"
            placeholder="🔍 Search any company's org chart"
            className="w-full bg-transparent focus:outline-none placeholder:text-sm px-2"
            onChange={(e) => setInput(e.target.value)}
          />
          <img src={Upload} alt="upload Icon" className="w-5 h-5 mr-2" />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <h1>
            OrgGPT - Talent Identification Software for Ambitious Companies
          </h1>
          <div className="mt-2 flex gap-3 items-center text-xs text-[#007BFF] divide-x-[1px] divide-black cursor-pointer">
            <h4>Pricing</h4>
            <h4 className="pl-2">Terms of Service</h4>
            <h1 className="pl-2">Privacy Policy</h1>
            <h1 className="pl-2">How to Use</h1>
            <h1 className="pl-2">Download Extension</h1>
          </div>
        </div>
        <div className="flex items-center gap-7">
          <Link to="https://www.linkedin.com/company/arxena/" target="_blank">
            <img src={Linkdln} alt="twitter_logo" width={33} />
          </Link>
          <Link to="https://twitter.com/arxenainc" target="_blank">
            <img src={Twitter} alt="twitter_logo" width={40} />
          </Link>
          <Link to="https://www.facebook.com/arxenainc" target="_blank">
            <img src={Facebook} alt="twitter_logo" width={33} />
          </Link>
          <Link
            to="https://www.youtube.com/channel/UCpaPM7iFg9D309FUaIVeRpA"
            target="_blank"
          >
            <img src={Youtube} alt="twitter_logo" width={50} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
