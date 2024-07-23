import type { NextPage } from "next";
import Head from "next/head";
import TopMenu from "../components/molecules/TopMenu";
import MainNavigation from "../components/molecules/MainNavigation";
import CategoryMenu from "../components/molecules/CategoryMenu";
import { GraphQLClient, gql } from "graphql-request";
import Slider from "../components/molecules/Slider";
import { motion } from "framer-motion";
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

import SideBar from "../components/molecules/SideBar";
import Services from "../components/organisms/Services";
import Clients from "../components/organisms/Clients";

import Articles from "../components/organisms/Articles";
import FeaturedArticle from "../components/organisms/FeaturedArticle";
import Testimonials from "../components/organisms/Testimonials";
import Teams from "../components/molecules/Teams";
import { api } from "../lib/graphql/api";
import { TEAM } from "../lib/graphql/query";

const graphcms = new GraphQLClient(
  "https://ap-southeast-2.cdn.hygraph.com/content/clavgu89u2wfb01t4dyh4grkz/master"
);

const QUERY = gql`
  {
    featureds(last: 1, where: { isTrue: true }) {
      id
      articles {
        articleTitle
        articlePhoto {
          url
        }
      }
    }
    articles(last: 3) {
      id
      excerpt
      articleTitle
      articleSlug
      articlePhoto {
        url
      }
      contentArtikel {
        html
      }
    }
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
    products(first: 9, skip: 2) {
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

export async function getServerSideProps() {
  const { categories, sliders, products, articles, featureds } =
    await graphcms.request(QUERY);
  const { teams }: any = await api.request(TEAM);
  return {
    props: {
      categories,
      sliders,
      products,
      articles,
      featureds,
      teams,
    },
  };
}

const Home: NextPage = ({
  categories,
  sliders,
  products,
  articles,
  featureds,
  teams,
}: any) => {
  SwiperCore.use([Autoplay, Navigation, Pagination, Scrollbar, A11y]);

  return (
    <div className=" bg-mainBg">
      <Head>
        <title>Cikande Indobaja Mandiri | Home</title>
        <meta property="og:title" content="Cikande Indobaja Mandiri" />
        <meta
          name="description"
          content="Fokus kami melayani penjualan Besi Baja - Stainless Steel - Pipa PVC & Mesin Teknik yang lebih LENGKAP & Berkualitas dalam penyediaan kebutuhan Kontruksi di berbagai sektor bangunan baik itu Gudang Pabrik, Rumah tinggal, Ruko, Rukan, Gedung Perkantoran, Sekolah, Pabrik, dan lain sebagainya. "
          key="desc"
        />
        <meta
          property="og:description"
          content="Fokus kami melayani penjualan Besi Baja - Stainless Steel - Pipa PVC & Mesin Teknik yang lebih LENGKAP & Berkualitas dalam penyediaan kebutuhan Kontruksi di berbagai sektor bangunan baik itu Gudang Pabrik, Rumah tinggal, Ruko, Rukan, Gedung Perkantoran, Sekolah, Pabrik, dan lain sebagainya. "
        />
        <meta property="og:image" content="/favicon.ico" />
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
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
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
        </motion.div>
      </main>

      <section className="flex lg:flex-row flex-col-reverse max-w-[1170px] p-5 lg:p-0 lg:items-start mt-10 mx-auto lg:justify-between  ">
        <SideBar sideBar={products} />
        <div className="flex flex-wrap lg:justify-between justify-center lg:w-10/12">
          {products.map((product: any, index: number) => (
            <div key={index}>
              <ProductCard
                productTitle={product.productTitle}
                homeDescription={product.homeDescription}
                productSlug={product.productSlug}
                productPhoto1={product.productPhoto1}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="w-full bg-gray-50 mt-10">
        <Services />
      </section>

      {/*
      <section>
        <Clients />
      </section>
             */}

      <section className="w-full bg-teamBg bg-cover bg-no-repeat bg-center bg-fixed">
        <Teams teams={teams} />
      </section>

      <section className="max-w-[1170px] mx-auto my-10">
        <Testimonials />
      </section>

      <section className="max-w-[1170px] mx-auto my-10">
        <div className="flex lg:flex-row p-5 flex-col gap-10 items-center justify-center">
          {featureds.map((v: any) =>
            v.articles.map((i: any, index: any) => {
              return (
                <FeaturedArticle
                  key={index}
                  judul={i.articleTitle}
                  gambar={i.articlePhoto.url}
                />
              );
            })
          )}

          <div className="flex flex-col lg:gap-[25px] gap-[75px] lg:w-6/12">
            {articles
              ? articles.map((article: any, index: any) => (
                  <Articles
                    key={index}
                    judul={article.articleTitle}
                    konten={article.excerpt}
                    gambar={article.articlePhoto.url}
                    link={/artikel/ + article.articleSlug}
                  />
                ))
              : "kosong"}
          </div>
        </div>
      </section>

      <div className="bg-[#575757]">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
