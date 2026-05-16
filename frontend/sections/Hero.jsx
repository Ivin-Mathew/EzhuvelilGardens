import React from "react";
import Image from "next/image";
import hero from "../assets/nursery1.jpg";

const Hero = () => {
  return (
    <div className="relative flex justify-between items-center px-20 h-screen w-full overflow-clip">
      <div className="flex flex-col justify-center ">
        <p className="italic text-3xl">Welcome to</p>
        <p className="font-bold text-7xl">Ezhuvelil Gardens</p>
        <p className="mt-8 max-w-120">
          Bringing nature&apos;s finest greens from the heart of Kerala straight to your home.
        </p>
      </div>
      <div className="rounded-tr-[90px] rounded-bl-[90px] w-110 h-140 mt-10 mr-10 border-8 border-black bg-black overflow-clip">
        <Image src={hero} alt="Hero image" className="flex justify-center items-center h-full w-full " /> {/* Get high quality image */}
      </div>
    </div>
  );
};

export default Hero;
