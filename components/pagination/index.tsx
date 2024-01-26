import { useEffect, useState } from "react";
import { useTransaction } from "@/hooks/useTransaction";
import { useTab } from "@/hooks/useTab";
import styles from "./pagination.module.css";
import classNames from "classnames";
import { M2ClickAnimation } from "..";

export default function M2Pagination() {
  const {
    handleTransactions,
    transactions,
    filteredTransactions,
    handleFilteredTransactions,
    handlePaginatedFilteredTransactions,
    handlePaginatedTransactions,
  } = useTransaction();
  const { tabs, currentTabIndex } = useTab();

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const currentTab = tabs[currentTabIndex];
  const showAllTransactions = currentTab === "All";
  const txnLength = showAllTransactions
    ? transactions.length
    : filteredTransactions.length;

  const totalPages = Math.ceil(txnLength / itemsPerPage);

  const nextPage = () => {
    if (currentPage === totalPages) return;
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
  };

  const handleData = () => {
    const indexOfLastTransaction = currentPage * itemsPerPage;
    const indexOfFirstTransaction = indexOfLastTransaction - itemsPerPage;

    if (showAllTransactions) {
      const currentTransactions = transactions.slice(
        indexOfFirstTransaction,
        indexOfLastTransaction
      );

      handlePaginatedTransactions(currentTransactions);
    } else {
      const currentTransactions = filteredTransactions.slice(
        indexOfFirstTransaction,
        indexOfLastTransaction
      );

      handlePaginatedFilteredTransactions(currentTransactions);
    }
  };

  useEffect(() => {
    handleData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [currentTab]);
  return (
    <div className={styles.pagination}>
      <M2ClickAnimation onClick={prevPage}>
        <p
          className={classNames(styles.pagination_item, {
            [styles.pagination_item_disabled]: currentPage === 1,
          })}
        >
          PREV
        </p>
      </M2ClickAnimation>

      <M2ClickAnimation onClick={nextPage}>
        <p
          className={classNames(styles.pagination_item, {
            [styles.pagination_item_disabled]: currentPage === totalPages,
          })}
        >
          NEXT
        </p>
      </M2ClickAnimation>
    </div>
  );
}
