import Head from "next/head";
import React from "react";
import CategoryMenu from "../../components/molecules/CategoryMenu";
import MainNavigation from "../../components/molecules/MainNavigation";
import TopMenu from "../../components/molecules/TopMenu";
import { GraphQLClient, gql } from "graphql-request";
import Footer from "../../components/organisms/Footer";
import Link from "next/link";

type Props = {};

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
    products(last: 9) {
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
  const { categories, sliders, products, articles, featureds } =
    await graphcms.request(QUERY);
  return {
    props: {
      categories,
      sliders,
      products,
      articles,
      featureds,
    },
    revalidate: 100,
  };
}

const index = ({ categories, sliders, products, articles, featureds }: any) => {
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

      <main className="h-screen w-full flex flex-col lg:flex-row justify-center items-center">
        COMING SOON - ON SEO SETUP WITH{" "}
        <Link href="https://google.com">GOOGLE.COM</Link>
      </main>

      <div className="bg-[#575757]">
        <Footer />
      </div>
    </div>
  );
};

export default index;
