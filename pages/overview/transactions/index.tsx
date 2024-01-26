import classNames from "classnames";

import styles from "@/app/page.module.css";
import TransactionItem from "./transaction-item";
import { useTransaction } from "@/hooks/useTransaction";
import { useTab } from "@/hooks/useTab";

const transactions = [
  {
    id: 1,
    title: "Transfer",
    amount: "1,000.00",
    date: "2021-07-01",
    address: "0x1234567890123456789012345678901234567890",
    hash: "0x1234567890123456789012345678901234567890123456789012345678901234",
  },
  {
    id: 2,
    title: "Received",
    amount: "1,000.00",
    date: "2021-07-01",
    address: "0x1234567890123456789012345678901234567890",
    hash: "0x1234567890123456789012345678901234567890123456789012345678901234",
  },
  {
    id: 3,
    title: "Transfer",
    amount: "1,000.00",
    date: "2021-07-01",
    address: "0x1234567890123456789012345678901234567890",
    hash: "0x1234567890123456789012345678901234567890123456789012345678901234",
  },
  {
    id: 4,
    title: "Received",
    amount: "1,000.00",
    date: "2021-07-01",
    address: "0x1234567890123456789012345678901234567890",
    hash: "0x1234567890123456789012345678901234567890123456789012345678901234",
  },
  {
    id: 5,
    title: "Transfer",
    amount: "1,000.00",
    date: "2021-07-01",
    address: "0x1234567890123456789012345678901234567890",
    hash: "0x1234567890123456789012345678901234567890123456789012345678901234",
  },
  {
    id: 6,
    title: "Received",
    amount: "1,000.00",
    date: "2021-07-01",
    address: "0x1234567890123456789012345678901234567890",
    hash: "0x1234567890123456789012345678901234567890123456789012345678901234",
  },
  {
    id: 7,
    title: "Transfer",
    amount: "1,000.00",
    date: "2021-07-01",
    address: "0x1234567890123456789012345678901234567890",
    hash: "0x1234567890123456789012345678901234567890123456789012345678901234",
  },
  {
    id: 8,
    title: "Received",
    amount: "1,000.00",
    date: "2021-07-01",
    address: "0x1234567890123456789012345678901234567890",
    hash: "0x1234567890123456789012345678901234567890123456789012345678901234",
  },
  {
    id: 9,
    title: "Transfer",
    amount: "1,000.00",
    date: "2021-07-01",
    address: "0x1234567890123456789012345678901234567890",
    hash: "0x1234567890123456789012345678901234567890123456789012345678901234",
  },
  {
    id: 10,
    title: "Received",
    amount: "1,000.00",
    date: "2021-07-01",
    address: "0x1234567890123456789012345678901234567890",
    hash: "0x1234567890123456789012345678901234567890123456789012345678901234",
  },
];

export default function Transactions() {
  const { handleTransactions, transactions, filteredTransactions } =
    useTransaction();
  const { tabs, currentTabIndex } = useTab();

  const currentTab = tabs[currentTabIndex];
  return (
    <section className={classNames(styles.section, styles.transaction_section)}>
      {currentTab === "All" && (
        <div>
          {transactions.map((transaction) => (
            <TransactionItem key={transaction.id} {...transaction} />
          ))}
        </div>
      )}

      {currentTab !== "All" && (
        <div>
          {filteredTransactions.map((transaction) => (
            <TransactionItem key={transaction.id} {...transaction} />
          ))}
        </div>
      )}
    </section>
  );
}
