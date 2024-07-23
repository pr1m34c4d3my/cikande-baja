import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const ArticleCard = ({
  articleTitle,
  articlePhoto,
  articleSlug,
  excerpt,
}: any) => {
  const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };
  return (
    <div className="lg:w-[270px] bg-white h-[410px] mb-5 rounded-2xl flex flex-col hover:scale-105 shadow-lg hover:shadow-2xl ease-out duration-200 p-3 justify-between overflow-hidden border-[#D1D1D1] border-[1px]">
      <div className="flex flex-col">
        <div className="lg:w-[240px] mt-2 h-[220px] rounded-2xl bg-slate-200 overflow-hidden shadow-2xl ">
          <Link href={/artikel/ + articleSlug}>
            <Image
              className="object-cover w-full h-full"
              src={articlePhoto.url}
              alt={articleTitle}
              width={320}
              height={250}
            />
          </Link>
        </div>
        <div className="flex flex-col items-start justify-start mt-5">
          <Link href={/artikel/ + articleSlug}>
            <h2 className="font-bold text-[15px] hover:scale-110 transition-all">
              {articleTitle}
            </h2>
          </Link>
          <p className="font-light text-[11px]">{truncateText(excerpt, 60)}</p>
        </div>
      </div>
      <div className="flex flex-row justify-end">
        <Link href={/artikel/ + articleSlug}>
          <button className="mt-5 bg-[#db2d2d] text-[12px] w-[120px] text-white py-1 px-2 rounded-xl font-bold hover:border-[#e70302] hover:bg-white hover:text-[#e70302] hover:scale-110 transition-all">
            Baca
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
