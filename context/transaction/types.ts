interface TransactionsContextProps {
  transactions: TransactionProps[];
  paginatedTransactions: TransactionProps[];
  filteredTransactions: TransactionProps[];
  paginatedFilteredTransactions: TransactionProps[];
  handleTransactions: (transactions: TransactionProps[]) => void;
  handleFilteredTransactions: (transactions: TransactionProps[]) => void;
  handlePaginatedTransactions: (transactions: TransactionProps[]) => void;
  handlePaginatedFilteredTransactions: (
    transactions: TransactionProps[]
  ) => void;
}

interface TransactionProps {
  id: string;
  title: string;
  amount: string;
  date: string;
  address: string;
  hash: string;
  type: "deposit" | "withdrawal" | "swap";
}

export type { TransactionsContextProps, TransactionProps };
