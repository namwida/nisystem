import { Link } from "react-router-dom";
import styles from "./Brochure.module.css";

export default function Brochure({ link_add }) {
  return (
    <Link className={styles.brochure} to={link_add} target="blank">
      브로슈어 보기
    </Link>
  );
}
