import styles from "./Description.module.css";

export default function Description({children}) {
  return (
    <section className={`${styles.description} inner`}>
      <ul>{children}</ul>
    </section>
  );
}
