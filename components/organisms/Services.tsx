import Image from "next/image";
import React from "react";

type Props = {};

const Services = (props: Props) => {
  return (
    <>
      <div className="py-16 bg-gray-50 overflow-hidden">
        <div className="container m-auto px-6 space-y-8 text-gray-500 md:px-12">
          <div>
            <span className="text-black text-[32px] font-bold">
              Layanan Utama Kami
            </span>
            <h2 className="mt-4 text-[12px] text-gray-500 font-light md:text-[16px]">
              Alasan Utama Harus Memilih Cikande Indobaja Mandiri{" "}
            </h2>
          </div>
          <div className="mt-16 grid border divide-x divide-y rounded-xl overflow-hidden sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-3 xl:grid-cols-4">
            <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
              <div className="relative p-8 space-y-8 flex flex-col justify-between">
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/3967/3967518.png"
                  className="w-10"
                  alt="kosong"
                  width="512"
                  height="512"
                />

                <div className="space-y-2">
                  <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-main">
                    Proses Cepat & Mudah
                  </h5>
                  <p className="text-sm text-gray-600">
                    Kami percaya bahwa Waktu adalah Uang, oleh karena itu, kami
                    menyediakan armada yang memadai untuk melakukan pengiriman
                    yang tepat waktu kepada Anda.
                  </p>
                </div>
                <a
                  href="#"
                  className="flex justify-between items-center group-hover:text-main"
                >
                  <span className="-translate-x-4 font-bold opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    <button className="w-[120px] h-[30px] text-[12px] bg-main rounded-xl hover:bg-white hover:scale-110 hover:text-main transition-all text-white font-bold mt-5">
                      Hubungi Kami
                    </button>
                  </span>
                </a>
              </div>
            </div>
            <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
              <div className="relative p-8 space-y-8 flex flex-col justify-between">
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/1177/1177771.png"
                  className="w-10"
                  alt="burger illustration"
                  width="512"
                  height="512"
                />

                <div className="space-y-2">
                  <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-main">
                    Akurasi & Presisi
                  </h5>
                  <p className="text-sm text-gray-600">
                    Ketepatan barang yang telah dipesan dengan yang dikirim ke
                    lokasi Anda adalah jaminan keakuratan dari kami.
                  </p>
                </div>
              </div>
              <div className="p-8 ">
                <a
                  href="#"
                  className="flex justify-between items-center group-hover:text-main"
                >
                  <span className="-translate-x-4 font-bold opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    <button className="w-[120px] h-[30px] text-[12px] bg-main rounded-xl hover:bg-white hover:scale-110 hover:text-main transition-all text-white font-bold mt-5">
                      Hubungi Kami
                    </button>
                  </span>
                </a>
              </div>
            </div>
            <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
              <div className="relative p-8 space-y-8">
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/2706/2706950.png"
                  className="w-10"
                  width="512"
                  height="512"
                  alt="burger illustration"
                />

                <div className="space-y-2">
                  <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-main">
                    Pelayanan Prima
                  </h5>
                  <p className="text-sm text-gray-600">
                    Keramahan dan respon cepat dalam Pelayanan adalah prioritas
                    utama kepada setiap pelanggan kami.
                  </p>
                </div>
              </div>
              <div className="p-8">
                <a
                  href="#"
                  className="flex justify-between items-center group-hover:text-main"
                >
                  <span className="-translate-x-4 font-bold opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    <button className="w-[120px] h-[30px] text-[12px] bg-main rounded-xl hover:bg-white hover:scale-110 hover:text-main transition-all text-white font-bold mt-5">
                      Hubungi Kami
                    </button>
                  </span>
                </a>
              </div>
            </div>
            <div className="relative group bg-gray-100 transition hover:z-[1] hover:shadow-2xl lg:hidden xl:block">
              <div className="relative p-8 space-y-8 border-dashed rounded-lg transition duration-300 group-hover:bg-white group-hover:border group-hover:scale-90">
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/456/456115.png"
                  className="w-10"
                  width="512"
                  height="512"
                  alt="burger illustration"
                />

                <div className="space-y-2">
                  <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-main">
                    Kualitas Terjamin
                  </h5>
                  <p className="text-sm text-gray-600">
                    Kami hanya menjual produk dengan kualitas mutu terbaik dan
                    standard SNI.
                  </p>
                </div>
                <a
                  href="#"
                  className="flex justify-between items-center group-hover:text-main"
                >
                  <span className="-translate-x-4 font-bold opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    <button className="w-[120px] h-[30px] text-[12px] bg-main rounded-xl hover:bg-white hover:scale-110 hover:text-main transition-all text-white font-bold mt-5">
                      Hubungi Kami
                    </button>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
