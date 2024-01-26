interface TransactionsContextProps {
  transactions: TransactionProps[];
  filteredTransactions: TransactionProps[];
  handleTransactions: (transactions: TransactionProps[]) => void;
  handleFilteredTransactions: (transactions: TransactionProps[]) => void;
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
