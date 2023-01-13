import Image from "next/image";
import React from "react";
import Ads from "/public/img/ads.jpg";

type Props = {};

const SideBar = (props: Props) => {
  return (
    <div className="flex flex-col gap-24 justify-start w-4/12 ">
      <div className="flex flex-col gap-7 min-h-[350px]">
        <h1 className="font-bold text-[24px]">Produk Paling Laris</h1>
        <ul className="flex flex-col gap-3 text-[16px] text-secondary underline cursor-pointer">
          <li>Besi Wf</li>
          <li>H- Beam</li>
          <li>Plat Kapal</li>
          <li>CNP</li>
          <li>UNP</li>
          <li>Plat Stainless Steel</li>
        </ul>
        <div>
          <button className="bg-[#F5F5F5] text-[15px] h-[40px] w-[180px] rounded-lg font-bold hover:border-[1px] hover:bg-white hover:text-main transition-all">
            Lihat Produk Lain
          </button>
        </div>
      </div>
      <div className="hidden lg:block">
        <Image src={Ads} alt="Iklan" />
      </div>
    </div>
  );
};

export default SideBar;
