import { graphql } from "gql.tada";
import {
  staffCharacterMediaFragment,
  staffRoleMediaFragment,
} from "./staffFragments";

export const staffInfoFragment = graphql(`
  fragment StaffInfo on Staff {
    id
    name {
      full
    }
    image {
      medium
    }
  }
`);

/**
 * These queries are doing some questionable stuff. The AniList API is great
 * but it has one troublesome limitation: any list of objects is strictly
 * limited to pages of no more than 25 entries. This is a workaround to avoid
 * making n+1 API calls to AniList to get a full list of IDs. The reason this
 * is split up into 3 queries is that if all 40 pages of each category were in
 * one query, the complexity would be too high.
 *
 * The hook that uses these queries checks if there are still more entries
 * after the first query before using the other queries, meaning for most
 * staff, we'll get all the information we need from one API call.
 *
 * These queries also have to be fully written out for the automatically
 * generated TypeScript definitions to work. (I tried doing a simple map
 * over page number and joining the strings, but gql.tada can't evaluate and
 * parse that)
 */
export const StaffMediaQuery = graphql(
  `
    query staffRoles($staffId: Int) {
      Staff(id: $staffId, sort: FAVOURITES_DESC) {
        ...StaffInfo
        characterMedia1: characterMedia(sort: ID, page: 1, perPage: 25) {
          ...characterMediaPage
        }
        characterMedia2: characterMedia(sort: ID, page: 2, perPage: 25) {
          ...characterMediaPage
        }
        characterMedia3: characterMedia(sort: ID, page: 3, perPage: 25) {
          ...characterMediaPage
        }
        characterMedia4: characterMedia(sort: ID, page: 4, perPage: 25) {
          ...characterMediaPage
        }
        characterMedia5: characterMedia(sort: ID, page: 5, perPage: 25) {
          ...characterMediaPage
        }
        characterMedia6: characterMedia(sort: ID, page: 6, perPage: 25) {
          ...characterMediaPage
        }
        characterMedia7: characterMedia(sort: ID, page: 7, perPage: 25) {
          ...characterMediaPage
        }
        characterMedia8: characterMedia(sort: ID, page: 8, perPage: 25) {
          ...characterMediaPage
        }
        characterMedia9: characterMedia(sort: ID, page: 9, perPage: 25) {
          ...characterMediaPage
        }
        characterMedia10: characterMedia(sort: ID, page: 10, perPage: 25) {
          ...characterMediaPage
        }
        characterMedia11: characterMedia(sort: ID, page: 11, perPage: 25) {
          ...characterMediaPage
        }
        characterMedia12: characterMedia(sort: ID, page: 12, perPage: 25) {
          ...characterMediaPage
        }
        characterMedia13: characterMedia(sort: ID, page: 13, perPage: 25) {
          ...characterMediaPage
        }
        characterMedia14: characterMedia(sort: ID, page: 14, perPage: 25) {
          ...characterMediaPage
        }
        characterMedia15: characterMedia(sort: ID, page: 15, perPage: 25) {
          ...characterMediaPage
        }
        characterMedia16: characterMedia(sort: ID, page: 16, perPage: 25) {
          ...characterMediaPage
        }
        characterMedia17: characterMedia(sort: ID, page: 17, perPage: 25) {
          ...characterMediaPage
        }
        characterMedia18: characterMedia(sort: ID, page: 18, perPage: 25) {
          ...characterMediaPage
        }
        staffMedia1: staffMedia(sort: ID, page: 1, perPage: 25) {
          ...staffMediaPage
        }
        staffMedia2: staffMedia(sort: ID, page: 2, perPage: 25) {
          ...staffMediaPage
        }
        staffMedia3: staffMedia(sort: ID, page: 3, perPage: 25) {
          ...staffMediaPage
        }
        staffMedia4: staffMedia(sort: ID, page: 4, perPage: 25) {
          ...staffMediaPage
        }
        staffMedia5: staffMedia(sort: ID, page: 5, perPage: 25) {
          ...staffMediaPage
        }
        staffMedia6: staffMedia(sort: ID, page: 6, perPage: 25) {
          ...staffMediaPage
        }
        staffMedia7: staffMedia(sort: ID, page: 7, perPage: 25) {
          ...staffMediaPage
        }
      }
    }

    fragment pageInfo on PageInfo {
      total
      perPage
      currentPage
      lastPage
      hasNextPage
    }

    fragment characterMediaPage on MediaConnection {
      pageInfo {
        ...pageInfo
      }
      edges {
        ...StaffCharacterMedia
      }
    }

    fragment staffMediaPage on MediaConnection {
      pageInfo {
        ...pageInfo
      }
      edges {
        ...StaffRoleMedia
      }
    }
  `,
  [staffInfoFragment, staffCharacterMediaFragment, staffRoleMediaFragment],
);

