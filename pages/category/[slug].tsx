import { gql, GraphQLClient } from "graphql-request";
import React from "react";
import CategoryMenu from "../../components/molecules/CategoryMenu";
import MainNavigation from "../../components/molecules/MainNavigation";
import TopMenu from "../../components/molecules/TopMenu";
import Footer from "../../components/organisms/Footer";

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
    products(first: 4) {
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
    categories {
      categorySlug
    }
  }
`;

export async function getStaticPaths() {
  const { categories }: any = await graphcms.request(SLUGLIST);
  return {
    paths: categories.map((category: any) => ({
      params: { slug: category.categorySlug },
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
      products,
    },
    revalidate: 10,
  };
}

const CategoryPost = ({ categories }: any) => {
  return (
    <>
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

      <div className="max-w-[1170px] h-screen mx-auto flex justify-center items-center">
        KONTEN NYA DISINI
      </div>
      <div className="bg-[#575757]">
        <Footer />
      </div>
    </>
  );
};

export default CategoryPost;
