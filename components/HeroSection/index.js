import React from "react";
import Button from "../Common/Button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="text-gray-600 bg-[#ffd2d9] body-font">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow max-w-2xl mx-auto md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className=" sm:text-4xl min-w-[650px] mb-4 font-medium text-gray-900" style={{ fontSize: '70px', lineHeight: '70px' }}>
                <span className='text-orange-600'>Gummy vitamins put</span> <span className='text-[#4b148b]'>the fun back into being healthy</span>
            </h1>
            <p className="mb-8 leading-relaxed">
                Yummygums are good for your mind and body, packed with essential vitamins and minerals.
            </p>
            <div className="flex justify-center">
                <button className=" flex justify-center rounded-full items-center text-white bg-orange-600 border-0 py-4 px-8 focus:outline-none hover:bg-indigo-700  text-lg">
                    <p className='text-center'>Choose your Favourite</p>
                </button>

            </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
                src="https://a.storyblok.com/f/186028/2042x1922/ac29e7cffe/community_geel-2x.jpg/m/3063x/smart"
                width={1000}
                height={1000}
                className='h-[600px] w-[600px] object-cover object-center'
                alt="Picture of the author"
            />
        </div>
    </div>
</section>
  );
};

export default Hero;


