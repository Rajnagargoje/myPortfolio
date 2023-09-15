import React, { useState } from 'react';
import { Link } from "react-scroll";
import { logo } from "../../assets/index";
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"
import { navLinksdata } from '../../constants';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between border-b-[1px] border-b-black items-center">
      <div className='w-[80px] h-[80px] flex gap-5 items-center'>
        <img src={logo} alt="logo" />
        <h1 className=" text-base   tracking-wider font-normal text-gray-400  cursor-pointer hover:text-designColor duration-300">Portfolio</h1>
      </div>
      <div>
        <ul className="hidden md:inline-flex  items-center gap-6 lgl:gap-10 font-titleFont">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className=" text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <span onClick={() => setShowMenu(!showMenu)} className='text-xl mdl:hidden bg-black w-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer'>
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen mdl:hidden overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                <img className="w-32" src={logo} alt="logo" />
                <p className="text-sm text-gray-400 mt-2">
                  To work in healthy, innovative and challenging environment extracting
                  the best out of me, which is conducive to learn and grow at
                  proffessional as well as personal level thereby directing my future
                  endeavours as an asset to the organization.
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4">
                  Find me in
                </h2>
                <div className="flex gap-4">
                  <a href="https://instagram.com/g_a_n_e_s_h_n_?igshid=ZGUzMzM3NWJiOQ==">
                    <span className="bannerIcon">
                      <FaInstagram />
                    </span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ganesh-nagargoje-a60531221"

                  >
                    <span className="bannerIcon">
                      <FaLinkedinIn />
                    </span>
                  </a>
                  <a
                    href="https://www.facebook.com/"

                  >
                    <span className="bannerIcon">
                      <FaFacebookF />
                    </span>
                  </a>
                </div>
              </div>
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar
