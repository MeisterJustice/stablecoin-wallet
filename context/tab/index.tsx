import React, { useState, createContext } from "react";
import { TabContextProps } from "./types";
import { ProviderProps } from "../types";

export const TabContext = createContext<TabContextProps | undefined>(undefined);
const tabs = ["All", "Deposit", "Withdraw", "Swap"];

export const TabContextProvider = ({ children }: ProviderProps) => {
  const [currentTabIndex, setCurrentTabIndex] = useState<number>(0);

  return (
    <TabContext.Provider value={{ currentTabIndex, setCurrentTabIndex, tabs }}>
      {children}
    </TabContext.Provider>
  );
};
