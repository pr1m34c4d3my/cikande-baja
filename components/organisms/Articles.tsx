import React from "react";
import { GraphQLClient, gql } from "graphql-request";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Articles = ({ judul, gambar, konten, link }: any) => {
  return (
    <div className="flex gap-5 h-[150px]">
      <Link href={link}>
        <Image
          src={gambar}
          alt={judul}
          width={150}
          height={150}
          className="bg-slate-500 rounded-2xl"
        ></Image>
      </Link>
      <div className="flex flex-col lg:w-8/12">
        <Link href={link}>
          <h1 className="lg:text-[20px] text-[14px] font-bold">{judul}</h1>
        </Link>
        <p className="lg:text-[10px] text-[10px]">{konten}</p>
      </div>
    </div>
  );
};

export default Articles;
