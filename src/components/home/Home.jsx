import React from "react";
import image1 from "../../assets/main-banner.png";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      className=" flex pt-[80px] pb-[80px] mb-[100px] items-center justify-center gap-5"
      id="home"
    >
      <div className="w-[40%] flex-col justify-between ">
        <div>
          <p className="text-6xl mt-[30px]">
            Developer Student Clubs
            <p className="font-semibold">GRIET</p>
          </p>
        </div>
        <div className="text-[#5F6368] mt-[30px] mb-[100px] leading-6">
          <p>
            The GRIET Google Developer Student Club is like a tech playground!
            Our student leaders guide this energetic community where we all come
            together to learn, team up, and create cool projects using Google
            tech. It's not just a club; it's where our passion for technology
            meets hands-on fun!
          </p>
        </div>
        <div className="">
          <Link to="about" className="p-5 bg-[#185ABC] rounded-lg text-white font-semibold">
            Learn More!
          </Link>
        </div>
      </div>
      <div className="w-[564px]">
        <img src={image1} alt="" />
      </div>
    </div>
  );
};

export default Home;
