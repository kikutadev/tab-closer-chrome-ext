import { useEffect } from "react";
import { TabInfo, GroupInfo } from "../types"; // 適切なパスに修正してください

export const useDeleteTabGroups = (
  groupNamesToDelete: string[],
  tabs: TabInfo[],
  groups: GroupInfo[]
) => {
  useEffect(() => {
    const targetGroupIds = groups
      .filter((group) => groupNamesToDelete.includes(group.title))
      .map((group) => group.id);

    targetGroupIds.forEach((groupId) => {
      const tabIdsInGroup = tabs
        .filter((tab) => tab.groupId === groupId)
        .map((tab) => tab.id);
      if (tabIdsInGroup.length > 0) {
        chrome.tabs.remove(tabIdsInGroup);
      }
    });
  }, [groupNamesToDelete, tabs, groups]);
};
