import classNames from "classnames";

import styles from "@/app/page.module.css";
import { M2ClickAnimation } from "@/components";
import { TabProps } from "./types";

const Tab = ({ index, title, handleClick, currentTabIndex }: TabProps) => {
  return (
    <M2ClickAnimation onClick={() => handleClick(index)}>
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
