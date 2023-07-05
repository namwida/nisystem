import { Link } from "react-router-dom";
import styles from "./BusinessCustomer.module.css";
import { BsTelephone, BsTv } from "react-icons/bs";

export default function BusinessCustomer() {
  return (
    <section className={`${styles.business_customer} inner`}>
      <h2>빠르고 편하게 상담받아보세요</h2>
      <div>
        <Link to="/customer" className={styles.mail}>
          <BsTv size="24" />
          고객문의 바로가기
        </Link>
        <a href="tel:1666-2869" className={styles.tel}>
          <BsTelephone size="24" />
          1666-2869 전화걸기
        </a>
      </div>
    </section>
  );
}
