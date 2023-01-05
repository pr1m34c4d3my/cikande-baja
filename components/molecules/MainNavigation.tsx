import React from "react";
import Image from "next/image";
import logo from "../../public/img/logo.png";
import Link from "next/link";

type Props = {};

const MainNavigation = (props: Props) => {
  return (
    <div className="max-w-[1170px] gap-2 lg:py-3 mx-auto flex p-2 flex-col justify-between items-center lg:flex-row">
      <figure className="lg:w-[470px] w-[370px]">
        <Link href="/">
          <Image priority src={logo} alt="logo"></Image>
        </Link>
      </figure>
      <div className="flex px-3 rounded-lg pb-1 bg-white items-center gap-4">
        <form action="" method="GET">
          <input
            className="focus:border-white focus:outline-none lg:w-[300px] w-[150px] pr-1 text-[10px]"
            type="text"
            name=""
            id=""
            placeholder="Cari Barang..."
          />
          <button className="text-[10px] font-bold uppercase border-l-2 pl-2">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default MainNavigation;
