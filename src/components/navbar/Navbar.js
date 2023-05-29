import React from 'react';
import { Link } from "react-scroll";
import {logo} from "../../assets/index";
import {navLinksdata} from '../../constants';

const Navbar = () => {
  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between border-b-[1px] border-b-black items-center">
      <div className='w-[80px] h-[80px] flex gap-5 items-center'>
        <img src={logo} alt="logo" />
        <h1 className=" text-base  text-lg tracking-wider font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300">Portfolio</h1>
       </div>
      <div>
        <ul className="flex items-center gap-10 font-titleFont">
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
      </div>
    </div>
  );
}

export default Navbar
