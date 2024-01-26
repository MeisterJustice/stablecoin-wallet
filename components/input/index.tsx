import classNames from "classnames";
import { motion, AnimatePresence } from "framer-motion";

import InputProps from "./types";
import styles from "./input.module.css";
import { M2ClickAnimation } from "..";

export default function M2Input({
  onChange,
  value,
  label,
  max,
  variant = "primary",
  name,
  error,
  ...rest
}: InputProps) {
  return (
    <>
      <div className={styles.input_wrapper}>
        <input
          id={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={classNames(styles.input, {
            [styles.secondary_input]: variant === "secondary",
          })}
          {...rest}
        />

        {label && (
          <div className={styles.label_wrapper}>
            {max && (
              <M2ClickAnimation onClick={max}>
                <div className={styles.max_wrapper}>
                  <p>Max</p>
                </div>
              </M2ClickAnimation>
            )}

            <label htmlFor={name} className={styles.label}>
              {label}
            </label>
          </div>
        )}
      </div>

      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={styles.error_wrapper}
          >
            <p>{error}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
