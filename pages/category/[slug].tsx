import { gql, GraphQLClient } from "graphql-request";
import React from "react";
import CategoryMenu from "../../components/molecules/CategoryMenu";
import MainNavigation from "../../components/molecules/MainNavigation";
import TopMenu from "../../components/molecules/TopMenu";

const graphcms = new GraphQLClient(
  "https://ap-southeast-2.cdn.hygraph.com/content/clavgu89u2wfb01t4dyh4grkz/master"
);

const ALL = gql`
  query products {
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
      products {
        id
        productTitle
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
    revalidate: 10,
  };
}

const CategoryPost = ({ category, categories, products }: any) => {
  return (
    <div className="bg-mainBg">
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

      {category.products.map((v: any, index: number) => {
        return (
          <h1 key={v.id} className="font-bold text-[52px]">
            {v.productTitle}
          </h1>
        );
      })}
    </div>
  );
};

export default CategoryPost;
