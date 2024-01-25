"use client";
import { useState } from "react";
import classNames from "classnames";

import styles from "@/app/page.module.css";
import Tab from "./tab";

const tabs = ["All", "Deposit", "Withdraw", "Swap"];

export default function Tabs() {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const handleTabClick = (index: number) => {
    setCurrentTabIndex(index);
  };
  return (
    <section className={classNames(styles.section, styles.tab_section)}>
      {tabs.map((tab, index) => (
        <Tab
          key={index}
          index={index}
          title={tab}
          handleClick={handleTabClick}
          currentTabIndex={currentTabIndex}
        />
      ))}
    </section>
  );
}
