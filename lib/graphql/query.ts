import { gql } from "graphql-request";

export const TEAM = gql`
  query teams {
    teams {
      id
      name
      phoneNumber
    }
  }
`;

export const ARTICLE = gql`
  query article($slug: String!) {
    article(where: { articleSlug: $slug }) {
      id
      articleSlug
      articleTitle
      articlePhoto {
        url
      }
      contentArtikel {
        html
      }
    }
  }
`;
