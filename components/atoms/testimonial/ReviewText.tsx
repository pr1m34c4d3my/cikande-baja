import React from "react";

type Data = {
  text: string;
};
type Props = {
  ReviewText: Data;
};

const ReviewText = ({ text }: any) => {
  return (
    <p className="lg:text-[16px] text-[10px] text-center font-light text-gray-900 dark:text-white">
      "{text}"
    </p>
  );
};

export default ReviewText;
