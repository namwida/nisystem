import { Link, useLocation } from "react-router-dom";
import styles from "./TermsNav.module.css";

export default function TermsNav() {
    const pathname = useLocation().pathname;
  return (
    <ul className={styles.terms_nav}>
      <li>
        <Link to="/terms/1" className={pathname.includes("/terms/1") ? styles.termsnav_active : ""}>이용약관</Link>
      </li>
      <li>
        <Link to="/terms/2" className={pathname.includes("/terms/2") ? styles.termsnav_active : ""}>개인정보 처리방침</Link>
      </li>
      <li>
        <Link to="/terms/3" className={pathname.includes("/terms/3") ? styles.termsnav_active : ""}>개인정보 수집 및 이용 안내</Link>
      </li>
    </ul>
  );
}
