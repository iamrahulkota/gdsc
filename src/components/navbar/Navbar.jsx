import React from "react";
import { Link } from "react-scroll";
import logo from "../../assets/only-logo.png";
export const Navbar = () => {
  return (
    <nav className="h-[70px] w-full flex items-center justify-between px-[5%] ">
      <Link to="home" smooth={true}>
        <img src={logo} alt="logo" className="w-[104px] h-[53px]" />
      </Link>
      <div className="flex items-center pt-[10px] gap-8">
        <Link
          to="home" smooth={true}
          className=" hover:bg-black hover:text-white  px-4 ease-linear duration-300 text-lg font-medium mb-6"
        >
          <p className="p-2">Home</p>
        </Link>
        <Link
          to="about" smooth={true}
          className=" hover:bg-black hover:text-white  px-4 ease-linear duration-300 text-lg font-medium mb-6"
        >
          <p className="p-2">About</p>
        </Link>
        <Link
          to="team" smooth={true}
          className=" hover:bg-black hover:text-white  px-4 ease-linear duration-300 text-lg font-medium mb-6"
        >
          <p className="p-2">Team</p>
        </Link>
        <Link
          to="events" smooth={true}
          className=" hover:bg-black hover:text-white  px-4 ease-linear duration-300 text-lg font-medium mb-6"
        >
          <p className="p-2">Events</p>
        </Link>
        <Link
          to="projects" smooth={true}
          className=" hover:bg-black hover:text-white  px-4 ease-linear duration-300 text-lg font-medium mb-6"
        >
          <p className="p-2">Projects</p>
        </Link>
        <Link
          to="projects" smooth={true}
          className=" hover:bg-black hover:text-white  px-4 ease-linear duration-300 text-lg font-medium mb-6"
        >
          <p className="p-2">Learn</p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
