import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

type Props = {};

const Clients = (props: Props) => {
  SwiperCore.use([Autoplay, Navigation, Pagination, Scrollbar, A11y]);
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 space-y-8 md:px-12 lg:px-56">
        <div className="m-auto text-center lg:w-7/12">
          <h2 className="text-[32px] font-bold md:text-[32px]">
            Perusahaan terbaik di Indonesia adalah partner kami
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          <div className="p-4">
            <Image
              src="https://tailus.io/sources/blocks/company-site/preview/images/clients/airbnb.svg"
              className=""
              alt=""
              width={130}
              height={20}
            />
          </div>
          <div className="p-4">
            <Image
              src="https://tailus.io/sources/blocks/company-site/preview/images/clients/client-8.png"
              className="w-32 "
              alt=""
              width={130}
              height={20}
            />
          </div>
          <div className="p-4">
            <Image
              src="https://tailus.io/sources/blocks/company-site/preview/images/clients/client-3.png"
              className="w-32 "
              alt=""
              width={130}
              height={20}
            />
          </div>
          <div className="p-4">
            <Image
              src="https://tailus.io/sources/blocks/company-site/preview/images/clients/client-1.png"
              className="w-32 "
              alt=""
              width={130}
              height={20}
            />
          </div>
          <div className="p-4">
            <Image
              src="https://tailus.io/sources/blocks/company-site/preview/images/clients/tailus.svg"
              className="w-32"
              alt=""
              width={130}
              height={20}
            />
          </div>
          <div className="p-4">
            <Image
              src="https://tailus.io/sources/blocks/company-site/preview/images/clients/microsoft.svg"
              className="w-32"
              alt=""
              width={130}
              height={20}
            />
          </div>
          <div className="p-4">
            <Image
              src="https://tailus.io/sources/blocks/company-site/preview/images/clients/coty.svg"
              className="w-20"
              alt=""
              width={130}
              height={20}
            />
          </div>
          <div className="p-4">
            <Image
              src="https://tailus.io/sources/blocks/company-site/preview/images/clients/client-4.png"
              className="w-24"
              alt=""
              width={130}
              height={20}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
