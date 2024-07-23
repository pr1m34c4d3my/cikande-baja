import Image from "next/image";
import React from "react";
import Ads from "/public/img/ads.jpg";
import Link from "next/link";

type sideBarList = {
  productTitle: string;
  productSlug?: string;
};

type Props = {
  sideBar: sideBarList[];
};

const SideBar = ({ sideBar }: Props) => {
  return (
    <div className="flex flex-col gap-24 justify-start w-4/12 ">
      <div className="flex flex-col gap-7 min-h-[350px]">
        <h1 className="font-bold text-[24px]">Produk Paling Laris</h1>
        <ul className="flex flex-col gap-3 text-[16px] text-secondary underline cursor-pointer">
          {sideBar
            .map((v, i) => {
              return (
                <div key={i}>
                  <li>
                    <Link href={`/product/${v.productSlug}`}>
                      {v.productTitle}
                    </Link>
                  </li>
                </div>
              );
            })
            .slice(0, 6)}
        </ul>
        <div></div>
      </div>
      <div className="hidden lg:block">
        <Image src={Ads} alt="Iklan" />
      </div>
    </div>
  );
};

export default SideBar;
