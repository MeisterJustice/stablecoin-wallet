"use client";
import classNames from "classnames";

import styles from "@/app/page.module.css";
import { useTab } from "@/hooks/useTab";
import Tab from "./tab";

export default function Tabs() {
  const { tabs } = useTab();

  return (
    <section className={classNames(styles.section, styles.tab_section)}>
      {tabs.map((tab, index) => (
        <Tab key={index} index={index} title={tab} />
      ))}
    </section>
  );
}
