import React from "react";
import { logo } from "../../assets/index";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-4 lgl:gap-8 py-10 lgl:py-20 border-b-[1px] border-b-black text-center lgl:text-start">
      <div className="w-full h-full flex flex-col  gap-8 items-center lgl:items-start ">
        <img
          className="w-[120px] h-[120px] ml-0 lgl:ml-12 "
          src={logo}
          alt="logo"
        />
        <div className="flex gap-4">
          <div>
            <a href="https://www.facebook.com/">
              {" "}
              <span className="bannerIcon">
                <FaFacebookF />
              </span>
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/ganesh-nagargoje-a60531221">
              {" "}
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
          </div>
          <div>
            <a href="https://twitter.com/?lang=en">
              {" "}
              <span className="bannerIcon">
                <FaTwitter />
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Quick Link
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium overflow-hidden  py-6">
          <li>
            <span
              className="w-full hover:text-designColor duration-300 
            cursor-pointer text-lg relative group"
            >
              About
              <span
                className="absolute h-[1px] w-full inline-flex invisible lgl:visible
                bg-designColor -bottom-1 left-0 -translate-x-[100%]
                group-hover:translate-x-0 transition-transform 
                duration-300"
              ></span>
            </span>
          </li>
          <li>
            <span
              className="w-full hover:text-designColor duration-300  
            cursor-pointer text-lg relative group"
            >
              Portfolio
              <span
                className="absolute h-[1px] w-full inline-flex invisible lgl:visible
                bg-designColor -bottom-1 left-0 -translate-x-[100%]
                group-hover:translate-x-0 transition-transform
                duration-300 "
              ></span>
            </span>
          </li>
          <li>
            <span
              className="w-full hover:text-designColor duration-300 
            cursor-pointer text-lg relative group"
            >
              Services
              <span
                className="absolute h-[1px] w-full inline-flex invisible lgl:visible
                bg-designColor -bottom-1 left-0 -translate-x-[100%]
                group-hover:translate-x-0 transition-transform
                duration-300 "
              ></span>
            </span>
          </li>
          <li>
            <span
              className="w-full hover:text-designColor duration-300 
            cursor-pointer text-lg relative group"
            >
              Blog
              <span
                className="absolute h-[1px] w-full inline-flex invisible lgl:visible
                bg-designColor -bottom-1 left-0 -translate-x-[100%]
                group-hover:translate-x-0 transition-transform
                duration-300 "
              ></span>
            </span>
          </li>
          <li>
            <span
              className="w-full hover:text-designColor duration-300 
            cursor-pointer text-lg relative group"
            >
              Contact
              <span
                className="absolute h-[1px] w-full inline-flex invisible lgl:visible
                bg-designColor -bottom-1 left-0 -translate-x-[100%]
                group-hover:translate-x-0 transition-transform
                duration-300 "
              ></span>
            </span>
          </li>
        </ul>
      </div>

      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Resources
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium overflow-hidden  py-6">
          <li>
            <span
              className="w-full hover:text-designColor duration-300 
            cursor-pointer text-lg relative group"
            >
              Authentication
              <span
                className="absolute h-[1px] w-full inline-flex invisible lgl:visible
                bg-designColor -bottom-1 left-0 -translate-x-[100%]
                group-hover:translate-x-0 transition-transform
                duration-300 "
              ></span>
            </span>
          </li>
          <li>
            <span
              className="w-full hover:text-designColor duration-300 
            cursor-pointer text-lg relative group"
            >
              System Status
              <span
                className="absolute h-[1px] w-full inline-flex invisible lgl:visible
                bg-designColor -bottom-1 left-0 -translate-x-[100%]
                group-hover:translate-x-0 transition-transform
                duration-300 "
              ></span>
            </span>
          </li>
          <li>
            <span
              className="w-full hover:text-designColor duration-300 
            cursor-pointer text-lg relative group"
            >
              Terms and Condition
              <span
                className="absolute h-[1px] w-full inline-flex invisible lgl:visible
                bg-designColor -bottom-1 left-0 -translate-x-[100%]
                group-hover:translate-x-0 transition-transform
                duration-300 "
              ></span>
            </span>
          </li>
          <li>
            <span
              className="w-full hover:text-designColor duration-300 
            cursor-pointer text-lg relative group"
            >
              Pricing
              <span
                className="absolute h-[1px] w-full inline-flex invisible lgl:visible
                bg-designColor -bottom-1 left-0 -translate-x-[100%]
                group-hover:translate-x-0 transition-transform
                duration-300 "
              ></span>
            </span>
          </li>
          <li>
            <span
              className="w-full hover:text-designColor duration-300 
            cursor-pointer text-lg relative group"
            >
              Over Right
              <span
                className="absolute h-[1px] w-full inline-flex invisible lgl:visible
                bg-designColor -bottom-1 left-0 -translate-x-[100%]
                group-hover:translate-x-0 transition-transform
                duration-300 "
              ></span>
            </span>
          </li>
        </ul>
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Developers
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium overflow-hidden  py-6">
          <li>
            <span
              className="w-full hover:text-designColor duration-300 
            cursor-pointer text-lg relative group"
            >
              Documentation
              <span
                className="absolute h-[1px] w-full inline-flex invisible lgl:visible
                bg-designColor -bottom-1 left-0 -translate-x-[100%]
                group-hover:translate-x-0 transition-transform
                duration-300 "
              ></span>
            </span>
          </li>
          <li>
            <span
              className="w-full hover:text-designColor duration-300 
            cursor-pointer text-lg relative group"
            >
              Authentication
              <span
                className="absolute h-[1px] w-full inline-flex invisible lgl:visible
                bg-designColor -bottom-1 left-0 -translate-x-[100%]
                group-hover:translate-x-0 transition-transform
                duration-300 "
              ></span>
            </span>
          </li>
          <li>
            <span
              className="w-full hover:text-designColor duration-300 
            cursor-pointer text-lg relative group"
            >
              API Reference
              <span
                className="absolute h-[1px] w-full inline-flex invisible lgl:visible
                bg-designColor -bottom-1 left-0 -translate-x-[100%]
                group-hover:translate-x-0 transition-transform
                duration-300 "
              ></span>
            </span>
          </li>
          <li>
            <span
              className="w-full hover:text-designColor duration-300 
            cursor-pointer text-lg relative group"
            >
              Support
              <span
                className="absolute h-[1px] w-full inline-flex invisible lgl:visible
                bg-designColor -bottom-1 left-0 -translate-x-[100%]
                group-hover:translate-x-0 transition-transform
                duration-300 "
              ></span>
            </span>
          </li>
          <li>
            <span
              className="w-full hover:text-designColor duration-300 
            cursor-pointer text-lg relative group"
            >
              Open Source
              <span
                className="absolute h-[1px] w-full inline-flex invisible lgl:visible
                bg-designColor -bottom-1 left-0 -translate-x-[100%]
                group-hover:translate-x-0 transition-transform
                duration-300 "
              ></span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
