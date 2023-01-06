import Image from "next/image";
import React from "react";

type DataName = {
  name: string;
};
type Props = {
  ReviewName: DataName;
};

const ReviewName = ({ name }: any) => {
  return (
    <>
      <h3 className="pr-3 font-medium text-gray-900 dark:text-white">{name}</h3>
    </>
  );
};

export default ReviewName;
