import React from "react";
import Image from "next/image";
import hero from "../assets/hero.jpg";

const Hero = () => {
  return (
    <div className="relative flex justify-between items-center px-20 h-screen w-full overflow-clip border-b-2"> {/* Remove bottom border later */}
      <div className="flex flex-col justify-center ">
        <p className="italic text-3xl">Welcome to</p>
        <p className="font-bold text-7xl">Ezhuvelil Gardens</p>
        <p className="mt-8 max-w-120">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="border-8 border-light-blue rounded-full w-100 h-140 mt-10 mr-10 bg-black overflow-clip">
        {/* <Image src={hero} alt="Hero image"/> */}
      </div>
    </div>
  );
};

export default Hero;
