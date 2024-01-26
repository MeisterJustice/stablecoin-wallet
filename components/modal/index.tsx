import { useEffect } from "react";
import { motion } from "framer-motion";

import styles from "./modal.module.css";
import { ModalProps } from "./types";

const M2Modal = ({ close, children }: ModalProps) => {
  useEffect(() => {
    // Add no-scroll class to body when the modal opens
    document.body.classList.add("no-scroll");

    // Remove no-scroll class when the modal closes
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.modal}
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        onClick={close}
        className={styles.modal_inner}
      />
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        className={styles.modal_child}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default M2Modal;
