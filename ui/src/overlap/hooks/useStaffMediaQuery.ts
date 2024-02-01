import { useQuery } from "urql";
import {
  StaffCharacterMediaQueryBatch2,
  StaffMediaQuery,
  StaffRoleMediaQueryBatch2,
} from "../queries/staffMedia";

/**
 * Makes 1-3 API calls to fetch all the Media a Staff has ever worked on. As
 * long as the Staff has not voices more than 450 characters or had more than
 * 175 staff roles, this will only make 1 API call.
 *
 * See StaffMediaQuery's jsdoc for why this has to merge these pages in such an
 * ugly way.
 */
export function useStaffMediaQuery(staffId: number) {
  const [firstBatchResult] = useQuery({
    query: StaffMediaQuery,
    variables: { staffId },
    pause: isNaN(staffId),
  });

  const [characterBatch2Result] = useQuery({
    query: StaffCharacterMediaQueryBatch2,
    variables: { staffId },
    pause:
      firstBatchResult.data?.Staff?.characterMedia18?.pageInfo?.hasNextPage !==
      true,
  });

  const [staffBatch2Result] = useQuery({
    query: StaffRoleMediaQueryBatch2,
    variables: { staffId },
    pause:
      firstBatchResult.data?.Staff?.staffMedia7?.pageInfo?.hasNextPage !== true,
  });

  const collapsedData = {
    Staff: firstBatchResult.data?.Staff,
    collapsedCharacters: [
      ...(firstBatchResult.data?.Staff?.characterMedia1?.edges || []),
      ...(firstBatchResult.data?.Staff?.characterMedia2?.edges || []),
      ...(firstBatchResult.data?.Staff?.characterMedia3?.edges || []),
      ...(firstBatchResult.data?.Staff?.characterMedia4?.edges || []),
      ...(firstBatchResult.data?.Staff?.characterMedia5?.edges || []),
      ...(firstBatchResult.data?.Staff?.characterMedia6?.edges || []),
      ...(firstBatchResult.data?.Staff?.characterMedia7?.edges || []),
      ...(firstBatchResult.data?.Staff?.characterMedia8?.edges || []),
      ...(firstBatchResult.data?.Staff?.characterMedia9?.edges || []),
      ...(firstBatchResult.data?.Staff?.characterMedia10?.edges || []),
      ...(firstBatchResult.data?.Staff?.characterMedia11?.edges || []),
      ...(firstBatchResult.data?.Staff?.characterMedia12?.edges || []),
      ...(firstBatchResult.data?.Staff?.characterMedia13?.edges || []),
      ...(firstBatchResult.data?.Staff?.characterMedia14?.edges || []),
      ...(firstBatchResult.data?.Staff?.characterMedia15?.edges || []),
      ...(firstBatchResult.data?.Staff?.characterMedia16?.edges || []),
      ...(firstBatchResult.data?.Staff?.characterMedia17?.edges || []),
      ...(firstBatchResult.data?.Staff?.characterMedia18?.edges || []),
      ...(characterBatch2Result.data?.Staff?.characterMedia19?.edges || []),
      ...(characterBatch2Result.data?.Staff?.characterMedia20?.edges || []),
      ...(characterBatch2Result.data?.Staff?.characterMedia21?.edges || []),
      ...(characterBatch2Result.data?.Staff?.characterMedia22?.edges || []),
      ...(characterBatch2Result.data?.Staff?.characterMedia23?.edges || []),
      ...(characterBatch2Result.data?.Staff?.characterMedia24?.edges || []),
      ...(characterBatch2Result.data?.Staff?.characterMedia25?.edges || []),
      ...(characterBatch2Result.data?.Staff?.characterMedia26?.edges || []),
      ...(characterBatch2Result.data?.Staff?.characterMedia27?.edges || []),
      ...(characterBatch2Result.data?.Staff?.characterMedia28?.edges || []),
      ...(characterBatch2Result.data?.Staff?.characterMedia29?.edges || []),
      ...(characterBatch2Result.data?.Staff?.characterMedia30?.edges || []),
      ...(characterBatch2Result.data?.Staff?.characterMedia31?.edges || []),
      ...(characterBatch2Result.data?.Staff?.characterMedia32?.edges || []),
      ...(characterBatch2Result.data?.Staff?.characterMedia33?.edges || []),
      ...(characterBatch2Result.data?.Staff?.characterMedia34?.edges || []),
      ...(characterBatch2Result.data?.Staff?.characterMedia35?.edges || []),
      ...(characterBatch2Result.data?.Staff?.characterMedia36?.edges || []),
      ...(characterBatch2Result.data?.Staff?.characterMedia37?.edges || []),
      ...(characterBatch2Result.data?.Staff?.characterMedia38?.edges || []),
      ...(characterBatch2Result.data?.Staff?.characterMedia39?.edges || []),
      ...(characterBatch2Result.data?.Staff?.characterMedia40?.edges || []),
    ],
    collapsedStaffRoles: [
      ...(firstBatchResult.data?.Staff?.staffMedia1?.edges || []),
      ...(firstBatchResult.data?.Staff?.staffMedia2?.edges || []),
      ...(firstBatchResult.data?.Staff?.staffMedia3?.edges || []),
      ...(firstBatchResult.data?.Staff?.staffMedia4?.edges || []),
      ...(firstBatchResult.data?.Staff?.staffMedia5?.edges || []),
      ...(firstBatchResult.data?.Staff?.staffMedia6?.edges || []),
      ...(firstBatchResult.data?.Staff?.staffMedia7?.edges || []),
      ...(staffBatch2Result.data?.Staff?.staffMedia8?.edges || []),
      ...(staffBatch2Result.data?.Staff?.staffMedia9?.edges || []),
      ...(staffBatch2Result.data?.Staff?.staffMedia10?.edges || []),
      ...(staffBatch2Result.data?.Staff?.staffMedia11?.edges || []),
      ...(staffBatch2Result.data?.Staff?.staffMedia12?.edges || []),
      ...(staffBatch2Result.data?.Staff?.staffMedia13?.edges || []),
      ...(staffBatch2Result.data?.Staff?.staffMedia14?.edges || []),
      ...(staffBatch2Result.data?.Staff?.staffMedia15?.edges || []),
      ...(staffBatch2Result.data?.Staff?.staffMedia16?.edges || []),
      ...(staffBatch2Result.data?.Staff?.staffMedia17?.edges || []),
      ...(staffBatch2Result.data?.Staff?.staffMedia18?.edges || []),
      ...(staffBatch2Result.data?.Staff?.staffMedia19?.edges || []),
      ...(staffBatch2Result.data?.Staff?.staffMedia20?.edges || []),
    ],
  };

  return {
    ...firstBatchResult,
    data: collapsedData,
    fetching:
      firstBatchResult.fetching ||
      characterBatch2Result.fetching ||
      staffBatch2Result.fetching,
    error:
      firstBatchResult.error ||
      characterBatch2Result.error ||
      staffBatch2Result.error,
  };
}
