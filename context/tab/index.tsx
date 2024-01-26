import React, { useState, createContext, useContext } from "react";
import { TabContextProps, TabProviderProps } from "./types";

export const TabContext = createContext<TabContextProps | undefined>(undefined);
const tabs = ["All", "Deposit", "Withdraw", "Swap"];

export const TabContextProvider = ({ children }: TabProviderProps) => {
  const [currentTabIndex, setCurrentTabIndex] = useState<number>(0);

  return (
    <TabContext.Provider value={{ currentTabIndex, setCurrentTabIndex, tabs }}>
      {children}
    </TabContext.Provider>
  );
};
