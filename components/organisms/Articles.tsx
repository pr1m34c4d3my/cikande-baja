import React from "react";
import { GraphQLClient, gql } from "graphql-request";
import Image from "next/image";

type Props = {};

const Articles = ({ judul, gambar, konten }: any) => {
  return (
    <div className="flex gap-5 h-[150px]">
      <Image
        src={gambar}
        alt={judul}
        width={150}
        height={150}
        className="bg-slate-500 rounded-2xl"
      ></Image>
      <div className="flex flex-col w-8/12">
        <h1 className="text-[20px] font-bold">{judul}</h1>
        <p className="text-[10px]">{konten}</p>
      </div>
    </div>
  );
};

export default Articles;
