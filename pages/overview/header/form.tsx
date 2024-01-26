import { useState } from "react";
import styles from "@/app/page.module.css";
import { M2Button, M2Input } from "@/components";
import { awaitFor, formatAmount } from "@/utils";

export default function Form({ close }: { close: () => void }) {
  const [form, setForm] = useState({
    amount: "",
    address: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (name: string, value: string) => {
    if (name === "amount") {
      if (value.split(".").length > 2) return;
    }
    setForm({ ...form, [name]: value });
  };

  const handleMax = () => {
    setForm({ ...form, amount: "25000.30" });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);
      await awaitFor(2000);

      console.log(form);
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
          />
        </div>
      </form>
    </section>
  );
}
