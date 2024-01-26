const formatAmount = (amount: string): string => {
  if (amount === "") return amount;

  const [integerPart, decimalPart] = amount.split(".");

  // Convert the integer part to locale string
  const formattedIntegerPart = Number(
    integerPart.replace(/,/g, "")
  ).toLocaleString();

  const value =
    decimalPart !== undefined
      ? `${formattedIntegerPart}.${decimalPart}`
      : formattedIntegerPart;

  return value;
};

const formatAddress = (address: string): string => {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

const awaitFor = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const range = (start: number, end: number): number[] => {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
};

const isValidAddress = (address: string): boolean => {
  // basic implementation
  return address.length > 10;
};

export { formatAmount, formatAddress, awaitFor, range, isValidAddress };
