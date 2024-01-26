import React, { useState, createContext } from "react";
import { TransactionProps, TransactionsContextProps } from "./types";
import { ProviderProps } from "../types";

export const TransactionContext = createContext<
  TransactionsContextProps | undefined
>(undefined);

export const TransactionContextProvider = ({ children }: ProviderProps) => {
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);
  const [paginatedTransactions, setPaginatedTransactions] = useState<
    TransactionProps[]
  >([]);
  const [filteredTransactions, setFilteredTransactions] = useState<
    TransactionProps[]
  >([]);
  const [paginatedFilteredTransactions, setPaginatedFilteredTransactions] =
    useState<TransactionProps[]>([]);
  const [balance, setBalance] = useState(13550.52);

  const handleTransactions = (transactions: TransactionProps[]) => {
    setTransactions(transactions);
  };

  const handlePaginatedTransactions = (transactions: TransactionProps[]) => {
    setPaginatedTransactions(transactions);
  };

  const handleFilteredTransactions = (transactions: TransactionProps[]) => {
    setFilteredTransactions(transactions);
  };

  const handlePaginatedFilteredTransactions = (
    transactions: TransactionProps[]
  ) => {
    setPaginatedFilteredTransactions(transactions);
  };

  const handleBalance = (amount: number) => {
    setBalance((prevBalance) => prevBalance - amount);
  };

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        filteredTransactions,
        paginatedTransactions,
        paginatedFilteredTransactions,
        balance,
        handleFilteredTransactions,
        handleTransactions,
        handlePaginatedTransactions,
        handlePaginatedFilteredTransactions,
        handleBalance,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
