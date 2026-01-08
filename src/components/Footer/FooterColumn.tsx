import React from "react";
import styles from "./Footer.module.scss";

interface Props {
  title: string;
  items: string[];
}

const FooterColumn: React.FC<Props> = ({ title, items }) => (
  <div className={styles.column}>
    <h4>{title}</h4>
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
);

export default FooterColumn;
