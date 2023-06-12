import styles from "./SectionTitle2.module.css";

export default function SectionTitle2({ title }) {
  return (
    <div className={`${styles.page_title} inner`}>
      <h2>{title}</h2>
    </div>
  );
}
