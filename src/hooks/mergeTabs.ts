import { useEffect, useState } from "react";
import { TabInfo } from "../types";

export const useTabs = () => {
  const [tabs, setTabs] = useState<TabInfo[]>([]);

  useEffect(() => {
    // タブ情報を取得
    chrome.tabs.query({}, (result) => {
      const tabInfo = result.map((tab) => ({
        id: tab.id!,
        title: tab.title!,
        url: tab.url!,
        windowId: tab.windowId!,
        groupId: tab.groupId,
      }));
      setTabs(tabInfo);
    });
  }, []);

  return tabs;
};

export const useMergeTabs = (
  tabs: TabInfo[],
  duplicateURL: boolean = false
) => {
  const mergeTabs = () => {
    if (duplicateURL) {
      // URLが重複しているタブを探す
      const urlMap = new Map<string, number[]>();
      tabs.forEach((tab) => {
        if (tab.url) {
          if (!urlMap.has(tab.url)) {
            urlMap.set(tab.url, []);
          }
          urlMap.get(tab.url)!.push(tab.id);
        }
      });

      // 重複しているタブを閉じる
      urlMap.forEach((tabIds, url) => {
        if (tabIds.length > 1) {
          // 最初のタブ以外を閉じる
          chrome.tabs.remove(tabIds.slice(1));
        }
      });
    } else {
      // グループに所属しているタブをマージ
      const targetTabs = tabs.filter((tab) => tab.groupId !== undefined);
      const targetTabIds = targetTabs.map((tab) => tab.id);
      if (targetTabIds.length > 0) {
        chrome.tabs.group({ tabIds: targetTabIds });
      }
    }
  };

  return mergeTabs;
};
