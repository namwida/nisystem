import Brochure from "../Brochure/Brochure";
import styles from "./Outline.module.css";

export default function BusinessOutline({ h3, p1, p2, link }) {
  return (
    <section className={`${styles.business_outline} inner`}>
      <h3>{h3}</h3>
      <p>{p1}</p>
      <p>{p2}</p>
      {link && <Brochure link_add={link} />}
    </section>
  );
}
