import { useEffect, useState } from "react";
import { GroupInfo, TabAndGroupData, TabInfo, WindowInfo } from "../types";

export const getTabs = () => {
  const [data, setData] = useState<TabAndGroupData>({
    tabs: [],
    groups: [],
    windows: [],
  });

  useEffect(() => {
    chrome.windows.getAll({ populate: true }, (windows) => {
      const newTabs: TabInfo[] = [];
      const newGroups: GroupInfo[] = [];
      const newWindows: WindowInfo[] = [];

      windows.forEach((win) => {
        const windowId = win.id!;
        newWindows.push({
          id: windowId,
          focused: win.focused,
          type: win.type!,
        });

        win.tabs?.forEach((tab) => {
          const tabInfo: TabInfo = {
            id: tab.id!,
            title: tab.title!,
            url: tab.url!,
            windowId,
            groupId: tab.groupId,
            favIconUrl: tab.favIconUrl,
          };
          newTabs.push(tabInfo);
        });
      });

      // タブグループ情報の取得
      if (chrome.tabGroups && typeof chrome.tabGroups.query === "function") {
        chrome.tabGroups.query({}, (groups) => {
          groups.forEach((group) => {
            newGroups.push({
              id: group.id!,
              title: group.title!,
              windowId: group.windowId!,
              color: group.color,
            });
          });
          setData({ tabs: newTabs, groups: newGroups, windows: newWindows });
        });
      } else {
        console.warn("Tab Groups API is not available.");
        setData({ tabs: newTabs, groups: newGroups, windows: newWindows });
      }
    });
  }, []);

  return data;
}
