import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";

const MODAL_ROOT = document.querySelector("#modal-root");

export default function Modal({ onClose, children }) {
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.code !== "Escape") {
        return;
      }
      onClose();
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  });

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div
      className={styles.Overlay}
      onClick={handleBackdropClick}
      role="presentation"
    >
      <div className={styles.Modal}>{children}</div>
    </div>,
    MODAL_ROOT
  );
}
