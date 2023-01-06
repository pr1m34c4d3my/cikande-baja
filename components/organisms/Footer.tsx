import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import logo from "../../public/img/logo.png";
import Tag from "../atoms/Tag";

type List = {
  id: number;
  name: string;
  url: string;
};

type Props = {};

const Footer = () => {
  const [tag, setTag] = useState<List[]>([]);

  const tags = () => {
    const list: List[] = [
      { id: 1, name: "Besi", url: "/" },
      { id: 2, name: "Baja", url: "/" },
      { id: 3, name: "Plat", url: "/" },
      { id: 4, name: "Roof", url: "/" },
      { id: 5, name: "Hollow", url: "/" },
      { id: 6, name: "Pipa", url: "/" },
      { id: 7, name: "Hitam", url: "/" },
      { id: 8, name: "Baja Ringan", url: "/" },
      { id: 9, name: "Baja Besi", url: "/" },
      { id: 10, name: "Tangki", url: "/" },
      { id: 11, name: "Stainless", url: "/" },
      { id: 12, name: "Triplek", url: "/" },
      { id: 13, name: "Floor Deck", url: "/" },
      { id: 14, name: "Gravting", url: "/" },
      { id: 15, name: "Kawat", url: "/" },
      { id: 16, name: "Wool", url: "/" },
      { id: 17, name: "Atap", url: "/" },
    ];
    setTag(list);
  };

  useEffect(() => {
    tags();
  }, []);

  return (
    <div className="flex flex-col p-2 max-w-[1170px] gap-5 mx-auto">
      <figure className="lg:w-[370px] w-[270px] mt-5">
        <Link href="/">
          <Image priority src={logo} alt="logo"></Image>
        </Link>
      </figure>
      <div className="flex flex-wrap flex-row mt-5 w-full justify-between gap-6">
        <div className="flex flex-col gap-5 w-full lg:w-4/12">
          <h2 className="text-[17px] font-bold text-white">Tentang Kami</h2>
          <p className="text-white text-[13px]">
            Kami fokus melayani penjualan Besi Baja - Stainless Steel - Pipa PVC
            & Mesin Teknik yang lebih LENGKAP & Berkualitas dalam penyediaan
            kebutuhan Kontruksi di berbagai sektor bangunan baik itu Gudang
            Pabrik, Rumah tinggal, Ruko, Rukan, Gedung Perkantoran, Sekolah,
            Pabrik, dan lain sebagainya.
          </p>
        </div>
        {/* Footer Menu */}
        <div className="flex flex-col gap-5 ">
          <h2 className="text-[17px] font-bold text-white">Lebih Dekat</h2>
          <ul className=" text-white flex flex-col text-[14px] items-start gap-2">
            <Link href="/">
              <li className="hover:text-secondary hover:scale-105 transition-all">
                <p>Tentang kami</p>
              </li>
            </Link>
            <Link href="/">
              <li className="hover:text-secondary hover:scale-105 transition-all">
                <p>Karir</p>
              </li>
            </Link>
            <Link href="/">
              <li className="hover:text-secondary hover:scale-105 transition-all">
                <p>Press Release</p>
              </li>
            </Link>
            <Link href="/">
              <li className="hover:text-secondary hover:scale-105 transition-all">
                <p>Artikel</p>
              </li>
            </Link>
          </ul>
        </div>
        <div className="flex flex-col gap-5 ">
          <h2 className="text-[17px] font-bold text-white">Sosial Media</h2>

          <ul className=" text-white flex flex-col gap-2 text-[14px] items-start">
            <Link
              target="_blank"
              href="https://www.instagram.com/cikande_indobaja/?hl=en"
            >
              <li className="hover:text-secondary hover:scale-105 transition-all">
                <p>Instagram</p>
              </li>
            </Link>
            <Link
              target="_blank"
              href="https://www.facebook.com/Cikande-indobaja-mandiri-100490618805256/"
            >
              <li className="hover:text-secondary hover:scale-105 transition-all">
                <p>Facebook</p>
              </li>
            </Link>
            <Link
              target="_blank"
              href="https://www.tiktok.com/@cikandeindobajamandiri"
            >
              <li className="hover:text-secondary hover:scale-105 transition-all">
                <p>TikTok</p>
              </li>
            </Link>
            <Link
              target="_blank"
              href="https://www.youtube.com/@pt.cikandeindobajamandiri2866"
            >
              <li className="hover:text-secondary hover:scale-105 transition-all">
                <p>Youtube</p>
              </li>
            </Link>
          </ul>
        </div>
        <div className="flex flex-col gap-5 ">
          <h2 className="text-[17px] font-bold text-white">Partnership</h2>

          <ul className=" text-white flex flex-col gap-2 text-[14px] items-start">
            <Link href="/">
              <li className="hover:text-secondary hover:scale-105 transition-all">
                <p>Menjadi Afiliasi</p>
              </li>
            </Link>
            <Link href="/">
              <li className="hover:text-secondary hover:scale-105 transition-all">
                <p>Pasang Iklan</p>
              </li>
            </Link>
            <Link href="/">
              <li className="hover:text-secondary hover:scale-105 transition-all">
                <p>Distributor</p>
              </li>
            </Link>
            <Link href="/">
              <li className="hover:text-secondary hover:scale-105 transition-all">
                <p>Agen</p>
              </li>
            </Link>
          </ul>
        </div>
        <div className="flex flex-col gap-5 ">
          <h2 className="text-[17px] font-bold text-white">Bantuan</h2>

          <ul className=" text-white flex flex-col gap-2 text-[14px] items-start">
            <Link href="/">
              <li className="hover:text-secondary hover:scale-105 transition-all">
                <p>Pusat Pengaduan</p>
              </li>
            </Link>
            <Link href="/">
              <li className="hover:text-secondary hover:scale-105 transition-all">
                <p>100% garansi</p>
              </li>
            </Link>
            <Link href="/">
              <li className="hover:text-secondary hover:scale-105 transition-all">
                <p>Hubungi kami</p>
              </li>
            </Link>
            <Link href="/">
              <li className="hover:text-secondary hover:scale-105 transition-all">
                <p>Pusat pengembalian</p>
              </li>
            </Link>
          </ul>
        </div>
        {/* Footer Menu */}
      </div>
      <div className="flex flex-col">
        <h2 className="text-white font-bold text-[18px]">Produk Tag</h2>
        <div className="flex flex-wrap gap-3 mt-5">
          {tag.map((v) => {
            return (
              <a
                className="bg-[#f5f5f5] text-[14px] w-[95px] text-center  font-medium rounded-lg hover:bg-[#c1c1c1] hover:text-white transition-all"
                href="/"
              >
                {v.name}
              </a>
            );
          })}
        </div>
      </div>
      <div className="flex justify-between pb-5 text-white">
        <h2 className="text-[12px] font-light">
          Copyright &copy; Cikande Indobaja Mandiri 2023
        </h2>
        <h2 className="text-[12px] font-light">All Rights Reserved</h2>
      </div>
    </div>
  );
};

export default Footer;
