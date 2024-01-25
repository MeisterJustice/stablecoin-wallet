import { useState } from "react";
import styles from "@/app/page.module.css";
import { M2Input } from "@/components";
import { formatAmount } from "@/utils";

export default function Form() {
  const [form, setForm] = useState({
    amount: "",
    address: "",
  });

  const handleChange = (name: string, value: string) => {
    if (name === "amount") {
      if (value.split(".").length > 2) return;
    }
    setForm({ ...form, [name]: value });
  };

  const handleMax = () => {
    setForm({ ...form, amount: "25000.30" });
  };
  return (
    <section>
      <h1 className={styles.form_title}>Transfer</h1>

      <form className={styles.form_wrapper}>
        <M2Input
          onChange={(val) => handleChange("address", val)}
          value={form.address}
          placeholder="Address"
          name="address"
        />

        <M2Input
          onChange={(val) => handleChange("amount", val)}
          value={formatAmount(form.amount)}
          placeholder="0.00"
          label="USDC"
          max={handleMax}
          name="amount"
        />
      </form>
    </section>
  );
}
