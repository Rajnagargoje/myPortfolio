import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiTwitter, SiGithub, SiReact } from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Professional Coder.",
      "Full Stack Java Developer.",
      "professional Trader.",
    ],
    Loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div className="w-1/2 flex flex-col gap-20 ">
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal"> WELCOME TO MY WORLD</h4>
        <h2 className="text-6xl font-bold text-white">
          Hi, I'm
          <span className="text-designColor capitalize"> Ganesh Nagargoje</span>
        </h2>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          To work in healthy, innovative and challenging environment extracting
          the best out of me, which is conducive to learn and grow at
          proffessional as well as personal level thereby directing my future
          endeavours as an asset to the organization.
        </p>
      </div>
      <div className="flex justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            {" "}
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
            <span className="bannerIcon">
              <FaInstagram />
            </span>
            <span className="bannerIcon">
              <FaLinkedin />
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            {" "}
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <SiTwitter />
            </span>
            <span className="bannerIcon">
              <SiGithub />
            </span>
            <span className="bannerIcon">
              <SiReact />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
