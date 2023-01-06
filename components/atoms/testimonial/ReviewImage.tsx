import Image from "next/image";
import React from "react";

type Props = {};

const ReviewImage = ({ image }: any) => {
  return (
    <>
      <Image
        className="w-6 h-6 rounded-full"
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
        alt="profile picture"
        width={200}
        height={200}
      />
    </>
  );
};

export default ReviewImage;
