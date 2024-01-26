import { ProviderProps } from "./types";
import { TabContextProvider } from "./tab";
import { TransactionContextProvider } from "./transaction";

export const ContextProvider = ({ children }: ProviderProps) => {
  return (
    <TransactionContextProvider>
      <TabContextProvider>{children}</TabContextProvider>
    </TransactionContextProvider>
  );
};
