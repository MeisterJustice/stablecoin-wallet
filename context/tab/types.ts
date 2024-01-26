interface TabContextProps {
  currentTabIndex: number;
  setCurrentTabIndex: (index: number) => void;
  tabs: string[];
}

export type { TabContextProps };
