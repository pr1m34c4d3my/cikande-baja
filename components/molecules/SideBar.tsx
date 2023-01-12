import React from "react";

type Props = {};

const SideBar = (props: Props) => {
  return (
    <div className="flex flex-col justify-start w-4/12 ">
      <div className="flex flex-col gap-5 min-h-[350px]">
        <h1 className="font-bold text-[24px]">Produk Paling Laris</h1>
        <ul className="flex flex-col gap-1 text-[16px] text-secondary underline cursor-pointer">
          <li>Besi</li>
          <li>Alumunium Foil Bubble</li>
          <li>Expnaded Metal</li>
          <li>Besi Siku</li>
          <li>Plat Border</li>
        </ul>
        <div>
          <button className="bg-[#F5F5F5] text-[15px] h-[40px] w-[180px] rounded-lg font-bold hover:border-[1px] hover:bg-white hover:text-main transition-all">
            Lihat Produk Lain
          </button>
        </div>
      </div>
      <div className="hidden lg:block">Banner Iklan</div>
    </div>
  );
};

export default SideBar;
