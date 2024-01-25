import classNames from "classnames";
import styles from "@/app/page.module.css";

export default function Header() {
  return (
    <section className={classNames(styles.section, styles.header_section)}>
      <div className={styles.title_wrapper}></div>
    </section>
  );
}
