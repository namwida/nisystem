import styles from "./Component.module.css";

export default function BusinessComponent({children}) {
  return (
    <>
      <section className={`${styles.business_component} inner`}>
        {children}
      </section>
    </>
  );
}
