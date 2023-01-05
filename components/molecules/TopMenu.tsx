import React from "react";
import Link from "next/link";

type Props = {};

const TopMenu = (props: Props) => {
  return (
    <nav className="flex lg:flex-row flex-col max-w-[1170px] mx-auto lg:py-3 justify-start items-start gap-2 p-2 lg:justify-between lg:items-center">
      <ul className="flex gap-4 text-[14px]">
        <li className=" text-secondary hover:text-black transition-all hover:scale-105">
          <Link href="#">Chat with us</Link>
        </li>
        <li>
          <p>+420 336 775 664</p>
        </li>
        <li>
          <p>info@cikandeindobaja.co.id</p>
        </li>
      </ul>
      <ul className="flex gap-4 text-[14px] text-secondary ">
        <li className="hover:text-black transition-all hover:scale-105">
          <Link href="#">Artikel</Link>
        </li>
        <li className="hover:text-black transition-all hover:scale-105">
          <Link href="#">Tentang Kami</Link>
        </li>
        <li className="hover:text-black transition-all hover:scale-105">
          <Link href="#">Karir</Link>
        </li>
      </ul>
    </nav>
  );
};

export default TopMenu;
