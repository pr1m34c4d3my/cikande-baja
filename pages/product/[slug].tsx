import { gql, GraphQLClient } from "graphql-request";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import CategoryMenu from "../../components/molecules/CategoryMenu";
import MainNavigation from "../../components/molecules/MainNavigation";
import TopMenu from "../../components/molecules/TopMenu";

type Props = {};

const graphcms = new GraphQLClient(
  "https://api-ap-southeast-2.hygraph.com/v2/clavgu89u2wfb01t4dyh4grkz/master"
);

const ALL = gql`
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

const QUERY = gql`
  query product($slug: String!) {
    product(where: { productSlug: $slug }) {
      id
      productTitle
      productSlug
      productDescription
      deliveryDate
      deliveryArea
      productType
      productSize
      productDetail
      fungsiDanPengukuran {
        html
      }
      category {
        id
        categoryTitle
        categorySlug
      }
      productPhoto1 {
        id
        url
      }
      productPhoto2 {
        id
        url
      }
    }
  }
`;

const SLUGLIST = gql`
  {
    products {
      productSlug
    }
  }
`;

export async function getStaticPaths() {
  const { products }: any = await graphcms.request(SLUGLIST);
  return {
    paths: products.map((product: any) => ({
      params: { slug: product.productSlug },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const slug = params.slug;
  const data = await graphcms.request(QUERY, { slug });
  const product = data.product;
  const { categories, products, sliders } = await graphcms.request(ALL);
  return {
    props: {
      categories,
      product,
    },
    revalidate: 10,
  };
}

const ProductPost = ({ categories, product }: any) => {
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

      <div className="flex flex-row max-w-[1170px] mx-auto justify-between">
        <div>
          <Image
            src={product.productPhoto1.url}
            alt="#"
            width={320}
            height={250}
          ></Image>
        </div>
        <div>Detail</div>
      </div>
    </>
  );
};

export default ProductPost;
