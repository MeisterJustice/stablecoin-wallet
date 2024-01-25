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

export { formatAmount };
