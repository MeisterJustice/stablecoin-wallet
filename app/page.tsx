import classNames from "classnames";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <section
        className={classNames(styles.section, styles.header_section)}
      ></section>
    </main>
  );
}
