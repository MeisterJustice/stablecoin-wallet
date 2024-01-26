const formatAmount = (amount: string) => {
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

const formatAddress = (address: string) => {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

const awaitFor = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export { formatAmount, formatAddress, awaitFor };
