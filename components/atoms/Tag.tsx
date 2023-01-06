import React from "react";

type Tag = {
  name: string;
};
type Prop = {
  title: Tag[];
};

function Tag({ title }: any) {
  return (
    <a
      className="bg-[#f5f5f5] text-[14px] w-[95px] text-center  font-medium rounded-lg hover:bg-[#c1c1c1] hover:text-white transition-all"
      href="/"
    >
      {title}
    </a>
  );
}

export default Tag;
