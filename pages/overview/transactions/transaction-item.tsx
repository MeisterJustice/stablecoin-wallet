import classNames from "classnames";
import Image from "next/image";
import moment from "moment";

import styles from "@/app/page.module.css";
import { M2ClickAnimation } from "@/components";
import useCopy from "@/hooks/useCopy";
import { formatAddress } from "@/utils";
import { TransactionProps } from "@/context/transaction/types";

export default function TransactionItem({
  address,
  amount,
  date,
  hash,
  title,
  type,
}: TransactionProps) {
  const { copied, copyToClipboard } = useCopy();

  const isDeposit = type === "deposit";
  const isSwap = type === "swap";
  return (
    <div className={styles.transaction_wrapper}>
      <div className={styles.transaction_inner_wrapper}>
        <h5 className={styles.transaction_title}>{title}</h5>
        <div className={styles.transaction_address_wrapper}>
          <p className={styles.transaction_address}>{formatAddress(address)}</p>

          {!copied ? (
            <M2ClickAnimation onClick={() => copyToClipboard(address)}>
              <Image
                src="/copy.svg"
                alt="copy icon"
                width={18}
                height={18}
                className={styles.transaction_copy}
              />
            </M2ClickAnimation>
          ) : (
            <Image
              src="/checkmark.svg"
              alt="checkmark icon"
              width={21.5}
              height={21.5}
              className={styles.transaction_checkmark}
            />
          )}
        </div>

        <p className={styles.transaction_date}>
          {moment(date).format("DD/MM/YYYY HH:mm A")}
        </p>
      </div>

      <p
        className={classNames(styles.transaction_amount, {
          [styles.transaction_amount_withdraw]: !isDeposit,
          [styles.transaction_amount_swap]: isSwap,
        })}
      >
        {!isSwap && <span>{isDeposit ? "+" : "-"}</span>}
        {amount}
      </p>

      <M2ClickAnimation>
        <a
          href={`https://bscscan.com/tx/${hash}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.transaction_bsc_scan}
        >
          <Image
            src="/hyperlink.svg"
            alt="hyperlink icon"
            width={14}
            height={14}
          />
          <p>Bsc Scan</p>
        </a>
      </M2ClickAnimation>
    </div>
  );
}
