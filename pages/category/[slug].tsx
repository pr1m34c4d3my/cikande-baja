import { gql, GraphQLClient } from "graphql-request";
import Head from "next/head";
import React from "react";
import CategoryMenu from "../../components/molecules/CategoryMenu";
import MainNavigation from "../../components/molecules/MainNavigation";
import ProductCard from "../../components/molecules/ProductCard";
import SideBar from "../../components/molecules/SideBar";
import TopMenu from "../../components/molecules/TopMenu";
import Footer from "../../components/organisms/Footer";

const graphcms = new GraphQLClient(
  "https://api-ap-southeast-2.hygraph.com/v2/clavgu89u2wfb01t4dyh4grkz/master"
);

const ALL = gql`
  query products {
    categories(first: 100) {
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
    products {
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

const QUERY = gql`
  query category($slug: String!) {
    category(where: { categorySlug: $slug }) {
      id
      categoryTitle
      categorySlug
      products(first: 100) {
        id
        productTitle
        productSlug
        homeDescription
        productPhoto1 {
          id
          url
        }
      }
    }
  }
`;

const SLUGLIST: string = gql`
  {
    categories(first: 100) {
      categorySlug
    }
  }
`;

export async function getServerSideProps({ params }: any) {
  const slug: string = params.slug;
  const data: any = await graphcms.request(QUERY, { slug });
  const category: string = data.category;
  const { categories, products, sliders } = await graphcms.request(ALL);
  return {
    props: {
      categories,
      products,
      category,
    },
  };
}

const CategoryPost = ({ category, categories, products }: any) => {
  return (
    <div className="bg-mainBg">
      <Head>
        <title>{`Cikande Indobaja Mandiri | ${category.categoryTitle}`}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:title"
          content={`Produk ${category.categoryTitle} dari Cikande Indobaja Mandiri`}
        />
        <meta property="og:description" content={category.categoryTitle} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />
        <meta property="og:type" content="website" />
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

      <section className="flex max-w-[1170px] my-10 mx-auto">
        <SideBar sideBar={products} />
        <div className="flex w-11/12 flex-wrap justify-center gap-5">
          {category.products.map((v: any, index: number) => {
            return (
              <ProductCard
                key={index}
                productTitle={v.productTitle}
                homeDescription={v.homeDescription}
                productSlug={v.productSlug}
                productPhoto1={v.productPhoto1}
              />
            );
          })}
        </div>
      </section>

      <div className="bg-[#575757]">
        <Footer />
      </div>
    </div>
  );
};

export default CategoryPost;
