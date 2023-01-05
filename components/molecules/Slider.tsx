import Image from "next/image";
import React from "react";

type ImageKey = {
  id: string;
  url: string;
};

type Props = {
  sliderImage: ImageKey[];
};

const Slider = ({ sliderImage }: any) => {
  return (
    <figure className="rounded-2xl max-w-[1170px] lg:h-[450px] h-[200px] my-2 mx-auto lg:my-12 overflow-hidden relative">
      <Image
        className="object-fit w-full h-full mr-5"
        priority
        src={sliderImage.url}
        alt="slider"
        width={1600}
        height={564}
      />
      {/* 
      <button className=" absolute z-10 bg-white bottom-[40px] left-[140px] py-4 px-4 font-semibold rounded-xl">
        Info Selengkapnya
      </button>
*/}
    </figure>
  );
};

export default Slider;
