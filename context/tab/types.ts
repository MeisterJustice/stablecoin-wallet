interface TabProviderProps {
  children: React.ReactNode;
}

interface TabContextProps {
  currentTabIndex: number;
  setCurrentTabIndex: (index: number) => void;
  tabs: string[];
}

export type { TabProviderProps, TabContextProps };
