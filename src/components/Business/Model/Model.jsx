import styles from "./Model.module.css";

export default function Model({ children }) {
  return (
    <section className={styles.business_modle}>
      <table className="inner">{children}</table>
    </section>
  );
}
