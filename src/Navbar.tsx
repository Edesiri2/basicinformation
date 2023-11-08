import React from "react";
// import custodianLogo from '../assets/logo-white.png'
import { FaTwitter, FaFacebook, FaGithub } from "react-icons/fa";
const Navbar: React.FC = () => {
  return (
    <nav className="w-[fit] bg-[#900000] text-white flex justify-between  px-8 py-4 ">
      <div className=" w-[20%]">
        {/* <img className="w-[120px]" src={custodianLogo} /> */}
      </div>
     
      <div className=" flex gap-4  justify-between">
        <div className=" flex gap-4 ml-4 mt-6">
          <div>
            <FaTwitter />{" "}
          </div>
          <div>
            <FaFacebook />
          </div>
          <div>
            <FaGithub />
          </div>
        </div>

        {/* <div className="w-[10%] flex gap-1 mb-6 border-white ml-4 mt-8"><button>ChatMax </button></div> */}
      </div>
    </nav>
  );
};

export default Navbar;
