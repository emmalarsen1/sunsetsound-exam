import React from "react";
import styles from "@/app/styles/bookingstyles/ToolTip.module.css";

const ToolTip = ({ ToolTipText }) => {
  return (
    <div className={styles.tooltipContainer}>
      <span> </span>
      <div className={styles.infoIcon}>i</div>
      <span> </span>
      <div className={styles.tooltipText}>{ToolTipText}</div>
    </div>
  );
};

export default ToolTip;
