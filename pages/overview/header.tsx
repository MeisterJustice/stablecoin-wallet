import Image from "next/image";

import styles from "@/app/page.module.css";

export default function Header() {
  return (
    <section className={styles.section}>
      <div className={styles.title_wrapper}>
        <Image
          src="/usdc.svg"
          alt="stablecoin logo"
          width={50}
          height={50}
          className={styles.stablecoin}
        />
        <h1 className={styles.title}>USDC Wallet</h1>
      </div>

      <div className={styles.balance_wrapper}>
        <h5 className={styles.balance_title}>Available Balance</h5>

        <h3 className={styles.balance}>23,890.62</h3>
      </div>
    </section>
  );
}
