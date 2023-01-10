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
import Footer from "../components/organisms/Footer";
import Teams from "../components/molecules/Teams";
import ReviewCard from "../components/molecules/ReviewCard";
import Testimonials from "../components/organisms/Testimonials";
import SideBar from "../components/molecules/SideBar";
import Image from "next/image";
import Services from "../components/organisms/Services";

const graphcms = new GraphQLClient(
  "https://ap-southeast-2.cdn.hygraph.com/content/clavgu89u2wfb01t4dyh4grkz/master"
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
    <div>
      <Head>
        <title>Cikande Indobaja Mandiri | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* HEADER Start */}
      <div className="w-full bg-white">
        <TopMenu />
      </div>

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
        <SideBar />
        <div className="flex flex-wrap justify-between w-10/12">
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

      <section className="mt-10">
        <Services />
      </section>

      <section className="max-w-[1366px] mx-auto">
        <Teams />
      </section>

      <section className="max-w-[1170px] mx-auto my-10">
        <Testimonials />
      </section>

      <div className="bg-[#575757]">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
