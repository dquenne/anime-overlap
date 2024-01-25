import React from "react";

import { useQuery } from "urql";
import { graphql } from "gql.tada";

const BirthdayQuery = graphql(`
  query BirthdayCharacters {
    Character(isBirthday: true, sort: FAVOURITES_DESC) {
      id
      name {
        full
      }
      media {
        nodes {
          title {
            romaji
          }
        }
      }
    }
  }
`);

export function Birthday() {
  const [queryResult] = useQuery({ query: BirthdayQuery });
  if (queryResult.fetching) {
    return <>Loading birthday...</>;
  }
  if (queryResult.error) {
    return <>Failed to fetch today's birthday character.</>;
  }
  return (
    <>
      Today is {queryResult.data?.Character?.name?.full}'s birthday (from "
      {queryResult.data?.Character?.media?.nodes?.[0]?.title?.romaji}")
    </>
  );
}
