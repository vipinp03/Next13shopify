import React from "react";
import Button from "../Common/Button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center md:justify-between md:flex-row bg-[#f7d4d9] ">
      <div className="text-center py-6 md:w-1/2 h-full">
        <span className=" text-orange-500 text-4xl font-extrabold">SIMPLIFY YOUR ROUTINE <br/> <span className=" text-[#4b148b]">SAVOR THE TASTE</span></span>
        <p className="text-center py-4 text-black-600 md:py-4 md:px-8">
          Ready to kickstart a new healthy habit? Our <br/>fruit-flavoured gummies
          make taking your <br/>vitamins a tasty treat! The perfect addition to <br/>your
          daily routine.
        </p>
        <Button data={"Shop Yummygums"}/>
      </div>
      <div className="md:w-1/2"> <Image src="https://a.storyblok.com/f/186028/2042x1922/ac29e7cffe/community_geel-2x.jpg/m/3063x/smart" alt="imag" width="1000" height="1000"/></div>
    
    </div>
  );
};

export default Hero;
