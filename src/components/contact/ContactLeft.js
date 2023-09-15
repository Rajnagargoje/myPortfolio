import React from "react";
import { contactImg } from "../../assets/index";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const ContactLeft = () => {
  return (
    <div
      className=" w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne
    flex flex-col gap-8 justify-center  "
    >
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Ganesh nagaargoje</h3>
        <p className="text-lg ffont-normal text-gray-400">
          Full Stack Java Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Aspiring to work with an organization that offers responsible position
          wherei can utilize my skill and capabilities.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          phone: <span className="text-lightText">+91 7057261298</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">gn7057@gmail.com</span>
        </p>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
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
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
          </div>
          <div>
            <a href="https://twitter.com/?lang=en">
              <span className="bannerIcon">
                <FaTwitter />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
