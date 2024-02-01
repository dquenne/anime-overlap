import {
  staffCharacterMediaFragment,
  staffRoleMediaFragment,
} from "./queries/staffFragments";

import { staffInfoFragment } from "./queries/staffMedia";
import { useStaffMediaQuery } from "./hooks/useStaffMediaQuery";
import { readFragment } from "gql.tada";
import { useMemo } from "react";

export function Staff(props: { staffId: string }) {
  const { staffId } = props;

  const queryResult = useStaffMediaQuery(Number.parseInt(staffId));

  const mediaIds = useMemo(() => {
    return new Set([
      ...queryResult.data.collapsedCharacters.map(
        (mediaCharacter) =>
          readFragment(staffCharacterMediaFragment, mediaCharacter)?.media?.id,
      ),
      ...queryResult.data.collapsedStaffRoles.map(
        (mediaCharacter) =>
          readFragment(staffRoleMediaFragment, mediaCharacter)?.media?.id,
      ),
    ]);
  }, [queryResult.data]);

  if (queryResult.fetching) {
    return <>Loading staff information...</>;
  }
  if (queryResult.error) {
    return <>Failed to fetch Staff information.</>;
  }
  if (!queryResult.data.Staff) {
    return <>Enter an AniList Staff ID to look up credits.</>;
  }

  return (
    <>
      <p>
        Page for{" "}
        {readFragment(staffInfoFragment, queryResult.data?.Staff)?.name?.full}.
      </p>
      <p>
        This person has {queryResult.data?.collapsedCharacters.length} voice
        roles and {queryResult.data?.collapsedStaffRoles.length} staff roles.
      </p>
      <p>{mediaIds.size} total unique Media IDs:</p>
      <p> {[...mediaIds].join(", ")}</p>
    </>
  );
}
