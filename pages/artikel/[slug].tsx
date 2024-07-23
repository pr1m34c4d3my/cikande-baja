import Head from "next/head";
import React from "react";
import CategoryMenu from "../../components/molecules/CategoryMenu";
import MainNavigation from "../../components/molecules/MainNavigation";
import TopMenu from "../../components/molecules/TopMenu";
import { GraphQLClient, gql } from "graphql-request";
import Footer from "../../components/organisms/Footer";
import Link from "next/link";
import ArticleCard from "../../components/molecules/ArticleCard";
import { api } from "../../lib/graphql/api";
import { ARTICLE } from "../../lib/graphql/query";
import Image from "next/image";

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

export async function getServerSideProps({ params }: any) {
  const slug: any = params.slug;
  const { article } = await api.request(ARTICLE, { slug });
  const { categories, sliders, products, featureds } = await graphcms.request(
    QUERY
  );

  return {
    props: {
      categories,
      sliders,
      products,
      article,
      featureds,
    },
  };
}

const index = ({ categories, sliders, products, article, featureds }: any) => {
  const rich = article.contentArtikel.html;
  const replaced = rich.replace(/\|/g, " <br /> <br />");
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

      <main className="w-full flex flex-col  justify-start items-center p-5 lg:p-10">
        <h1 className="font-bold text-2xl">{article.articleTitle}</h1>

        <div className="lg:w-6/12 w-full lg:p-5 p-0">
          <Image
            src={article.articlePhoto.url}
            alt="Thumbnail"
            width={1000}
            height={1000}
          />
        </div>

        <div className="lg:w-8/12 w-full lg:p-5 p-0">
          <span
            dangerouslySetInnerHTML={{
              __html: replaced,
            }}
          ></span>
        </div>
      </main>

      <div className="bg-[#575757]">
        <Footer />
      </div>
    </div>
  );
};

export default index;
