export interface TabInfo {
  id: number;
  title: string;
  windowId: number;
  groupId: number | undefined;
  url: string;
  favIconUrl?: string;
  pinned?: boolean;
}

export interface GroupInfo {
  id: number;
  title: string;
  windowId: number;
  color?: string;
}

export interface WindowInfo {
  id: number;
  focused: boolean;
  type: string;
}

export interface TabAndGroupData {
  tabs: TabInfo[];
  groups: GroupInfo[];
  windows: WindowInfo[];
}
