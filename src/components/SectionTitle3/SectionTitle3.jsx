import styles from "./SectionTitle3.module.css";

export default function SectionTitle3({ title, direction }) {
  return (
    <div className={`${styles.page_title3} inner`}>
      <h2 className={direction == "center" ? styles.center : ""}>
        <span>
          {title}
        </span>
      </h2>
    </div>
  );
}
