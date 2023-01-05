import React from "react";
import CategoryMenu from "../molecules/CategoryMenu";
import TopMenu from "../molecules/TopMenu";

type ListKey = {
  id: number;
  title: string;
  link: string;
};

type Props = {
  categories: ListKey[];
};

const Header = ({ categories }: Props) => {
  return (
    <>
      <TopMenu />
      {categories
        ? categories.map((category: any, index: number) => (
            <CategoryMenu
              key={index}
              categoryList={[
                { id: category.id, title: category.title, link: category.link },
              ]}
            />
          ))
        : undefined}
    </>
  );
};

export default Header;
