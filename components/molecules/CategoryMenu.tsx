import Link from "next/link";
import React from "react";

type ListKey = {
  title: string;
  id: number;
  link: string;
};

type Props = {
  categoryList: ListKey[];
};

const CategoryMenu = ({ categoryList }: Props) => {
  return (
    <>
      {categoryList.map((v) => {
        return (
          <Link href={/category/ + v.link} key={v.id}>
            {v.title}
          </Link>
        );
      })}
    </>
  );
};

export default CategoryMenu;
