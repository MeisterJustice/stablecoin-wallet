import { useState } from "react";
import styles from "@/app/page.module.css";
import { M2Button, M2Input } from "@/components";
import { awaitFor, formatAmount } from "@/utils";
import { useTransaction } from "@/hooks/useTransaction";
import { useTab } from "@/hooks/useTab";

export default function Form({ close }: { close: () => void }) {
  const {
    handleTransactions,
    handleBalance,
    transactions,
    handlePaginatedTransactions,
    balance,
  } = useTransaction();
  const { setCurrentTabIndex } = useTab();

  const [form, setForm] = useState({
    amount: "",
    address: "",
  });
  const [loading, setLoading] = useState(false);

  const disable = Number(form.amount) > balance || balance === 0;

  const handleChange = (name: string, value: string) => {
    let val = value;
    if (name === "amount") {
      // remove all commas
      val = val.replace(/,/g, "");
      if (val.split(".").length > 2) return;
    }

    setForm({ ...form, [name]: val });
  };

  const handleMax = () => {
    setForm({ ...form, amount: balance.toString() });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);
      // simulate a delay
      await awaitFor(2500);

      const { amount, address } = form;

      const data = {
        id: Math.random().toString(36).substr(2, 9),
        title: `Transfer`,
        amount,
        date: new Date().toISOString(),
        address,
        hash: `0x${Math.random().toString(36).substr(2, 64)}`,
        type: "withdrawal" as "deposit" | "withdrawal" | "swap",
      };

      const newData = [data, ...transactions];

      handleTransactions(newData);
      const paginatedTransactions = newData.slice(0, 10);
      handlePaginatedTransactions(paginatedTransactions);

      handleBalance(Number(amount));

      setCurrentTabIndex(0);

      setForm({ amount: "", address: "" });

      close();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section>
      <h1 className={styles.form_title}>Transfer</h1>

      <form onSubmit={handleSubmit} className={styles.form_wrapper}>
        <M2Input
          onChange={(val) => handleChange("address", val)}
          value={form.address}
          placeholder="Address"
          name="address"
          required
        />

        <M2Input
          onChange={(val) => handleChange("amount", val)}
          value={formatAmount(form.amount)}
          placeholder="0.00"
          label="USDC"
          max={handleMax}
          name="amount"
          required
        />

        <div className={styles.form_btn_wrapper}>
          <M2Button onClick={close} text="Cancel" variant="tertiary" />
          <M2Button
            loading={loading}
            type="submit"
            text="Send"
            variant="secondary"
            disabled={disable}
          />
        </div>
      </form>
    </section>
  );
}
