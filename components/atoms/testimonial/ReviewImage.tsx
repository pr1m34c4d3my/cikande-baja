import Image from "next/image";
import React from "react";

type Props = {};

const ReviewImage = ({ image }: any) => {
  return (
    <figure className="w-[100px] rounded-full border-2 bg-slate-200 overflow-hidden">
      <Image
        className="object-cover bg-white"
        src={image}
        alt="profile picture"
        width={170}
        height={100}
      />
    </figure>
  );
};

export default ReviewImage;
