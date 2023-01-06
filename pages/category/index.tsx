import { gql, GraphQLClient } from "graphql-request";
import React from "react";
import CategoryMenu from "../../components/molecules/CategoryMenu";
import MainNavigation from "../../components/molecules/MainNavigation";
import TopMenu from "../../components/molecules/TopMenu";

type Props = {};
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

const index = ({ categories }: any) => {
  return (
    <div>
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
    </div>
  );
};

export default index;
