import { graphql } from "gql.tada";

export const mediaIdFragment = graphql(`
  fragment MediaId on Media {
    id
  }
`);

export const staffCharacterMediaFragment = graphql(
  `
    fragment StaffCharacterMedia on MediaEdge {
      media: node {
        ...MediaId
      }
      characterRole
    }
  `,
  [mediaIdFragment],
);

export const staffRoleMediaFragment = graphql(
  `
    fragment StaffRoleMedia on MediaEdge {
      media: node {
        ...MediaId
      }
      staffRole
    }
  `,
  [mediaIdFragment],
);
