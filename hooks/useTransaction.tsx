import { useContext, useEffect } from "react";
import { TransactionContext } from "@/context/transaction";
import { useTab } from "./useTab";

export const useTransaction = () => {
  const context = useContext(TransactionContext);
  const { tabs, currentTabIndex } = useTab();

  if (context === undefined) {
    throw new Error("useTransaction must be used within a TransactionProvider");
  }

  const currentTab = tabs[currentTabIndex];

  const fetchTransactions = async () => {
    const response = await fetch("/db/data.json");
    const data = await response.json();

    context.handleTransactions(data);
    const paginatedTransactions = data.slice(0, 10);
    context.handlePaginatedTransactions(paginatedTransactions);
  };

  const fetchFilteredTransactions = async () => {
    if (currentTab === "All") return;

    const data = context.transactions;

    const filteredTransactions = data.filter((transaction) =>
      transaction.type.includes(currentTab.toLowerCase())
    );

    context.handleFilteredTransactions(filteredTransactions);
    const paginatedFilteredTransactions = filteredTransactions.slice(0, 10);
    context.handlePaginatedFilteredTransactions(paginatedFilteredTransactions);
  };

  useEffect(() => {
    fetchTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchFilteredTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTab]);
  return context;
};
