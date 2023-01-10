import Image from "next/image";
import React from "react";

type Props = {};

const ReviewImage = ({ image }: any) => {
  return (
    <>
      <Image
        className="w-6 h-6 rounded-full"
        src="/"
        alt="profile picture"
        width={200}
        height={200}
      />
    </>
  );
};

export default ReviewImage;
