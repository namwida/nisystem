import { Link } from "react-router-dom";
import styles from "./Datasheet.module.css";

export default function BusinessModelDatasheet() {
  return (
    <Link
      className={styles.business_model_datasheet}
      to="https://www.fortinet.com/content/dam/fortinet/assets/data-sheets/ko_kr/ds-FortiGate100E-ko.pdfG"
    >
      데이터시트 보기
    </Link>
  );
}
