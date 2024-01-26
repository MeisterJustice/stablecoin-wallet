import styles from "@/app/page.module.css";
import Header from "./header";
import Tabs from "./tabs";
import Transactions from "./transactions";

export default function Overview() {
  return (
    <main className={styles.main}>
      <Header />
      <Tabs />
      <Transactions />
    </main>
  );
}
