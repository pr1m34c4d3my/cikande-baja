import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {};

const ProductCard = ({
  productTitle,
  homeDescription,
  productPhoto1,
  productSlug,
}: any) => {
  return (
    <div className="lg:w-[270px] bg-white h-[410px] mb-5 rounded-2xl flex flex-col hover:scale-105 shadow-lg hover:shadow-2xl ease-out duration-200 p-3 justify-between overflow-hidden border-[#D1D1D1] border-[1px]">
      <div className="flex flex-col">
        <div className="lg:w-[240px] mt-2 h-[220px] rounded-2xl bg-slate-200 overflow-hidden shadow-2xl ">
          <Link href={/product/ + productSlug}>
            <Image
              className="object-cover w-full h-full"
              src={productPhoto1.url}
              alt="rockwoll"
              width={320}
              height={250}
            />
          </Link>
        </div>
        <div className="flex flex-col items-start justify-start mt-5">
          <Link href={/product/ + productSlug}>
            <h2 className="font-bold text-[15px] hover:scale-110 transition-all">
              {productTitle}
            </h2>
          </Link>
          <p className="font-light text-[11px]">{homeDescription}</p>
        </div>
      </div>
      <div className="flex flex-row justify-end">
        <Link
          href={`https://wa.me/6287880807693?text=Halo%20admin%20Cikande%20Indobaja%20Mandiri%2C%20saya%20ingin%20membeli%20produk%20*${productTitle}*.%0A%0ATerima%20kasih.`}
          target="_blank"
        >
          <button className="mt-5 bg-[#db2d2d] text-[12px] w-[120px] text-white py-1 px-2 rounded-xl font-bold hover:border-[#e70302] hover:bg-white hover:text-[#e70302] hover:scale-110 transition-all">
            Beli Produk
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
