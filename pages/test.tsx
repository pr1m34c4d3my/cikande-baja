import React from "react";
import Header from "../components/organisms/Header";
import { GraphQLClient, gql } from "graphql-request";
import TopMenu from "../components/molecules/TopMenu";

type Props = {};

const graphcms = new GraphQLClient(
  "https://api-ap-southeast-2.hygraph.com/v2/clavgu89u2wfb01t4dyh4grkz/master"
);

const QUERY = gql`
  {
    categories {
      id
      categoryTitle
    }
  }
`;

export async function getStaticProps() {
  const { categories } = await graphcms.request(QUERY);
  return {
    props: {
      categories,
    },
    revalidate: 10,
  };
}

const test = ({ categories }: any) => {
  return (
    <>
      <ul>
        {categories.map((category: any, index: number) => (
          <li
            key={index}
            className="text-[14px] font-medium hover:text-secondary hover:scale-105 transition-all"
          >
            <Header
              categories={[{ id: category.id, title: category.categoryTitle }]}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default test;
