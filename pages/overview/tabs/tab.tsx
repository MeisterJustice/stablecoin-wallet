import classNames from "classnames";

import styles from "@/app/page.module.css";
import { M2ClickAnimation } from "@/components";
import { useTab } from "@/hooks/useTab";
import { TabProps } from "./types";

const Tab = ({ index, title }: TabProps) => {
  const { currentTabIndex, setCurrentTabIndex } = useTab();
  return (
    <M2ClickAnimation onClick={() => setCurrentTabIndex(index)}>
      <div
        role="button"
        className={classNames(styles.tab, {
          [styles.tab_active]: index === currentTabIndex,
        })}
      >
        <p>{title}</p>
      </div>
    </M2ClickAnimation>
  );
};

export default Tab;
