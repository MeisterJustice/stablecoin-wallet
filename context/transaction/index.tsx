import React, { useState, createContext } from "react";
import { TransactionProps, TransactionsContextProps } from "./types";
import { ProviderProps } from "../types";

export const TransactionContext = createContext<
  TransactionsContextProps | undefined
>(undefined);

export const TransactionContextProvider = ({ children }: ProviderProps) => {
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);
  const [filteredTransactions, setFilteredTransactions] = useState<
    TransactionProps[]
  >([]);

  const handleTransactions = (transactions: TransactionProps[]) => {
    setTransactions(transactions);
  };

  const handleFilteredTransactions = (transactions: TransactionProps[]) => {
    setFilteredTransactions(transactions);
  };

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        filteredTransactions,
        handleFilteredTransactions,
        handleTransactions,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
