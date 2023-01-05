import type { NextPage } from "next";
import Head from "next/head";
import TopMenu from "../components/molecules/TopMenu";
import MainNavigation from "../components/molecules/MainNavigation";
import CategoryMenu from "../components/molecules/CategoryMenu";
import { GraphQLClient, gql } from "graphql-request";
import Header from "../components/organisms/Header";
import Slider from "../components/molecules/Slider";
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
import ProductCard from "../components/molecules/ProductCard";

const graphcms = new GraphQLClient(
  "https://api-ap-southeast-2.hygraph.com/v2/clavgu89u2wfb01t4dyh4grkz/master"
);

const QUERY = gql`
  {
    categories {
      id
      categoryTitle
      categorySlug
    }
    sliders {
      id
      sliderImage {
        url
      }
    }
    products(first: 6) {
      productPhoto1 {
        url
      }
      productPhoto2 {
        url
      }
      category {
        categoryTitle
      }
      tag {
        title
      }
      productTitle
      productDescription
      homeDescription
      productSlug
      stock
      deliveryDate
      deliveryArea
      fungsiDanPengukuran {
        html
      }
      productType
      productSize
      productDetail
    }
  }
`;

export async function getStaticProps() {
  const { categories, sliders, products } = await graphcms.request(QUERY);
  return {
    props: {
      categories,
      sliders,
      products,
    },
    revalidate: 10,
  };
}

const Home: NextPage = ({ categories, sliders, products }: any) => {
  SwiperCore.use([Autoplay, Navigation, Pagination, Scrollbar, A11y]);
  return (
    <>
      <Head>
        <title>Cikande Indobaja Mandiri | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* HEADER Start */}
      <TopMenu />

      <div className="bg-[#575757]">
        <MainNavigation />
      </div>

      {/* Category Menu */}
      <div className="bg-[#F9F9F9] w-full">
        <ul className="flex gap-10 max-w-[1170px] mx-auto justify-center items-center py-3">
          {categories.map((category: any, index: number) => {
            return (
              <li
                key={index}
                className="lg:text-[14px] lg:block hidden font-medium hover:text-secondary hover:scale-105 transition-all"
              >
                <CategoryMenu
                  categoryList={[
                    {
                      id: category.id,
                      title: category.categoryTitle,
                      link: category.categorySlug,
                    },
                  ]}
                />
              </li>
            );
          })}
        </ul>
      </div>

      {/* HEADER end */}

      <main className="w-full">
        <Swiper
          slidesPerView={1}
          autoplay={{
            delay: 5000,
          }}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="max-w-[1366px] text-black"
        >
          {sliders.map((slider: any, index: number) => (
            <SwiperSlide key={index}>
              <Slider sliderImage={slider.sliderImage} />
            </SwiperSlide>
          ))}
        </Swiper>
      </main>

      <section className="flex lg:flex-row flex-col-reverse max-w-[1170px] items-center lg:items-start mt-10 mx-auto lg:justify-between  ">
        <div className="flex flex-col justify-start w-4/12 ">
          <div className="flex flex-col gap-5 min-h-[350px]">
            <h1 className="font-bold text-[18px]">Produk Paling Laris</h1>
            <ul className="flex flex-col gap-1 text-[12px] text-secondary underline cursor-pointer">
              <li>Besi</li>
              <li>Alumunium Foil Bubble</li>
              <li>Expnaded Metal</li>
              <li>Besi Siku</li>
              <li>Plat Border</li>
            </ul>
            <div>
              <button className="bg-[#F5F5F5] text-[12px] h-[30px] w-[150px] rounded-lg font-bold hover:border-[1px] hover:bg-white hover:text-main transition-all">
                Lihat Produk Lain
              </button>
            </div>
          </div>
          <div>Banner Iklan</div>
        </div>
        <div className="flex flex-wrap justify-between gap-2 w-8/12">
          {products.map((product: any, index: number) => (
            <ProductCard
              key={index}
              productTitle={product.productTitle}
              homeDescription={product.homeDescription}
              productSlug={product.productSlug}
              productPhoto1={product.productPhoto1}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
