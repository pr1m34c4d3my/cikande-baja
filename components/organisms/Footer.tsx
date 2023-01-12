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

const AnyReactComponent = ({ text }: any) => <div>{text}</div>;

const Footer = () => {
  const [tag, setTag] = useState<List[]>([]);
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

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
      <div className="flex lg:flex-row flex-col my-5">
        <div className="flex-col">
          <figure className="lg:w-[370px] w-[270px] mt-5">
            <Link href="/">
              <Image priority src={logo} alt="logo"></Image>
            </Link>
          </figure>
          <div className="flex flex-wrap flex-row mt-5 w-full justify-between gap-6">
            <div className="flex flex-col gap-5 w-full lg:w-10/12">
              <h2 className="text-[20px] font-bold text-white">Tentang Kami</h2>
              <p className="text-white text-[13px]">
                Kami fokus melayani penjualan Besi Baja - Stainless Steel - Pipa
                PVC & Mesin Teknik yang lebih LENGKAP & Berkualitas dalam
                penyediaan kebutuhan Kontruksi di berbagai sektor bangunan baik
                itu Gudang Pabrik, Rumah tinggal, Ruko, Rukan, Gedung
                Perkantoran, Sekolah, Pabrik, dan lain sebagainya.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.443325708651!2d106.36392071486621!3d-6.205104362512002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e42033c38bfbe55%3A0x22bdc88f5b4d15e1!2sPT.%20Cikande%20Indobaja%20Mandiri!5e0!3m2!1sid!2sid!4v1673335829167!5m2!1sid!2sid"
            className="rounded-xl w-full h-[300px] lg:w-[600px] lg:h-[250px]"
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-[80px] lg:justify-between ">
        {/* Footer Menu */}
        <div className="flex flex-col gap-5 ">
          <h2 className="text-[20px] cursor-pointer hover:text-secondary border-b-2  ease-in duration-200 font-bold text-white">
            Lebih Dekat
          </h2>
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
          <h2 className="text-[20px] cursor-pointer hover:text-secondary border-b-2  ease-in duration-200 font-bold text-white">
            Sosial Media
          </h2>

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
          <h2 className="text-[20px] cursor-pointer hover:text-secondary border-b-2  ease-in duration-200 font-bold text-white">
            Partnership
          </h2>

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
          <h2 className="text-[20px] cursor-pointer hover:text-secondary border-b-2  ease-in duration-200 font-bold text-white">
            Bantuan
          </h2>

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
      <div className="flex flex-col mt-5">
        <h2 className="text-white font-bold text-[18px]">Produk Tag</h2>
        <div className="flex flex-wrap gap-3 mt-5">
          {tag.map((v, index) => {
            return (
              <div key={v.id} className="flex">
                <Tag title={v.name} />
              </div>
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
