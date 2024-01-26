import classNames from "classnames";

import styles from "@/app/page.module.css";
import TransactionItem from "./transaction-item";
import { useTransaction } from "@/hooks/useTransaction";
import { useTab } from "@/hooks/useTab";
import { M2Pagination } from "@/components";

export default function Transactions() {
  const { paginatedTransactions, paginatedFilteredTransactions } =
    useTransaction();
  const { tabs, currentTabIndex } = useTab();

  const currentTab = tabs[currentTabIndex];
  return (
    <section className={classNames(styles.section, styles.transaction_section)}>
      <M2Pagination />

      {currentTab === "All" && (
        <div>
          {paginatedTransactions.map((transaction) => (
            <TransactionItem key={transaction.id} {...transaction} />
          ))}
        </div>
      )}

      {currentTab !== "All" && (
        <div>
          {paginatedFilteredTransactions.map((transaction) => (
            <TransactionItem key={transaction.id} {...transaction} />
          ))}
        </div>
      )}
    </section>
  );
}
