import { motion } from "framer-motion";
import classNames from "classnames";

import styles from "./button.module.css";
import { ButtonProps } from "./types";

const M2Button = ({
  onClick,
  text,
  type = "button",
  disabled,
  loading,
  variant = "primary",
  icon,
}: ButtonProps) => {
  if (variant === "primary") {
    return (
      <div className={styles.primary_wrapper}>
        <motion.button
          onClick={onClick}
          whileHover={{ top: 0, left: 0 }}
          whileTap={{ scale: 0.9 }}
          initial={{ top: 0, left: 0 }}
          transition={{ ease: "backOut" }}
          className={styles.primary_btn}
          disabled={loading || disabled}
          type={type}
        >
          {icon && icon}
          <p>{text}</p>
        </motion.button>
      </div>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.9 }}
      transition={{ ease: "backOut" }}
      className={classNames(styles.btn, {
        [styles.secondary_btn]: variant === "secondary",
        [styles.tertiary_btn]: variant === "tertiary",

        [styles.disabled]: disabled,
      })}
      disabled={loading || disabled}
      type={type}
    >
      {icon && icon}

      {loading && <div className={styles.spinner} />}
      {!loading && <p>{text}</p>}
    </motion.button>
  );
};

export default M2Button;
