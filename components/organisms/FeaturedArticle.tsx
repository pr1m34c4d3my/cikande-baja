import React from "react";
import { GraphQLClient, gql } from "graphql-request";
import Image from "next/image";

const FeaturedArticle = ({ judul, konten, gambar }: any) => {
  return (
    <div className="flex flex-col-reverse overflow-hidden relative w-[500px] h-[340px] bg-slate-500 rounded-2xl">
      <div className="relative">
        <Image src={gambar} alt={judul} width={500} height={500} className="" />
      </div>

      <h1 className="text-[30px] mt-10 font-bold text-center">{judul}</h1>
    </div>
  );
};

export default FeaturedArticle;
