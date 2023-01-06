import React from "react";

type Props = {};

const ReviewTitle = ({ title }: any) => {
  return (
    <h3 className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
      {title}
    </h3>
  );
};

export default ReviewTitle;
