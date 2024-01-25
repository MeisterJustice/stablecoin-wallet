import { useState } from "react";
import Image from "next/image";

import styles from "@/app/page.module.css";
import { M2Button, M2Modal } from "@/components";
import Form from "./form";

const Icon = <Image src="/send.svg" alt="send icon" width={20} height={20} />;

export default function Header() {
  const [openModal, setOpenModal] = useState(false);

  const handleModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <>
      <section className={styles.section}>
        <div className={styles.title_outter_wrapper}>
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

          <M2Button onClick={handleModal} icon={Icon} text="Send" />
        </div>

        <div className={styles.balance_wrapper}>
          <h5 className={styles.balance_title}>Available Balance</h5>

          <h3 className={styles.balance}>23,890.62</h3>
        </div>
      </section>

      {openModal && (
        <M2Modal close={handleModal}>
          <Form />
        </M2Modal>
      )}
    </>
  );
}
