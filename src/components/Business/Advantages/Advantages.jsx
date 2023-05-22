import styles from "./Advantages.module.css";
import { AiOutlineMoneyCollect } from "react-icons/ai";

export default function BusinessAdvantages({ children }) {
  return (
    <section className={styles.business_advantages}>
      <div className="inner">
        <ul>{children}</ul>
      </div>
    </section>
  );
}