export const StaffCharacterMediaQueryBatch2 = graphql(
  `
    query staffRoles($staffId: Int) {
      Staff(id: $staffId, sort: FAVOURITES_DESC) {
        characterMedia19: characterMedia(sort: ID, page: 19, perPage: 25) {
          ...characterMediaPage
        }
        characterMedia20: characterMedia(sort: ID, page: 20, perPage: 25) {
          ...characterMediaPage
        }
        characterMedia21: characterMedia(sort: ID, page: 21, perPage: 25) {
          ...characterMediaPage
        }
        characterMedia22: characterMedia(sort: ID, page: 22, perPage: 25) {
          ...characterMediaPage
        }
        characterMedia23: characterMedia(sort: ID, page: 23, perPage: 25) {
          ...characterMediaPage
        }
        characterMedia24: characterMedia(sort: ID, page: 24, perPage: 25) {
          ...characterMediaPage
        }
        characterMedia25: characterMedia(sort: ID, page: 25, perPage: 25) {
          ...characterMediaPage
        }
        characterMedia26: characterMedia(sort: ID, page: 26, perPage: 25) {
          ...characterMediaPage
        }
        characterMedia27: characterMedia(sort: ID, page: 27, perPage: 25) {
          ...characterMediaPage
        }
        characterMedia28: characterMedia(sort: ID, page: 28, perPage: 25) {
          ...characterMediaPage
        }
        characterMedia29: characterMedia(sort: ID, page: 29, perPage: 25) {
          ...characterMediaPage
        }
        characterMedia30: characterMedia(sort: ID, page: 30, perPage: 25) {
          ...characterMediaPage
        }
        characterMedia31: characterMedia(sort: ID, page: 31, perPage: 25) {
          ...characterMediaPage
        }
        characterMedia32: characterMedia(sort: ID, page: 32, perPage: 25) {
          ...characterMediaPage
        }
        characterMedia33: characterMedia(sort: ID, page: 33, perPage: 25) {
          ...characterMediaPage
        }
        characterMedia34: characterMedia(sort: ID, page: 34, perPage: 25) {
          ...characterMediaPage
        }
        characterMedia35: characterMedia(sort: ID, page: 35, perPage: 25) {
          ...characterMediaPage
        }
        characterMedia36: characterMedia(sort: ID, page: 36, perPage: 25) {
          ...characterMediaPage
        }
        characterMedia37: characterMedia(sort: ID, page: 37, perPage: 25) {
          ...characterMediaPage
        }
        characterMedia38: characterMedia(sort: ID, page: 38, perPage: 25) {
          ...characterMediaPage
        }
        characterMedia39: characterMedia(sort: ID, page: 39, perPage: 25) {
          ...characterMediaPage
        }
        characterMedia40: characterMedia(sort: ID, page: 40, perPage: 25) {
          ...characterMediaPage
        }
      }
    }

    fragment pageInfo on PageInfo {
      total
      perPage
      currentPage
      lastPage
      hasNextPage
    }

    fragment characterMediaPage on MediaConnection {
      pageInfo {
        ...pageInfo
      }
      edges {
        ...StaffCharacterMedia
      }
    }
  `,
  [staffCharacterMediaFragment],
);

export const StaffRoleMediaQueryBatch2 = graphql(
  `
    query staffRoles($staffId: Int) {
      Staff(id: $staffId, sort: FAVOURITES_DESC) {
        staffMedia8: staffMedia(sort: ID, page: 8, perPage: 25) {
          ...staffMediaPage
        }
        staffMedia9: staffMedia(sort: ID, page: 9, perPage: 25) {
          ...staffMediaPage
        }
        staffMedia10: staffMedia(sort: ID, page: 10, perPage: 25) {
          ...staffMediaPage
        }
        staffMedia11: staffMedia(sort: ID, page: 11, perPage: 25) {
          ...staffMediaPage
        }
        staffMedia12: staffMedia(sort: ID, page: 12, perPage: 25) {
          ...staffMediaPage
        }
        staffMedia13: staffMedia(sort: ID, page: 13, perPage: 25) {
          ...staffMediaPage
        }
        staffMedia14: staffMedia(sort: ID, page: 14, perPage: 25) {
          ...staffMediaPage
        }
        staffMedia15: staffMedia(sort: ID, page: 15, perPage: 25) {
          ...staffMediaPage
        }
        staffMedia16: staffMedia(sort: ID, page: 16, perPage: 25) {
          ...staffMediaPage
        }
        staffMedia17: staffMedia(sort: ID, page: 17, perPage: 25) {
          ...staffMediaPage
        }
        staffMedia18: staffMedia(sort: ID, page: 18, perPage: 25) {
          ...staffMediaPage
        }
        staffMedia19: staffMedia(sort: ID, page: 19, perPage: 25) {
          ...staffMediaPage
        }
        staffMedia20: staffMedia(sort: ID, page: 20, perPage: 25) {
          ...staffMediaPage
        }
      }
    }

    fragment pageInfo on PageInfo {
      total
      perPage
      currentPage
      lastPage
      hasNextPage
    }

    fragment staffMediaPage on MediaConnection {
      pageInfo {
        ...pageInfo
      }
      edges {
        ...StaffRoleMedia
      }
    }
  `,
  [staffRoleMediaFragment],
);
