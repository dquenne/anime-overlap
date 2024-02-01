import { graphql } from "gql.tada";

export const staffCharacterMediaFragment = graphql(`
  fragment StaffCharacterMedia on MediaEdge {
    media: node {
      id
    }
    characterRole
  }
`);

export const staffRoleMediaFragment = graphql(`
  fragment StaffRoleMedia on MediaEdge {
    media: node {
      id
    }
    staffRole
  }
`);
